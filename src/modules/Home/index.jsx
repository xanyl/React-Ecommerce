import { useEffect, useState } from "react";

import Hero from "../../components/Hero";
import Products from "../../components/ProductCard";
import StatsCard from "../../components/Stats";
import Categories from "../../components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  if (categories.length === 0) return <>Loading...</>;
  return (
    <>
      <Hero />
      <Categories />
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading...</div>
      )}
      <Products />
      <StatsCard />
    </>
  );
};

export default Home;
