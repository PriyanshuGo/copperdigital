import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import "../index.css";

function ProductCard({ productData }) {
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
        </Link>
      </div>

      <div>
        {productData.map((el) => (
          <div key={el.id}>
            <h2>{el.name}</h2>
            <p>{el.price}</p>
            <p>{el.description}</p>
            <div>
              <input
                type="number"
                min="1"
                value={quantity[el.id] || 1}
                onChange={(e) =>
                  handleQuantity(el.id, parseInt(e.target.value))
                }
              />
            </div>
            <button>
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
