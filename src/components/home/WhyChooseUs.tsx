import { memo } from 'react'
import { CheckCircleIcon, GlobeAltIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '10+ Years Experience',
    description: 'A decade of expertise in protected cultivation and agri-solutions.',
    icon: CheckCircleIcon,
  },
  {
    name: 'ISO Certified',
    description: 'Quality and reliability you can trust, certified to global standards.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Pan-India Service',
    description: 'Serving farmers and agri-businesses across India with fast delivery.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Expert Support',
    description: 'Get guidance from our experienced agronomy and tech team.',
    icon: UserGroupIcon,
  },
]

function WhyChooseUs() {
  return (
    <section className="py-10 bg-white">
      <div className="w-full px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose S & S Agencies?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition transform hover:scale-105 duration-200 flex flex-col items-center">
              <feature.icon className="h-10 w-10 text-[#2e7d32] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(WhyChooseUs)

