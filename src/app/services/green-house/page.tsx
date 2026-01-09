"use client";

import Navbar from '@/components/layout/Navbar';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  'Custom greenhouse design',
  'Ventilation systems',
  'Temperature control',
  'Complete installation',
];

export default function GreenHouse() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Green House</h1>
              <p className="text-lg text-gray-700 mb-6">
                Professional greenhouse construction and setup services. We design and build custom greenhouses tailored to your specific crops and climate requirements, ensuring optimal growing conditions year-round.
              </p>
              <ul className="space-y-4 mb-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-x-3">
                    <CheckCircleIcon className="h-6 w-5 text-[#2e7d32]" aria-hidden="true" />
                    <span className="text-gray-700 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              {/* Placeholder image, replace with actual image if available */}
              <div className="w-full max-w-xs aspect-[4/3] bg-green-50 rounded-xl flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold">Green House Image</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
