import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://cdn.britannica.com/29/121829-050-911F77EC/freshwater-aquarium.jpg",
  "https://www.aquaticlivefood.com.au/wp-content/uploads/2023/12/Section-1-Understanding-Aquarium-Plants.webp",
  "https://www.thesprucepets.com/thmb/wkKH1D8sDSJhnXFvYyN_ROhy4zs=/2127x0/filters:no_upscale():strip_icc()/GettyImages-902469922-5c392b03c9e77c00010eafcb.jpg"
];

const products = [
  {
    id: 1,
    name: "Royal Blue Discus",
    category: "Fish",
    price: 89.99,
    images: images,
    description: "Premium grade royal blue discus",
    careLevel: "Expert"
  },
  {
    id: 2,
    name: "Crystal Red Shrimp",
    category: "Shrimp",
    price: 14.99,
    images: images,
    description: "High-grade crystal shrimp",
    careLevel: "Intermediate"
  },
  {
    id: 3,
    name: "Neon Tetra School",
    category: "Fish",
    price: 19.99,
    images: images,
    description: "Pack of 6 vibrant neon tetras",
    careLevel: "Beginner"
  },
  {
    id: 4,
    name: "Aqua Flora Bundle",
    category: "Plants",
    price: 34.99,
    images: images,
    description: "Curated selection of live plants",
    careLevel: "Beginner"
  },
  {
    id: 5,
    name: "Premium Aquasoil",
    category: "Substrate",
    price: 39.99,
    images: images,
    description: "Professional grade aqua soil",
    careLevel: "All Levels"
  },
  {
    id: 6,
    name: "CO2 Diffuser Set",
    category: "Equipment",
    price: 49.99,
    images: images,
    description: "Complete CO2 diffusion system",
    careLevel: "Advanced"
  }
];

const categories = ["All", "Fish", "Plants", "Shrimp", "Equipment", "Substrate"];

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all hover:bg-white">
      <div className="relative overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {product.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-72">
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 hover:bg-white z-10">
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-serif text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg text-gray-900">${product.price}</span>
          <span className="text-sm text-gray-500">{product.careLevel}</span>
        </div>
      </div>
    </div>
  );
};

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen transition-all">
      {/* Page Header */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-serif text-gray-900">Our Collection</h1>
          <p className="mt-2 text-gray-600">Discover our curated aquatic life and accessories</p>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex overflow-x-auto gap-6 pb-2 no-scrollbar">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-serif transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? "text-gray-900 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}