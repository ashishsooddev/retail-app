import { useEffect, useMemo, useReducer, useState } from "react";
import { motion } from "framer-motion";
import { getCategories, getProducts } from "../api/api";

import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";

const initialState = {
  category: "all",
  sortBy: "featured",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SORT":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        setProducts(productsData);
        setCategories(["all", ...categoriesData]);
        setError("");

      } catch (err) {
        console.error(err);
        setError("Failed to load products. Please try again later.");

      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  
    const filteredProducts = useMemo(() => {
    let result = [...products];

    if (state.category !== "all") {
      result = result.filter((item) => item.category === state.category);
    }

    switch (state.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return result;
  }, [products, state.category, state.sortBy]);
  );
}

export default Home;