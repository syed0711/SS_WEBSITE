"use client";

import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const products = [
  {
    name: 'Shade Nets',
    description: 'High-quality shade nets for various agricultural applications',
    href: '/products/shade-nets',
    categories: ['35% Shade', '50% Shade', '75% Shade', '90% Shade'],
    image: '/products/shade-nets/main.png',
  },
  {
    name: 'Mulch Films',
    description: 'Premium mulch films for better crop yield and weed control',
    href: '/products/mulch-films',
    categories: ['Black Mulch', 'Silver Mulch', 'Transparent Mulch'],
    image: '/products/mulch-films/main.png',
  },
  {
    name: 'Greenhouse Accessories',
    description: 'Essential accessories for greenhouse construction and maintenance',
    href: '/products/greenhouse-accessories',
    categories: ['Clips', 'Springs', 'Profiles', 'Fasteners'],
    image: '/products/greenhouse-accessories/main.png',
  },
  {
    name: 'Pond Liners',
    description: 'Durable pond liners for water storage and management',
    href: '/products/pond-liners',
    categories: ['HDPE Liners', 'LDPE Liners', 'Geomembranes'],
    image: '/products/pond-liners/main.png',
  },
  {
    name: 'Banana Bunch Cover',
    description: 'Protective covers for banana bunches to ensure quality fruit development',
    href: '/products/banana-bunch-cover',
    categories: ['Blue Cover', 'White Cover', 'Perforated Cover'],
    image: '/products/banana-bunch-cover/main.png',
  },
  {
    name: 'Fruit Cover',
    description: 'Specialized covers for protecting various fruits during growth',
    href: '/products/fruit-cover',
    categories: ['Paper Bags', 'Non-Woven Covers', 'Mesh Covers'],
    image: '/products/fruit-cover/main.png',
  },
  {
    name: 'Insect Proof Net',
    description: 'Fine mesh nets providing protection against insects and pests',
    href: '/products/insect-proof-net',
    categories: ['40 Mesh', '50 Mesh', '80 Mesh'],
    image: '/products/insect-proof-net/main.png',
  },
  {
    name: 'Crop Supporting Net',
    description: 'Strong support nets for climbing crops and heavy fruits',
    href: '/products/crop-supporting-net',
    categories: ['Climbing Support', 'Fruit Support', 'Vine Training'],
    image: '/products/crop-supporting-net/main.png',
  },
  {
    name: 'HDPE Grow Bags',
    description: 'Durable HDPE grow bags for container gardening and nursery applications',
    href: '/products/hdpe-grow-bags',
    categories: ['Standard Type', 'Heavy Duty', 'UV Stabilized'],
    image: '/products/hdpe-grow-bags/main.png',
  },
  {
    name: 'Nursery Bags',
    description: 'Professional nursery bags for seedlings and plant propagation',
    href: '/products/nursery-bags',
    categories: ['Small Size', 'Medium Size', 'Large Size'],
    image: '/products/nursery-bags/main.png',
  },
  {
    name: 'B/W Grow Bags',
    description: 'Black and white grow bags for optimal temperature control',
    href: '/products/bw-grow-bags',
    categories: ['Standard B/W', 'Heavy Duty B/W', 'Premium B/W'],
    image: '/products/bw-grow-bags/main.png',
  },
  {
    name: 'HDPE Grow Bag Roll',
    description: 'HDPE grow bag rolls for custom sizing and bulk applications',
    href: '/products/hdpe-grow-bag-roll',
    categories: ['Standard Width', 'Medium Thickness', 'Heavy Gauge'],
    image: '/products/hdpe-grow-bag-roll/main.png',
  },
  {
    name: 'Fasteners',
    description: 'High-quality fasteners for greenhouse construction and maintenance',
    href: '/products/fasteners',
    categories: ['Clips', 'Bolts', 'Screws'],
    image: '/products/fasteners/main.png',
  },
  {
    name: 'Aluminum Channel',
    description: 'Durable aluminum channels for greenhouse structural framework',
    href: '/products/aluminum-channel',
    categories: ['Standard Profile', 'Heavy Duty', 'Custom Length'],
    image: '/products/aluminum-channel/main.png',
  },
  {
    name: 'Zig Zag Spring',
    description: 'Spring accessories for secure shade net and film installation',
    href: '/products/zig-zag-spring',
    categories: ['Standard Spring', 'Heavy Duty Spring', 'Galvanized Spring'],
    image: '/products/zig-zag-spring/main.png',
  },
  {
    name: 'Axial Fan',
    description: 'Efficient axial fans for greenhouse ventilation and air circulation',
    href: '/products/axial-fan',
    categories: ['Small Capacity', 'Medium Capacity', 'Large Capacity'],
    image: '/products/axial-fan/main.jpg',
  },
  {
    name: 'Industrial Exhaust Fan',
    description: 'Heavy-duty exhaust fans for large-scale agricultural and industrial use',
    href: '/products/industrial-exhaust-fan',
    categories: ['Standard Duty', 'Heavy Duty', 'High Capacity'],
    image: '/products/industrial-exhaust-fan/main.jpg',
  },
  {
    name: 'Honey-comb Cooling Pad',
    description: 'Evaporative cooling pads for efficient greenhouse temperature control',
    href: '/products/honey-comb-cooling-pad',
    categories: ['Standard Thickness', 'Premium Quality', 'Heavy Duty'],
    image: '/products/honey-comb-cooling-pad/main.jpg',
  },
  {
    name: 'Fogger',
    description: 'High-quality fogging systems for greenhouse humidity and cooling control',
    href: '/products/fogger',
    categories: ['Low Pressure', 'Medium Pressure', 'High Pressure'],
    image: '/products/fogger/main.png',
  },
  {
    name: 'Dripper',
    description: 'Precision drip irrigation systems for efficient water delivery',
    href: '/products/dripper',
    categories: ['Inline Dripper', 'Adjustable Dripper', 'Pressure Compensating'],
    image: '/products/dripper/main.png',
  },
  {
    name: 'Mist Chamber Sheet',
    description: 'Specialized sheets for mist propagation chambers and nurseries',
    href: '/products/mist-chamber-sheet',
    categories: ['Standard Grade', 'UV Stabilized', 'Heavy Duty'],
    image: '/products/mist-chamber-sheet/main.png',
  },
  {
    name: 'Shade Net Stitching Rope',
    description: 'Durable ropes for shade net installation and stitching applications',
    href: '/products/shade-net-stitching-rope',
    categories: ['Standard Strength', 'Heavy Duty', 'UV Resistant'],
    image: '/products/shade-net-stitching-rope/main.png',
  },
  {
    name: 'Sheet Fixing Tape',
    description: 'Strong adhesive tapes for securing greenhouse sheets and films',
    href: '/products/sheet-fixing-tape',
    categories: ['Standard Width', 'Heavy Duty', 'Weather Resistant'],
    image: '/products/sheet-fixing-tape/main.png',
  },
  {
    name: 'Hydroponics Tray',
    description: 'Professional trays for hydroponic growing systems and setups',
    href: '/products/hydroponics-tray',
    categories: ['Small Size', 'Medium Size', 'Large Size'],
    image: '/products/hydroponics-tray/main.png',
  },
  {
    name: 'Hydroponics Accessories',
    description: 'Essential accessories for complete hydroponic system setup',
    href: '/products/hydroponics-accessories',
    categories: ['Growing Cups', 'Support Frames', 'Nutrient Containers'],
    image: '/products/hydroponics-accessories/main.png',
  },
  {
    name: 'Seedling Tray',
    description: 'Multi-cell seedling trays for efficient seed germination and propagation',
    href: '/products/seedling-tray',
    categories: ['50 Cell', '72 Cell', '128 Cell'],
    image: '/products/seedling-tray/main.jpg',
  },
  {
    name: 'Bio-degradable Mulch Film',
    description: 'Eco-friendly biodegradable mulch films for sustainable agriculture',
    href: '/products/bio-degradable-mulch-film',
    categories: ['Standard Thickness', 'Heavy Duty', 'Premium Grade'],
    image: '/products/bio-degradable-mulch-film/main.png',
  },
  {
    name: 'Vermi Compost',
    description: 'Premium quality vermicompost for organic soil enrichment',
    href: '/products/vermi-compost',
    categories: ['Standard Grade', 'Enriched Formula', 'Premium Quality'],
    image: '/products/vermi-compost/main.png',
  },
  {
    name: 'Top Soil',
    description: 'High-quality topsoil for gardening and agricultural applications',
    href: '/products/top-soil',
    categories: ['Garden Grade', 'Premium Mix', 'Organic Blend'],
    image: '/products/top-soil/main.png',
  },
  {
    name: 'Coco Peat',
    description: 'Natural coco peat for soil conditioning and growing media',
    href: '/products/coco-peat',
    categories: ['Standard Block', 'Expanded Form', 'Premium Quality'],
    image: '/products/coco-peat/main.png',
  },
  {
    name: 'Vermi Bed',
    description: 'Specialized beds for vermicomposting and worm farming',
    href: '/products/vermi-bed',
    categories: ['Small Size', 'Medium Size', 'Large Size'],
    image: '/products/vermi-bed/main.png',
  },
  {
    name: 'Decorative Grow Bag',
    description: 'Attractive decorative grow bags for home and garden use',
    href: '/products/decorative-grow-bag',
    categories: ['Small Size', 'Medium Size', 'Large Size'],
    image: '/products/decorative-grow-bag/main.png',
  },
  {
    name: 'Azolla Beds',
    description: 'Purpose-built beds for azolla cultivation and bio-fertilizer production',
    href: '/products/azolla-beds',
    categories: ['Standard Size', 'Medium Size', 'Large Size'],
    image: '/products/azolla-beds/main.jpg',
  },
  {
    name: 'Plastic Pots',
    description: 'Durable plastic pots for container gardening and plant cultivation',
    href: '/products/plastic-pots',
    categories: ['Small Size', 'Medium Size', 'Large Size'],
    image: '/products/plastic-pots/main.png',
  },
  {
    name: 'Rectangular Poly Bag B/W',
    description: 'Rectangular black and white poly bags for specialized growing applications',
    href: '/products/rectangular-poly-bag-bw',
    categories: ['Small Size', 'Medium Size', 'Large Size'],
    image: '/products/rectangular-poly-bag-bw/main.jpg',
  },
  {
    name: 'Anti Hail Net',
    description: 'Protective nets for crops against hail damage and severe weather',
    href: '/products/anti-hail-net',
    categories: ['Standard Mesh', 'Heavy Duty', 'Premium Grade'],
    image: '/products/anti-hail-net/main.png',
  },
]

