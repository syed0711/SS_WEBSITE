import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const hydroponicsAccessoriesTypes = [
  {
    name: 'Growing Cups',
    image: '/products/hydroponics-accessories/main.png',
    description: 'Net cups and growing containers for hydroponic plant support'
  },
  {
    name: 'Support Frames',
    image: '/products/hydroponics-accessories/main.png',
    description: 'Structural frames and stands for hydroponic system setup'
  },
  {
    name: 'Nutrient Containers',
    image: '/products/hydroponics-accessories/main.png',
    description: 'Specialized containers for nutrient solution storage and management'
  },
]

export default function HydroponicsAccessoriesPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hydroponics Accessories</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Essential accessories for complete hydroponic system setup
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl grid grid-cols-1 gap-y-6 lg:max-w-4xl lg:grid-cols-2 gap-x-8">
            {hydroponicsAccessoriesTypes.map((type) => (
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
