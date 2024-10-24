import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="aquareef-logo.jpg" alt="AquaReef Logo" className="h-10 w-auto mr-3" />
              {/* <span className="text-xl font-bold text-blue-600">AquaReef</span> */}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#home" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/shop" className="text-gray-800 hover:text-blue-600 transition duration-300">Shop</Link>
            <Link href="/#gallery" className="text-gray-800 hover:text-blue-600 transition duration-300">Gallery</Link>
            <Link href="/#testimonials" className="text-gray-800 hover:text-blue-600 transition duration-300">Testimonials</Link>
            <Link href="/#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
          </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <Link href="/#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <Link href="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Shop</Link>
            <Link href="/#gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Gallery</Link>
            <Link href="/#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Testimonials</Link>
            <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}