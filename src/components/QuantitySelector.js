
function QuantitySelector({ quantity, setQuantity }) {
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="quantity-section">
      <span className="quantity-label">Quantity</span>
      <div className="quantity-box">
        <button className="qty-btn" onClick={decrease} disabled={quantity <= 1}>
          -
        </button>
        <span className="qty-value">{quantity}</span>
        <button className="qty-btn" onClick={increase} disabled={quantity >= 10}>
          +
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;