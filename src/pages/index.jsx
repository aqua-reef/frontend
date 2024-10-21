export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Welcome to My Next.js Project!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          This is a simple example of using Next.js with Tailwind CSS.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-4 py-2 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded transition"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }
  