import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'

const products = [
  {
    name: 'Shade Nets',
    description: 'High-quality shade nets for various agricultural applications',
    href: '/products/shade-nets',
    categories: ['35% Shade', '50% Shade', '75% Shade', '90% Shade'],
  },
  {
    name: 'Mulch Films',
    description: 'Premium mulch films for better crop yield and weed control',
    href: '/products/mulch-films',
    categories: ['Black Mulch', 'Silver Mulch', 'Transparent Mulch'],
  },
  {
    name: 'Greenhouse Accessories',
    description: 'Essential accessories for greenhouse construction and maintenance',
    href: '/products/greenhouse-accessories',
    categories: ['Clips', 'Springs', 'Profiles', 'Fasteners'],
  },
  {
    name: 'Pond Liners',
    description: 'Durable pond liners for water storage and management',
    href: '/products/pond-liners',
    categories: ['HDPE Liners', 'LDPE Liners', 'Geomembranes'],
  },
]

export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Browse our complete range of agricultural solutions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="flex flex-col items-start">
                <div className="w-full">
                  <div className="relative w-full">
                    <div className="h-64 w-full bg-gray-100 rounded-2xl" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime="2024" className="text-gray-500">
                        Available Now
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-[#2e7d32]">
                        <Link href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{product.description}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex items-center rounded-md bg-[#2e7d32]/10 px-2 py-1 text-xs font-medium text-[#2e7d32]"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 