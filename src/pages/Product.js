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

    if (loading) {
        return <div className="page-loading">Loading...</div>;
    }

    if (!product) return null;

    const renderStars = (rate) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i 
                    key={i} 
                    className={i < Math.floor(rate || 0) ? "fas fa-star" : "far fa-star"}
                ></i>
            );
        }
        return stars;
    };

    return (
        <div className="product-page">
            <div className="nav-path">
                <Link to="/">Home</Link> 
                <span> / </span>
                <Link to="/">{product.category}</Link>
                <span> / </span>
                <span>{product.title}</span>
            </div>
            
            
            <div className="product-container">
                <div className="product-left">
                    <div className="product-image-wrapper">
                        <img 
                            alt={product.title}
                            className="product-image"
                            src={product.image}
                        />
                        <span className="product-badge">New Arrival</span>
                    </div>
                    
                    <div className="product-thumbnails">
                        <div className="thumbnail active">
                            <img src={product.image} alt="Main" />
                        </div>
                        <div className="thumbnail"><span>Side</span></div>
                        <div className="thumbnail"><span>Interior</span></div>
                        <div className="thumbnail"><span>Back</span></div>
                    </div>
                </div>
                
                
                <div className="product-right">
                    <span className="product-category">{product.category}</span>
                    <h1 className="product-title">{product.title}</h1>
                    
                    <div className="product-rating">
                        <span className="stars">{renderStars(product.rating?.rate)}</span>
                        <span className="rating-count">({product.rating?.count} verified reviews)</span>
                    </div>
                    
                    <h2 className="product-price">${product.price}</h2>
                    <p className="product-description">{product.description}</p>
                    <ProductCard quantity={quantity} setQuantity={setQuantity} />
                    <div className="product-buttons">
                        <button 
                            className={`btn-add-cart ${added ? 'added' : ''}`}
                            onClick={handleAddToCart}
                        >
                            <i className={`fas ${added ? 'fa-check' : 'fa-shopping-bag'}`}></i>
                            {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                        <button className="btn-wishlist">
                            <i className="fas fa-heart"></i> Wishlist
                        </button>
                    </div>
                    
                    
                    <div className="product-features">
                        <p><i className="fas fa-truck"></i> Free express delivery on orders over $150</p>
                        <p><i className="fas fa-shield-alt"></i> 2-year manufacturer warranty</p>
                        <p><i className="fas fa-undo"></i> 30-day return policy</p>
                    </div>
                </div>
            </div>
            
            
            <ProductGallery 
                currentProductId={product.id} 
                category={product.category}
            />
        </div>
    );
}

export default Product;