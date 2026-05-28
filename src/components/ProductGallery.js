import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductGallery({ currentProductId, category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://fakestoreapi.com/products/category/${category}`
                );
                const filtered = response.data
                    .filter(p => p.id !== currentProductId)
                    .slice(0, 4);
                setProducts(filtered);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, [currentProductId, category]);

    if (loading) {
        return <div className="gallery-loading">Loading...</div>;
    }

    return (
        <div className="gallery-section">
            <h2 className="gallery-title">Complete Your Collection</h2>
            <p className="gallery-subtitle">Items that complement your style</p>
            
            <div className="gallery-grid">
                {products.map(product => (
                    <Link 
                        to={`/product/${product.id}`} 
                        key={product.id}
                        className="gallery-card"
                    >
                        <div className="gallery-image-box">
                            <img 
                                src={product.image}
                                alt={product.title}
                                className="gallery-image"
                            />
                        </div>
                        <h4 className="gallery-name">{product.title}</h4>
                        <p className="gallery-category">{product.category}</p>
                        <p className="gallery-price">${product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductGallery;