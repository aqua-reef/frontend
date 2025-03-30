// src/components/shop/ProductCard.jsx
"use client";
import { ShoppingBag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductCard({ product }) {
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
}

// src/lib/data.js (Move your static data here)
export const images = [
  "https://cdn.britannica.com/29/121829-050-911F77EC/freshwater-aquarium.jpg",
  "https://www.aquaticlivefood.com.au/wp-content/uploads/2023/12/Section-1-Understanding-Aquarium-Plants.webp",
  "https://www.thesprucepets.com/thmb/wkKH1D8sDSJhnXFvYyN_ROhy4zs=/2127x0/filters:no_upscale():strip_icc()/GettyImages-902469922-5c392b03c9e77c00010eafcb.jpg",
];

export const products = [
  // Your products array
];

export const categories = [
  "All",
  "Fish",
  "Plants",
  "Shrimp",
  "Equipment",
  "Substrate",
];
