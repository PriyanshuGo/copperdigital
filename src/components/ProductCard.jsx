import React from "react";
import { useState } from "react";

function ProductCard({ productData }) {
  const [quantity, setQuantity] = useState({});

  const handleQuantity = ({id,value}) => {
    setQuantity((prev) => ({ ...prev, [id]: value > 0 ? value : 1}));
  };

  return (
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
              onChange={() => handleQuantity(el.id,parseInt(e.target.value) || 1)}
            />
            </div>
          <button>ADD to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
