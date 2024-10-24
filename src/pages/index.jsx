import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Features from '../components/home/Features'
import About from '../components/home/About'
import CTA from '../components/home/CTA'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import ContactForm from '../components/home/ContactForm'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Features />
      <About />
      <CTA />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </Layout>
  )
}