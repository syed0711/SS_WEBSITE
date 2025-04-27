"use client";

import Navbar from '@/components/layout/Navbar';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const features = [
  'Crop planning for maximum yield',
  'Soil analysis and recommendations',
  'Pest and disease management',
  'Yield optimization strategies',
];

export default function AgronomyConsulting() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[#388e3c] mb-4">Agronomy Consulting</h1>
              <p className="text-lg text-gray-700 mb-6">
                Expert agricultural consulting services to help you make the best decisions for your crops and land. Unlock your farm's full potential with our guidance.
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
              {/* Placeholder for a creative agronomy image or illustration */}
              <div className="w-full max-w-xs aspect-[4/3] bg-gradient-to-br from-green-100 to-lime-100 rounded-xl flex items-center justify-center">
                <span className="text-[#388e3c] text-lg font-semibold">Agronomy Image</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 