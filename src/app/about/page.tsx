import Navbar from '@/components/layout/Navbar'
import Image from 'next/image'

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Completed', value: '1000+' },
  { label: 'Satisfied Clients', value: '500+' },
  { label: 'Product Categories', value: '50+' },
]

const values = [
  {
    name: 'Quality First',
    description: 'We never compromise on the quality of our products and services, ensuring the best results for our clients.',
  },
  {
    name: 'Innovation',
    description: 'Constantly innovating and adopting new technologies to provide cutting-edge agricultural solutions.',
  },
  {
    name: 'Sustainability',
    description: 'Committed to environmentally sustainable farming practices and resource conservation.',
  },
  {
    name: 'Customer Success',
    description: 'Our success is measured by the success of our customers and their agricultural ventures.',
  },
]

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="relative isolate bg-white">
        {/* Header section with green accent border and icon */}
        <div className="px-6 pt-6 lg:px-8 border-b-4 border-[#2e7d32] bg-white">
          <div className="mx-auto max-w-2xl pt-6 text-center sm:pt-8">
            <div className="flex items-center justify-center gap-2">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-green-700' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' /></svg>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Us</h2>
            </div>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              10+ years of excellence in protected cultivation solutions, serving farmers and agricultural businesses across India.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8 bg-white rounded-xl shadow-md">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  S & S AGENCIES is a leading provider of agricultural solutions, specializing in protected cultivation
                  technologies. Our journey began with a vision to revolutionize Indian agriculture through innovative
                  solutions and superior quality products.
                </p>
                <p className="mt-8">
                  We combine extensive hardware expertise with years of experience in polyhouse
                  construction and automation. This unique synergy allows us to offer comprehensive solutions that address the
                  diverse needs of modern agriculture.
                </p>
              </div>
              <div>
                <p>
                  Our product range includes high-quality shade nets, mulch films, greenhouse accessories, and pond liners. We
                  also provide expert services in polyhouse construction, hydroponics setup, automation solutions, and agronomy
                  consulting.
                </p>
                <p className="mt-8">
                  With a focus on quality, innovation, and customer success, we have helped thousands of farmers and agricultural
                  businesses achieve better yields and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mx-auto mt-14 max-w-7xl px-6 bg-green-50 rounded-xl shadow-sm">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Our impact by the numbers</h2>
            <p className="mt-4 text-base leading-7 text-green-800">
              We take pride in our contributions to Indian agriculture and the trust our customers place in us.
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-14 lg:max-w-none lg:flex-row lg:items-end">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-y-2 bg-white rounded-lg shadow p-6 items-center w-full">
                <dt className="text-base leading-7 text-green-700">{stat.label}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-green-900">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-14 max-w-7xl px-6 bg-white rounded-xl shadow-md">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide everything we do and help us deliver excellence to our customers.
            </p>
          </div>
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <div className="absolute left-1 top-1 h-5 w-5 text-[#2e7d32]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {value.name}
                </dt>
                <dd className="inline">{' ' + value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
} 