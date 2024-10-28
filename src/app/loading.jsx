// src/app/loading.jsx
export default function Loading() {
    return (
      <div className="animate-pulse">
        {/* Hero section skeleton */}
        <div className="h-[70vh] bg-gray-200" />
        
        {/* Featured Products skeleton */}
        <div className="container mx-auto px-4 py-16">
          <div className="h-8 w-64 bg-gray-200 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
  
        {/* Other sections skeletons */}
        <div className="space-y-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="container mx-auto px-4">
              <div className="h-8 w-48 bg-gray-200 mb-8" />
              <div className="h-40 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }