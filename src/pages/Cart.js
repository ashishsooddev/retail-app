import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import Footer from "../components/Footer";


function Cart() {
  const { cart } = useContext(CartContext);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + (cart[i].price * cart[i].quantity);
  }
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div>
          {cart.length === 0 ? 
            <p>No items in cart</p>
           : 
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          }
        </div>
        <div className="summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ${total}</p>
          <p>Shipping: $15</p>
          <h3>Total: ${total + 15}</h3>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;