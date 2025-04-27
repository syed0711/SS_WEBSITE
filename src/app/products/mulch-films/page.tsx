import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'

const mulchFilmTypes = [
  'Black Mulch',
  'Silver Mulch',
  'Transparent Mulch',
]

export default function MulchFilmsPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mulch Films</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Premium mulch films for better crop yield and weed control
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl grid grid-cols-1 gap-y-6 lg:max-w-4xl lg:grid-cols-2 gap-x-8">
            {mulchFilmTypes.map((type) => (
              <div key={type} className="rounded-xl bg-[#2e7d32]/10 p-6 flex flex-col items-center">
                <span className="text-lg font-semibold text-[#2e7d32]">{type}</span>
                {/* Add more details or images for each type if available */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 