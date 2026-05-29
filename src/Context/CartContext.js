import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function increaseQty(id) {
    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
  }

  function decreaseQty(id) {
    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}>
        {children}
    </CartContext.Provider>
  );
}
export default CartContext;