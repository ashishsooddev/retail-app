import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-image-box">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <Link to={`/product/${product.id}`} className="add-cart-btn">
          View
        </Link>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-rating">⭐{product.rating?.rate}</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;