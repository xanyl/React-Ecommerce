

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleCart = (action) => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      cart.push({ ...product, count: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Product ${action} Successfully`);

    if (action === "Bought") {
      window.location.href = "/cart";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-800">Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Left column */}
          <div className="flex flex-col-reverse">
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.title}
                className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[400px] object-contain object-center rounded"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        product.rating.rate > rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } h-5 w-5 flex-shrink-0`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating.rate} out of 5 stars</p>
                <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {product.rating.count} reviews
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-10 flex sm:flex-col1">
              <button
                onClick={() => handleCart("Added to")}
                className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
              >
                <ShoppingCart className="mr-2 h-5 w-5" aria-hidden="true" />
                Add to cart
              </button>

              <button
                onClick={() => handleCart("Bought")}
                className="max-w-xs flex-1 ml-3 bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:w-full"
              >
                Buy now
              </button>

              <button
                type="button"
                className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <Heart className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Add to favorites</span>
              </button>
              <button
                type="button"
                className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <Share2 className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Share</span>
              </button>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              <div className="border-t divide-y divide-gray-200">
                <div>
                  <h3>
                    <button
                      type="button"
                      className="group relative w-full py-6 flex justify-between items-center text-left"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      <span className="text-gray-900 font-medium">
                        Features
                      </span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
