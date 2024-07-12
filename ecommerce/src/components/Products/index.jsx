const Products = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          OUR MOST POPULAR PRODUCTS
        </h1>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            console.log(product, "product");
            const { id, title, price, description, category, image } = product;
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:cursor-pointer border border-opacity-30" key={id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full  shadow-2xl"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
