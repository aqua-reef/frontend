// src/app/layout.jsx
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Aqua Reef",
    default: "Aqua Reef - Premium Aquarium Shop",
  },
  description: "Premium aquarium supplies and expert guidance",
  keywords: ["aquarium", "fish", "aquatic supplies", "marine life"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
