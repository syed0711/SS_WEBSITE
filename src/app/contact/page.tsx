"use client";
import Navbar from '@/components/layout/Navbar'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorFields, setErrorFields] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    setErrorFields([]);
    // Custom validation for required fields
    const missingFields = [];
    if (!form.firstName.trim()) missingFields.push('firstName');
    if (!form.lastName.trim()) missingFields.push('lastName');
    if (!form.email.trim()) missingFields.push('email');
    if (!form.phone.trim()) missingFields.push('phone');
    if (missingFields.length > 0) {
      setError('Please fill in all required fields: First Name, Last Name, Email, and Phone.');
      setErrorFields(missingFields);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          name: form.firstName + ' ' + form.lastName,
          formType: 'Contact Us',
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess('Message sent! We will contact you soon.');
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-10 pt-10 sm:pt-16 lg:static lg:px-8 lg:py-20">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2e7d32] to-[#ff9500] opacity-10" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Contact us for expert consultation on your agricultural needs. Our team is ready to help you with product selection,
                service inquiries, and technical support.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    S & S AGENCIES
                    <br />
                    No.5/19, New Thillai Nagar
                    <br />
                    3rd Cross West, Vadavalli
                    <br />
                    Coimbatore - 641 041
                    <br />
                    Tamil Nadu, India
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-[#2e7d32]" href="tel:+919943377225">
                      +91 99433 77225
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-[#2e7d32]" href="mailto:ssagenciescbe41@gmail.com">
                      ssagenciescbe41@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
              {/* Map Section */}
              <div className="mt-6">
                <a
                  href="https://maps.app.goo.gl/FhYyMtJSmLPWyrv79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-transparent rounded-lg border-2 border-[#2e7d32] hover:bg-[#2e7d32]/5 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#2e7d32]/10 rounded-full flex items-center justify-center group-hover:bg-[#2e7d32] transition-colors duration-300">
                      <MapPinIcon className="h-6 w-6 text-[#2e7d32] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 transition-colors duration-300">
                      View on Google Maps
                    </p>
                    <p className="text-xs text-gray-500">
                      Click to get directions
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#2e7d32] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="px-6 pb-10 pt-10 sm:pb-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={handleChange}
                      className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2e7d32] sm:text-sm sm:leading-6 ${errorFields.includes('firstName') ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300'}`}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={handleChange}
                      className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2e7d32] sm:text-sm sm:leading-6 ${errorFields.includes('lastName') ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300'}`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2e7d32] sm:text-sm sm:leading-6 ${errorFields.includes('email') ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300'}`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone-number"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2e7d32] sm:text-sm sm:leading-6 ${errorFields.includes('phone') ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300'}`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2e7d32] sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-end gap-2">
                <button
                  type="submit"
                  className="rounded-md bg-[#2e7d32] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1b5e20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e7d32]"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </button>
                {success && <div className="text-green-600 text-sm font-semibold">{success}</div>}
                {error && (
                  <div className="w-full flex justify-end">
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-lg shadow-sm mt-2 text-center text-base animate-fade-in">
                      {error}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 