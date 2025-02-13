import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";

function App() {
  const [cart,setCart] = useState([]);

  const productData = [
    {
      id: 1,
      name: "Apple iPhone 15",
      price: 79900,
      category: "Smartphones",
      stock: 15,
      description:
        "6.1-inch Super Retina XDR display, A16 Bionic chip, 48MP main camera, iOS 17.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 124999,
      category: "Smartphones",
      stock: 10,
      description:
        "6.8-inch QHD+ AMOLED display, Snapdragon 8 Gen 2, 200MP main camera, S Pen support.",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: 29990,
      category: "Headphones",
      stock: 20,
      description:
        "Wireless noise-canceling headphones with up to 30 hours of battery life and touch controls.",
    },
    {
      id: 4,
      name: "Apple MacBook Air M2",
      price: 114900,
      category: "Laptops",
      stock: 8,
      description:
        "13.6-inch Liquid Retina display, Apple M2 chip, 8GB RAM, 256GB SSD, macOS.",
    },
    {
      id: 5,
      name: "Logitech MX Master 3S",
      price: 9999,
      category: "Accessories",
      stock: 30,
      description:
        "Advanced wireless mouse with ultra-fast scrolling, ergonomic design, and customizable buttons.",
    },
  ];

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== product.id);
      return [...updatedCart, { ...product, quantity }];
    });
  };  

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    console.log(cart);
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCard productData={productData} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
