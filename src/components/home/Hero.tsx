"use client";

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#eafff3] via-[#f8fff6] to-[#fffbe6] min-h-[70vh] flex items-center">
      {/* Animated gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-[#2e7d32]/30 to-[#ff9500]/20 rounded-full blur-3xl opacity-60 animate-pulse z-0" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#ff9500]/30 to-[#2e7d32]/10 rounded-full blur-3xl opacity-50 animate-pulse z-0" />
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-10 lg:py-20">
        {/* Left: Text & CTAs */}
        <div className="flex flex-col justify-center px-6 lg:px-0 max-w-2xl mx-auto lg:mx-0">
          {/* Tagline */}
          <span className="inline-block mb-4 text-base font-semibold text-[#ff9500] tracking-wide bg-[#fffbe6] rounded-full px-4 py-1 shadow-sm border border-[#ff9500]/10 w-fit animate-fade-in">
            Transforming Indian Agriculture
          </span>
          {/* Badges */}
          <div className="flex items-center gap-4 mb-4 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2e7d32]/10 px-3 py-1 text-sm font-semibold text-[#2e7d32] ring-1 ring-inset ring-[#2e7d32]/10">
              <CheckCircleIcon className="h-5 w-5 text-[#2e7d32]" />
              10+ Years of Excellence
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ff9500]/10 px-3 py-1 text-sm font-semibold text-[#ff9500] ring-1 ring-inset ring-[#ff9500]/10">
              <ShieldCheckIcon className="h-5 w-5 text-[#ff9500]" />
              ISO Certified
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight drop-shadow-xl animate-fade-in">
            Complete Protected-<span className="text-[#2e7d32]">Cultivation</span> Solutions
          </h1>
          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-700 max-w-xl animate-fade-in">
            From Film to Field – Expert solutions in shade-nets, mulch films, greenhouse accessories, and polyhouse construction. <span className="font-semibold text-[#2e7d32]">Empowering your farm with innovation and reliability.</span>
          </p>
          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in">
            <Link
              href="/products"
              className="rounded-xl bg-gradient-to-r from-[#2e7d32] to-[#43a047] px-6 py-3 text-lg font-bold text-white shadow-lg hover:scale-105 hover:from-[#219150] hover:to-[#2e7d32] transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7d32]"
            >
              Browse Products
            </Link>
            <Link
              href="/services"
              className="rounded-xl bg-gradient-to-r from-[#ffb300] to-[#ff9500] px-6 py-3 text-lg font-bold text-white shadow-lg hover:scale-105 hover:from-[#ff9500] hover:to-[#ffb300] transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9500]"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold leading-6 text-[#2e7d32] hover:underline hover:underline-offset-4 transition"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        {/* Right: Image collage */}
        <div className="relative flex items-center justify-center mt-10 lg:mt-0 animate-fade-in min-h-[480px]">
          {/* Collage background organic shape */}
          <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] opacity-10 z-0" viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="120" fill="#2e7d32" /></svg>
          {/* Main collage images */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            {/* Top row: 2 floating images */}
            <div className="flex gap-4 mb-2">
              <div className="w-36 h-24 rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-[-10deg] bg-white">
                <Image src="/images/IMG-20210413-WA0019.jpg" alt="Farm field" width={144} height={96} className="object-cover w-full h-full" quality={90} />
              </div>
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-white rotate-[12deg] bg-white">
                <Image src="/images/IMG-20210907-WA0025.jpg" alt="Crop closeup" width={112} height={112} className="object-cover w-full h-full" quality={90} />
              </div>
            </div>
            {/* Center: Main greenhouse image (hero image, larger) */}
            <div className="w-96 h-60 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2e7d32]/10 bg-white animate-float-card relative">
              <Image src="/images/greenhouse.jpg" alt="Greenhouse" width={384} height={240} className="object-cover w-full h-full" quality={100} priority />
            </div>
            {/* Bottom row: 1 floating image */}
            <div className="flex gap-4 mt-2">
              <div className="w-32 h-20 rounded-xl overflow-hidden shadow-lg border-4 border-white rotate-[-8deg] bg-white">
                <Image src="/images/IMG-20191213-WA0026.jpg" alt="Agri work" width={128} height={80} className="object-cover w-full h-full" quality={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative leaves or organic shapes (optional, can add more SVGs here) */}
    </section>
  )
}

// Animations (add to global CSS or Tailwind config if not present):
// .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) both; }
// .animate-spin-slow { animation: spin 8s linear infinite; }
// .animate-float-card { animation: floatCard 4s ease-in-out infinite alternate; }
// .animate-float-card2 { animation: floatCard2 5s ease-in-out infinite alternate; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(24px);} to { opacity: 1; transform: none; } }
// @keyframes spin { to { transform: rotate(360deg); } }
// @keyframes floatCard { from { transform: translateY(0); } to { transform: translateY(-18px) scale(1.03); } }
// @keyframes floatCard2 { from { transform: translateY(0); } to { transform: translateY(12px) scale(0.97); } } 