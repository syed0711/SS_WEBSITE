import Navbar from '@/components/layout/Navbar'

export default function Terms() {
  return (
    <div>
      <Navbar />
      <main className="relative isolate bg-white">
        {/* Header section with green accent border and icon */}
        <div className="px-6 pt-6 lg:px-8 border-b-4 border-[#2e7d32] bg-white">
          <div className="mx-auto max-w-2xl pt-6 text-center sm:pt-8">
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Terms of Service</h2>
            </div>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Please read these terms and conditions carefully before using our services or purchasing our agricultural products.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8 bg-white rounded-xl shadow-md">
          <div className="mx-auto max-w-4xl py-10">
            
            {/* Acceptance of Terms */}
            <section className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-base leading-7 text-gray-700">
                By accessing and using the services of S & S AGENCIES, you accept and agree to be bound by the terms and provisions of this agreement. 
                These terms apply to all visitors, users, and others who access or use our agricultural products and services.
              </p>
            </section>

            {/* Products & Services */}
            <section className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Products & Services</h3>
              <div className="space-y-4 text-base leading-7 text-gray-700">
                <p>
                  S & S AGENCIES provides agricultural solutions including shade nets, mulch films, greenhouse accessories, pond liners, 
                  and related services such as polyhouse construction, hydroponics setup, and agricultural consulting.
                </p>
                <p>
                  All product specifications, descriptions, and pricing are subject to change without notice. We strive to provide 
                  accurate information but cannot guarantee complete accuracy of all product details.
                </p>
              </div>
            </section>

            {/* Orders & Payment */}
            <section className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Orders & Payment</h3>
              <div className="space-y-4 text-base leading-7 text-gray-700">
                <p>
                  All orders are subject to acceptance by S & S AGENCIES. We reserve the right to refuse or cancel any order 
                  for any reason at any time.
                </p>
                <p>
                  Payment terms will be communicated at the time of order confirmation. We accept various payment methods 
                  as agreed upon during the transaction process.
                </p>
                <p>
                  Prices are quoted in Indian Rupees (INR) and are exclusive of applicable taxes, transportation, 
                  and installation charges unless otherwise specified.
                </p>
              </div>
            </section>

            {/* Delivery & Returns */}
            <section className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Delivery & Returns</h3>
              <div className="space-y-4 text-base leading-7 text-gray-700">
                <p>
                  Delivery timelines and shipping costs will be communicated at the time of order confirmation. 
                  Delivery schedules are estimates and may vary based on location and product availability.
                </p>
                <p>
                  Returns and exchanges are subject to our return policy, which will be provided with your purchase. 
                  Custom-made or specially ordered items may not be eligible for return.
                </p>
                <p>
                  Customers are responsible for inspecting products upon delivery and reporting any damages or 
                  discrepancies within 48 hours of receipt.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h3>
              <div className="space-y-4 text-base leading-7 text-gray-700">
                <p>
                  While we strive to provide quality products and services, S & S AGENCIES cannot guarantee specific 
                  agricultural outcomes or yields from the use of our products.
                </p>
                <p>
                  Our liability is limited to the replacement or repair of defective products under warranty conditions. 
                  We are not liable for any indirect, incidental, or consequential damages.
                </p>
                <p>
                  Customers are advised to use products according to provided instructions and seek professional 
                  agricultural advice when needed.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h3>
              <p className="text-base leading-7 text-gray-700">
                These terms and conditions are governed by and construed in accordance with the laws of India. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts 
                in Coimbatore, Tamil Nadu.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-10 bg-green-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#2e7d32] mb-4">7. Contact Information</h3>
              <div className="text-base leading-7 text-gray-700">
                <p className="mb-2">
                  For questions about these terms or our services, please contact us:
                </p>
                <div className="space-y-1">
                  <p><strong>S & S AGENCIES</strong></p>
                  <p>No.5/19, New Thillai Nagar, 3rd Cross West</p>
                  <p>Vadavalli, Coimbatore - 641 041</p>
                  <p>Tamil Nadu, India</p>
                  <p>Phone: +91 99433 77225</p>
                  <p>Email: ssagenciescbe41@gmail.com</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: January 2025
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}