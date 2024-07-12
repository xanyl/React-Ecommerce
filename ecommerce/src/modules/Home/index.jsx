
import { useEffect, useState } from "react";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import StatsCard from "../../components/Stats";

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect (() =>{
    const fetchProducts = async () => {
      const response  = await fetch('https://fakestoreapi.com/products?limit=12');
      const data = await response.json();
      console.log(data);   
      setProducts(data)   

    }
    fetchProducts()
  }, [])
  return (
    <>
    
    <Hero/>
    {products.length > 0 ? <Products products = {products}/> : <div>Loading...</div> }
    <Products />
    <Features />
    <StatsCard />
  
    </>
  );
};

export default Home;
