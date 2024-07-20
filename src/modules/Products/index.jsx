
import { useEffect, useState } from "react";
import Features from "../../components/Features";
import ProductCard from "../../components/ProductCard";
 
const Products = () => {
  const [categories,setCategories] = useState ([])
  useEffect (() =>{
    const fetchCategories = async() => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      setCategories (data)
     
    }
    fetchCategories();
  },[])
  if (categories.length === 0) return <>Loading...</>
  return (
    
    <div >
      <Features cards={categories} />
      <ProductCard />
    </div>
  );
};

export default Products;
