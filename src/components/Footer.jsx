import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">AquaReef</h2>
            <p className="mb-4">
              Specializing in marine tanks, planted tanks, freshwater species,
              exotic fish, and all aquarium accessories.
            </p>
            <p>Location: Mysuru, Karnataka</p>
            <p>Contact: 984598732</p>
            <p>Email: aquareefindia@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-blue-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-blue-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">{/* Social media icons */}</div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-8 text-center">
          <p>&copy; 2023 AquaReef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
