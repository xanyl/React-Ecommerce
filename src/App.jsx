// import './App.css'

import FooterCard from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProduct from "./modules/CategoryProducts";
import Cart from "./modules/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div className="text-3xl flex align-middle justify-center p-20 m-20">Not Found 404</div>} />
      </Routes>
      {/* <Home /> */}
      <FooterCard />
    </>
  );
}

export default App;
