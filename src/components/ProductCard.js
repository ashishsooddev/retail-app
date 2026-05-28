import { useState } from "react";

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
        <div className="quantity-selector">
            <span className="quantity-label">Quantity</span>
            <div className="quantity-box">
                <button 
                    className="qty-btn"
                    onClick={decrease}
                    disabled={quantity <= 1}
                >
                    <i className="fas fa-minus"></i>
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                    className="qty-btn"
                    onClick={increase}
                    disabled={quantity >= 10}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>
    );
}

export default QuantitySelector;