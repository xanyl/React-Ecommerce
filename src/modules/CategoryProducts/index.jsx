import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const CategoryProduct = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${name}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("API Response:", data);
        setProducts(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [name]); // dependency to re-fecth when changes occurs

  if (loading) return <div>Loading...</div>;
  if (products.length === 0) return <div>No products found</div>;

  return (
    <>
      <div className="flex flex-col text-center w-full mt-5">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 ">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 uppercase">
          ALL {name}
        </h1>
      </div>
      <ProductCard products={products} />;
    </>
  );
};

export default CategoryProduct;
