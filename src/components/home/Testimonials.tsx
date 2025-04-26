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
]

export default function Testimonials() {
  return (
    <section className="py-10 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg duration-200">
              <div className="h-12 w-12 rounded-full bg-[#2e7d32]/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#2e7d32]">{t.name[0]}</span>
              </div>
              <blockquote className="text-gray-700 italic mb-4">“{t.feedback}”</blockquote>
              <div className="text-sm font-semibold text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 