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
  if (categories.length === 0)
    return (
      <div>
        <h1 className="flex align-middle justify-center m-20 font-semibold text-3xl "  >Loading...</h1>
      </div>
    );
  return (
    <>
      <Hero />
      <Categories />
      {products.length > 0 ? (
        <div>
          <div className="flex flex-col text-center w-full">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              PRODUCTS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              OUR MOST POPULAR PRODUCTS
            </h1>
          </div>
          <Products products={products} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {/* <Products /> */}
      <StatsCard />
    </>
  );
};

export default Home;
