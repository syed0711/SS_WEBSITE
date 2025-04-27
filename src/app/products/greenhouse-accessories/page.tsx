import Navbar from '@/components/layout/Navbar'

const accessories = [
  'Clips',
  'Springs',
  'Profiles',
  'Fasteners',
]

export default function GreenhouseAccessoriesPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Greenhouse Accessories</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Essential accessories for greenhouse construction and maintenance
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl grid grid-cols-1 gap-y-6 lg:max-w-4xl lg:grid-cols-2 gap-x-8">
            {accessories.map((item) => (
              <div key={item} className="rounded-xl bg-[#2e7d32]/10 p-6 flex flex-col items-center">
                <span className="text-lg font-semibold text-[#2e7d32]">{item}</span>
                {/* Add more details or images for each accessory if available */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 