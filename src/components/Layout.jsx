import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}