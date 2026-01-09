"use client";

import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import ConsultationModal from '@/components/ConsultationModal'

const services = [
  {
    name: 'Polyhouse Construction',
    id: 'polyhouse',
    href: '/services/polyhouse-construction',
    description: 'End-to-end polyhouse construction services with expert consultation',
    features: [
      'Structure design & engineering',
      'Climate control systems',
      'Installation & setup',
      'Post-setup support',
    ],
  },
  {
    name: 'Hydroponics Setup',
    id: 'hydroponics',
    href: '/services/hydroponics-setup',
    description: 'Complete hydroponics system design and implementation',
    features: [
      'System design',
      'Nutrient management',
      'Growing medium selection',
      'Training & support',
    ],
  },
  {
    name: 'Automation Solutions',
    id: 'automation',
    href: '/services/automation',
    description: 'Smart farming solutions for modern agriculture',
    features: [
      'Climate control automation',
      'Irrigation systems',
      'Monitoring solutions',
      'Remote management',
    ],
  },
  {
    name: 'Agronomy Consulting',
    id: 'consulting',
    href: '/services/agronomy-consulting',
    description: 'Expert agricultural consulting services',
    features: [
      'Crop planning',
      'Soil analysis',
      'Pest management',
      'Yield optimization',
    ],
  },
  {
    name: 'Green House',
    id: 'greenhouse',
    href: '/services/green-house',
    description: 'Professional greenhouse construction and setup services',
    features: [
      'Custom greenhouse design',
      'Ventilation systems',
      'Temperature control',
      'Complete installation',
    ],
  },
  {
    name: 'Mist Chamber',
    id: 'mistchamber',
    href: '/services/mist-chamber',
    description: 'Specialized mist chamber setup for plant propagation',
    features: [
      'Chamber construction',
      'Misting system installation',
      'Humidity control',
      'Maintenance support',
    ],
  },
  {
    name: 'Shade Net House',
    id: 'shadenethouse',
    href: '/services/shade-net-house',
    description: 'Complete shade net house construction for protected cultivation',
    features: [
      'Structure design & setup',
      'Shade net installation',
      'Ventilation planning',
      'Drip irrigation integration',
    ],
  },
  {
    name: 'Solar Dryer',
    id: 'solardryer',
    href: '/services/solar-dryer',
    description: 'Eco-friendly solar drying systems for agricultural products',
    features: [
      'Custom dryer design',
      'Solar panel installation',
      'Temperature monitoring',
      'Energy efficient operation',
    ],
  },
  {
    name: 'Fully Automated Hi-tech Cultivation Setup',
    id: 'hitechcultivation',
    href: '/services/fully-automated-hitech-cultivation',
    description: 'Advanced automated cultivation systems with smart technology',
    features: [
      'Complete automation setup',
      'Smart sensors & controls',
      'Remote monitoring system',
      'Data analytics & reporting',
    ],
  },
  {
    name: 'Poly-Carbonate Solar Dryer',
    id: 'polycarbonatedryer',
    href: '/services/poly-carbonate-solar-dryer',
    description: 'Premium poly-carbonate solar dryers for efficient drying',
    features: [
      'Poly-carbonate construction',
      'Enhanced heat retention',
      'UV protection',
      'Weather resistant design',
    ],
  },
]

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <Navbar />
      <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="bg-white py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Agricultural Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive agricultural solutions from experts with 10+ years of experience in protected cultivation
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Professional Services</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our team of experts provides end-to-end solutions for your agricultural needs. From design to implementation,
                we ensure the success of your farming projects.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-[#2e7d32]">What's included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {services.map((service) => (
                  <li key={service.id} className="flex gap-x-3">
                    <CheckCircleIcon className="h-6 w-5 flex-none text-[#2e7d32]" aria-hidden="true" />
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Get Started Today</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">10+</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">years experience</span>
                  </p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="mt-10 block w-full rounded-md bg-[#2e7d32] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1b5e20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7d32]"
                  >
                    Book a Consultation
                  </button>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Professional consultation to understand your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.id} className="relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-4 text-sm text-gray-600">{service.description}</p>
                  <ul role="list" className="mt-6 space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircleIcon className="h-6 w-5 flex-none text-[#2e7d32]" aria-hidden="true" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-8 block w-full rounded-md bg-[#2e7d32] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#256325] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7d32]"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 