import { Link } from "react-router-dom";
import categoryIcons from "../../assets/icons/category";

const Features = ({ cards = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            CATEGORY
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 uppercase">
            All Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((card) => (
            <Link
              to={`/categories/${card}`}
              className="p-4 md:w-1/3 cursor-pointer"
              key={card}
            >
              <div className="flex rounded-lg h-full bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white">
                    {categoryIcons[card] || (
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    )}
                  </div>
                  <h2 className="text-gray-900 text-xl title-font font-semibold capitalize">
                    {card}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-gray-700">
                    Discover the latest products in the{" "}
                    <span className="uppercase font-semibold">{card}</span>{" "}
                    category.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
