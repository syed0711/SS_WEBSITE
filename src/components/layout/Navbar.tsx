'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <span className="sr-only">S & S AGENCIES</span>
              <img src="/logo.svg" alt="S & S Logo" className="h-12 w-12" />
              <span className="hidden sm:inline text-2xl font-bold text-[#2e7d32] tracking-tight align-middle">S & S AGENCIES</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-bold leading-7 text-gray-900 hover:text-[#2e7d32]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/quote-cart"
              className="ml-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ffb300] to-[#ff9500] px-5 py-2 text-lg font-extrabold text-white shadow-lg hover:from-[#ff9500] hover:to-[#ffb300] transition-all duration-200 border-2 border-[#ff9500]"
              style={{ letterSpacing: '0.03em' }}
            >
              <span style={{ textShadow: '0 2px 8px rgba(255,149,0,0.15)' }}>Get Quotation</span>
              <span aria-hidden="true" className="text-2xl">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="sr-only">S & S AGENCIES</span>
                <img src="/logo.svg" alt="S & S Logo" className="h-10 w-10" />
                <span className="font-bold text-[#2e7d32] tracking-tight align-middle text-lg">S & S AGENCIES</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/quote-cart"
                    className="block w-full rounded-lg bg-gradient-to-r from-[#ffb300] to-[#ff9500] px-4 py-3 text-lg font-extrabold text-white shadow-lg hover:from-[#ff9500] hover:to-[#ffb300] transition-all duration-200 border-2 border-[#ff9500] text-center mt-2"
                    style={{ letterSpacing: '0.03em' }}
                  >
                    <span style={{ textShadow: '0 2px 8px rgba(255,149,0,0.15)' }}>Get Quotation &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
} 