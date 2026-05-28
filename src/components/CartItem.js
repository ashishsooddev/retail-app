import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  return (
   <></>
  );
}

export default CartItem;