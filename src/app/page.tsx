import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import dynamic from 'next/dynamic'

const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'), {
  loading: () => <p className="p-4 text-center">Loading...</p>,
})
const Testimonials = dynamic(
  () => import('@/components/home/Testimonials'),
  { loading: () => <p className="p-4 text-center">Loading...</p> }
)

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
