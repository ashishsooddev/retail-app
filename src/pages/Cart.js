import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useContext(CartContext);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = cart[i].price * cart[i].quantity;
  }

  return (
    <></>
  );
}

export default Cart;