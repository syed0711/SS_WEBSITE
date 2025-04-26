import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
    </main>
  )
}
