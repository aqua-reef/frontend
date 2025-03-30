const Features = () => {
  const features = [
    {
      name: "Marine Tanks",
      description: "Experience the wonders of the ocean in your own home.",
    },
    {
      name: "Planted Tanks",
      description:
        "Create a lush underwater garden with our beautiful designs.",
    },
    {
      name: "Freshwater Species",
      description: "Explore our wide selection of vibrant freshwater fish.",
    },
    {
      name: "Exotic Fish",
      description: "Discover rare and unique fish species for your aquarium.",
    },
    {
      name: "Accessories",
      description:
        "Find all the equipment you need to keep your aquarium thriving.",
    },
    {
      name: "Custom Setups",
      description:
        "Let us create the aquarium of your dreams with our bespoke services.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Aquarium Specialties
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the beauty and diversity of aquatic life with our expert
            services
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
