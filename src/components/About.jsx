import Link from 'next/link'

const About = () => (
  <section className="bg-white py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Discover the Beauty of Aquatic Life
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            At AquaReef, we're passionate about bringing the wonders of the underwater world into your home. With over a decade of experience, we specialize in creating stunning aquariums that serve as living works of art.
          </p>
          <div className="mt-8 sm:flex">
            <div className="rounded-md shadow">
              <Link href="/#shop" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Explore Our Products
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/#contact" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <img className="rounded-lg shadow-xl" src="/aquarium-setup.jpg" alt="Beautiful aquarium setup" />
        </div>
      </div>
    </div>
  </section>
)

export default About