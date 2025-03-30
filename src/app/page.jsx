// src/app/page.jsx
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import ContactForm from "@/components/home/ContactForm";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Aqua Reef | Premium Aquarium Shop",
  description:
    "Your one-stop destination for premium aquarium supplies, fish, and expert guidance for your aquatic dreams.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
    </main>
  );
}
