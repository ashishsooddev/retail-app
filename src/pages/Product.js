import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductGallery from "../components/ProductGallery";
import { useCart } from "../context/CartContext";

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setAdded(false);
                
                const productId = parseInt(id);
                if (isNaN(productId) || productId < 1 || productId > 20) {
                    navigate('/');
                    return;
                }

                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                navigate('/');
            }
        };
        fetchProduct();
    }, [id, navigate]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({ ...product, quantity });
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        }
    };
    if (!product) return null;

    
        return stars;
    };

    {/* Product Container */}
            <div className="product-container">
                {/* Left - Image */}
                <div className="product-left">
                    <div className="product-image-wrapper">
                        <img 
                            alt={product.title}
                            className="product-image"
                            src={product.image}
                        />
                        <span className="product-badge">New Arrival</span>
                    </div>
                    {/* Right - Details */}
                <div className="product-right">
                    <span className="product-category">{product.category}</span>
                    <h1 className="product-title">{product.title}</h1>
                    
                    <div className="product-rating">
                        <span className="stars">{renderStars(product.rating?.rate)}</span>
                        <span className="rating-count">({product.rating?.count} verified reviews)</span>
                    </div>

