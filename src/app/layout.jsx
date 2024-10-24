import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '@/styles/globals.css';

export const metadata = {
  title: 'AquaReef',
  description: 'Your premier aquarium shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif bg-gray-100 transition-all text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}