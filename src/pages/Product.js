import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductGallery from "../components/ProductGallery";
import { useCart } from "../context/CartContext";
