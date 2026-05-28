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

        <div className="qty">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
        <button
          className="remove"
          onClick={() => removeFromCart(item.id)}>
            Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;