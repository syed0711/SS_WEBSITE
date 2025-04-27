const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Progressive Farmer, Tamil Nadu',
    feedback:
      'S & S Agencies helped us set up a modern polyhouse. Their team is knowledgeable and always available for support. Our yields have improved significantly!',
  },
  {
    name: 'Meera Patel',
    role: 'Agri-Entrepreneur, Gujarat',
    feedback:
      'The quality of products and the professionalism of S & S Agencies is unmatched. Highly recommended for anyone in protected cultivation.',
  },
  {
    name: 'Vikram Singh',
    role: 'Greenhouse Owner, Punjab',
    feedback:
      'From consultation to delivery, everything was smooth. The expert advice made a real difference to our business.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Organic Farmer, Karnataka',
    feedback:
      'Their automation solutions have made my farm much more efficient. The support team is always ready to help!',
  },
  {
    name: 'Suresh Reddy',
    role: 'Farm Owner, Andhra Pradesh',
    feedback:
      'Excellent service and top-quality products. My crops are healthier and yields are up!',
  },
  {
    name: 'Priya Sharma',
    role: 'Horticulturist, Maharashtra',
    feedback:
      'The agronomy consulting was a game changer for my business. Highly professional and reliable team.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-green-50">
      <div className="w-full px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg duration-200 h-full min-h-[320px]">
                <div className="h-14 w-14 rounded-full bg-[#2e7d32]/10 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-[#2e7d32]">{t.name[0]}</span>
                </div>
                <blockquote className="text-gray-700 italic mb-6 text-base">“{t.feedback}”</blockquote>
                <div className="text-base font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 