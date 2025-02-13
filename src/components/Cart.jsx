import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart,removeFromCart }) {
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go Shopping</Link>
        </p>
      ) : (
        <div>
          <Link to="/">Back to Products</Link>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>
                ₹{item.price} x {item.quantity}
              </p>
              <p>Total: ₹{item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
