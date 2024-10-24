import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Features from '../components/Features'
import About from '../components/About'
import CTA from '../components/CTA'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'

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