
import { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import ProductCard from "../../components/ProductCard";
 
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
 
  return (
    
    <div >
      <Categories />
      {products.length > 0 ? 
      <ProductCard/>
      :
      <>Loading...</>
    }
    </div>
  );
};

export default Products;
