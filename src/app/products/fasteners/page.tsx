import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const fastenerTypes = [
  {
    name: 'Clips',
    image: '/products/fasteners/main.png',
    description: 'Secure clips for fastening greenhouse covering materials'
  },
  {
    name: 'Bolts',
    image: '/products/fasteners/main.png',
    description: 'Heavy-duty bolts for structural greenhouse assembly'
  },
  {
    name: 'Screws',
    image: '/products/fasteners/main.png',
    description: 'Corrosion-resistant screws for greenhouse applications'
  },
]

export default function FastenersPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fasteners</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              High-quality fasteners for greenhouse construction and maintenance
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl grid grid-cols-1 gap-y-6 lg:max-w-4xl lg:grid-cols-2 gap-x-8">
            {fastenerTypes.map((type) => (
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
