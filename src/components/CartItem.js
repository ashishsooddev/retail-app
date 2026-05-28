import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="cart-info">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </div>
    </div>
  );
}

export default CartItem;