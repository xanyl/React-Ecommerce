import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${Math.floor(Math.random() * 10)}`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.title);
      setData(data);
    };
    fetchProduct();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt={data.title}
            src={data.image}
            height={400}
            width={400}
          ></img>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            ready to ship
          </h1>
          <p className="mb-8 leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            heirloom waistcoat. Ethical coloring book pinterest mixtape
            chillwave put a bird on it aesthetic.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              onClick={() => (window.location.href = `/products/${data.id}`)}
            >
              Buy Now
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
