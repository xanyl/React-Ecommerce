
import  { useState } from 'react';
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ products = [] }) => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const { id, title, price, category, image, rating } = product;
            return (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <Link to={`/products/${id}`} className="block">
                  <div className="relative pt-[100%]">
                    <img 
                      src={image} 
                      alt={title}
                      className="absolute top-0 left-0 w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">{category}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-tight truncate">{title}</h3>
                    <div className="mt-1 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.round(rating.rate) ? "text-yellow-400" : "text-gray-300"}
                          fill={i < Math.round(rating.rate) ? "currentColor" : "none"}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({rating.count})</span>
                    </div>
                    <p className="mt-2 text-lg font-bold text-blue-600">${price.toFixed(2)}</p>
                  </div>
                </Link>
                <div className="px-4 pb-4 flex justify-between items-center">
                  <button className="flex items-center space-x-1 text-green-600 hover:text-green-800">
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => toggleFavorite(id)}
                    className={`p-2 rounded-full ${favorites[id] ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'} hover:bg-red-200 transition-colors duration-300`}
                  >
                    <Heart size={20} fill={favorites[id] ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;