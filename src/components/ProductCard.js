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

    
                

export default QuantitySelector;