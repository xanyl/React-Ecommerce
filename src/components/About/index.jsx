const About = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-lg">
          We are a team of passionate individuals dedicated to delivering the
          best services and products.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pravatar.cc/150?img=7"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pravatar.cc/150?img=9"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Alice Johnson</h3>
            <p className="text-gray-600">CMO</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <p className="text-gray-700">
          Our mission is to create value for our customers through innovation,
          commitment, and excellence.
        </p>
      </section>
    </div>
  );
};

export default About;
