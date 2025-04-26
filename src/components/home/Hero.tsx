import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="w-full pb-10 pt-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 px-4">
        <div className="px-6 lg:px-0 lg:pt-0">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-4 sm:mt-6 lg:mt-2">
                <div className="inline-flex space-x-6">
                  <span className="rounded-full bg-[#2e7d32]/10 px-3 py-1 text-sm font-semibold leading-6 text-[#2e7d32] ring-1 ring-inset ring-[#2e7d32]/10">
                    10+ Years of Excellence
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>ISO Certified</span>
                  </span>
                </div>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Complete Protected-Cultivation Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From Film to Field - Expert solutions in shade-nets, mulch films, greenhouse accessories, and polyhouse construction. Transform your farming with our comprehensive agricultural solutions.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/products"
                  className="rounded-md bg-[#2e7d32] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1b5e20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7d32]"
                >
                  Browse Products
                </Link>
                <Link
                  href="/services"
                  className="rounded-md bg-[#ff9500] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ff8b00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9500]"
                >
                  Our Services
                </Link>
                <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-[#2e7d32] [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-full max-w-xl mx-auto overflow-hidden rounded-tl-xl">
                    <div className="flex bg-black ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-black px-4 py-2 text-white">
                          Protected Cultivation
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full aspect-[16/9] relative overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-2xl flex items-center justify-center">
                        <Image
                          src="/greenhouse.jpg"
                          alt="Greenhouse and protected cultivation"
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          className="rounded-tl-3xl rounded-br-3xl"
                          quality={100}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 