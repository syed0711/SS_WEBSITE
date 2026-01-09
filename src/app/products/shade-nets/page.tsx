import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const shadeNetTypes = [
  {
    name: '35% Shade',
    image: '/products/shadenets/main.png',
    description: 'Light protection, ideal for nurseries and delicate plants'
  },
  {
    name: '50% Shade',
    image: '/products/shadenets/main.png',
    description: 'Balanced protection for most agricultural applications'
  },
  {
    name: '75% Shade',
    image: '/products/shadenets/main.png',
    description: 'High protection for sensitive crops and extreme climates'
  },
  {
    name: '90% Shade',
    image: '/products/shadenets/main.png',
    description: 'Maximum protection for very sensitive plants and storage'
  },
]

export default function ShadeNetsPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shade Nets</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              High-quality shade nets for various agricultural applications
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl grid grid-cols-1 gap-y-6 lg:max-w-4xl lg:grid-cols-2 gap-x-8">
            {shadeNetTypes.map((type) => (
              <div key={type.name} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={type.image}
                    alt={type.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#2e7d32] mb-2">{type.name}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 