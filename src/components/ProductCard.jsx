import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";

import "../index.css";

function ProductCard({ productData, addToCart, cart }) {
  const [quantity, setQuantity] = useState({});

  const handleQuantity = (id, value) => {
    setQuantity((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <div>
        <Link to="/cart">
          Go to Cart
          <ShoppingCart size={24} /> 
          {cart.length > 0 ? <span>({cart.length})</span> : null}
        </Link>
      </div>

      <div>
        {productData.map((el) => (
          <div key={el.id}>
            <h2>{el.name}</h2>
            <p>{el.price}Rs</p>
            <p>{el.description}</p>
            <div>
              <input
                type="number"
                min="1"
                placeholder="1"
                value={quantity[el.id]}
                onChange={(e) =>
                  handleQuantity(el.id, e.target.value)
                }
              />
            </div>
            <button onClick={() => addToCart(el,quantity[el.id])}>
              ADD to Cart
              <ShoppingCart size={20} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
