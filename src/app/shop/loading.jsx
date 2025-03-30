// src/app/shop/loading.jsx
export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-72 bg-gray-200 rounded mt-2 animate-pulse" />
        </div>
      </div>

      {/* Categories Skeleton */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-6 w-20 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Product Grid Skeleton */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg h-96 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