// Featured products for the showcase section
const featuredProducts = [
  'Shade Nets',
  'Mulch Films',
  'Greenhouse Accessories',
  'Pond Liners',
  'Insect Proof Net',
  'HDPE Grow Bags',
  'Dripper',
  'Fogger',
  'Hydroponics Tray',
]

export default function Products() {
  const handleDownloadBrochure = () => {
    // Add download logic here
    console.log('Downloading brochure...')
  }

  return (
    <div>
      <Navbar />
      {/* Product Showcase Section */}
      <div className="bg-white py-8 pb-16">
        <div className="w-full px-8 overflow-visible">
          <div className="mx-auto max-w-full rounded-3xl ring-1 ring-gray-200 shadow-[0_0_30px_-3px_rgba(0,0,0,0.15)] hover:shadow-[0_0_40px_-3px_rgba(0,0,0,0.2)] transition-shadow duration-300 lg:mx-0 lg:flex lg:max-w-none bg-white isolate">
            <div className="p-6 sm:p-8 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Product Range</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We offer a comprehensive selection of high-quality agricultural products designed to enhance
                productivity and efficiency in modern farming operations. Browse our complete catalogue below.
              </p>
              <div className="mt-6 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-[#2e7d32]">Featured Products</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-6 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {featuredProducts.map((product) => (
                  <li key={product} className="flex gap-x-3">
                    <CheckCircleIcon className="h-6 w-5 flex-none text-[#2e7d32]" aria-hidden="true" />
                    {product}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:flex-shrink-0 lg:flex lg:flex-[0_0_40%]">
              <div className="rounded-2xl bg-gradient-to-br from-[#e8f5e9] to-[#fff3e0] py-6 text-center ring-1 ring-inset ring-gray-900/5 h-full flex flex-col justify-center lg:py-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:ring-[#2e7d32] cursor-pointer">
                <div className="mx-auto px-6 sm:px-8 lg:px-10 w-full">
                  <p className="text-base font-semibold text-gray-700">Explore Our Catalog</p>
                  <p className="mt-4 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">35+</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">premium products</span>
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-600 px-2">
                    Download our comprehensive product brochure with detailed specifications and pricing
                  </p>
                  <button
                    onClick={handleDownloadBrochure}
                    className="mt-6 w-full rounded-lg bg-[#2e7d32] px-6 py-3 text-center text-base font-semibold text-white shadow-lg hover:bg-[#1b5e20] hover:shadow-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7d32] flex items-center justify-center gap-2"
                  >
                    <ArrowDownTrayIcon className="h-5 w-5" />
                    Download Brochure
                  </button>
                  <p className="mt-4 text-xs leading-5 text-gray-500">
                    Complete catalog • Technical specs • Pricing details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid Section */}
        <div className="w-full px-8">
          <div className="mx-auto mt-8 max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:ring-[#2e7d32] flex flex-col h-full"
              >
                <div className="relative w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={360}
                    className="h-64 w-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{product.description}</p>
                </div>
                <div className="mt-auto">
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
                  <Link
                    href={product.href}
                    className="mt-6 block w-full rounded-md bg-[#2e7d32] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#256325] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7d32]"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 