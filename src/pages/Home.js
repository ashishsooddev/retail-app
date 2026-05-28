import { useEffect, useMemo, useReducer, useState } from "react";
import { motion } from "framer-motion";
import { getCategories, getProducts } from "../api/api";

import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";

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
  return (
<></>
  );
}

export default Home;