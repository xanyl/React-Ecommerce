import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams;
  const [products, setProducts] = useState;
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      console.log(response);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  if (products.length === 0) return <div>Loading...</div>;
  return <ProductCard  />;
};

export default CategoryProducts;
