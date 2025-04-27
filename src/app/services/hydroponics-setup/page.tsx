"use client";

import Navbar from '@/components/layout/Navbar';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const features = [
  'System design tailored to your needs',
  'Nutrient management for optimal growth',
  'Growing medium selection guidance',
  'Training & ongoing support',
];

export default function HydroponicsSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[#219150] mb-4">Hydroponics Setup</h1>
              <p className="text-lg text-gray-700 mb-6">
                Complete hydroponics system design and implementation for modern, soil-less farming. Boost your yields and sustainability with our expert solutions.
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
              {/* Placeholder for a creative hydroponics image or illustration */}
              <div className="w-full max-w-xs aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-[#219150] text-lg font-semibold">Hydroponics Image</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 