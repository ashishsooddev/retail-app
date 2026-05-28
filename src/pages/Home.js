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

    return (
    <motion.div
            className="home-page"
            id="home-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
      <Header cartCount={0} />
      <HeroBanner />
      <SecondaryBanner />

        <section className="filter-bar" id="filter-bar">
            <div className="filter-wrapper">
            <Filter
                categories={categories}
                selectedCategory={state.category}
                onCategoryChange={(category) =>
                dispatch({ type: "SET_CATEGORY", payload: category })
                }
            />
            <Sort
                sortBy={state.sortBy}
                onSortChange={(value) =>
                dispatch({ type: "SET_SORT", payload: value })
                }
            />
            </div>
        </section>
        
        <main className="product-section" id="product-section">
            {loading && <div className="loading-box">Loading products...</div>}
            
            {!loading && error && <div className="error-box">{error}</div>}

            {!loading && !error && filteredProducts.length === 0 && (
            <div className="empty-box">No products found for this category.</div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
            <div className="product-grid" id="product-grid">
                {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
            )}
        </main>
    </motion.div>

  );
}

export default Home;