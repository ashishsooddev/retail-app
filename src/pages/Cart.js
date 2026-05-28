import { CartContext } from "../context/CartContext";


function Cart() {
  const { cart } = useContext(CartContext);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-container">
        <div>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;