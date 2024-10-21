import Link from 'next/link'

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Tropical Fish Set", price: "₹2,999", image: "/fish-set.jpg" },
    { id: 2, name: "Aquarium Plant Bundle", price: "₹1,499", image: "/plant-bundle.jpg" },
    { id: 3, name: "LED Aquarium Light", price: "₹3,499", image: "/led-light.jpg" },
    { id: 4, name: "Filter System Pro", price: "₹4,999", image: "/filter-system.jpg" },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.id}`} className="absolute inset-0">
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts