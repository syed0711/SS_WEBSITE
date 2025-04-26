'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/layout/Navbar'
import { TrashIcon, ChevronDownIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline'

type Product = {
  id: string
  name: string
  specs: string
  description: string
  category: string
}

// Flatten all products into a single array
const allProducts: Product[] = [
  { 
    id: 'sn-35',
    name: 'Shade Net - 35%',
    category: 'Shade Nets',
    specs: 'GSM: 130, Width: 3m',
    description: 'Ideal for nurseries and moderate sun protection. Provides optimal light filtration while maintaining airflow.'
  },
  { 
    id: 'sn-50',
    name: 'Shade Net - 50%',
    category: 'Shade Nets',
    specs: 'GSM: 130, Width: 3m',
    description: 'Perfect balance of sun protection and light penetration. Suitable for most greenhouse applications.'
  },
  { 
    id: 'sn-75',
    name: 'Shade Net - 75%',
    category: 'Shade Nets',
    specs: 'GSM: 130, Width: 3m',
    description: 'High-density shade net for intense sun protection. Ideal for sensitive plants and hot climates.'
  },
  { 
    id: 'mf-black',
    name: 'Black Mulch Film',
    category: 'Mulch Films',
    specs: 'Thickness: 25 micron, Width: 1.2m',
    description: 'Controls weed growth and maintains soil moisture. Perfect for most agricultural applications.'
  },
  { 
    id: 'mf-silver',
    name: 'Silver Mulch Film',
    category: 'Mulch Films',
    specs: 'Thickness: 25 micron, Width: 1.2m',
    description: 'Reflects light to improve plant growth and repels insects. Ideal for pest-sensitive crops.'
  },
  { 
    id: 'ph-uv',
    name: 'UV Stabilized Film',
    category: 'Polyhouse Materials',
    specs: 'Thickness: 200 micron',
    description: 'Long-lasting UV protection for greenhouse covering. Ensures optimal light transmission and heat retention.'
  },
  { 
    id: 'ph-insect',
    name: 'Insect Net',
    category: 'Polyhouse Materials',
    specs: '40 mesh',
    description: 'Fine mesh netting prevents pest entry while maintaining ventilation. Essential for protected cultivation.'
  }
]

type CartItem = {
  id: string
  name: string
  specs: string
  description: string
  quantity: number
  category: string
}

// Get unique categories
const categories = Array.from(new Set(allProducts.map(p => p.category)))

type QuoteFormData = {
  name: string
  email: string
  phone: string
  useType: 'personal' | 'business' | ''
  companyName?: string
  companyEmail?: string
  message: string
}

export default function QuoteCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    useType: '',
    message: ''
  })
  const categoryDropdownRef = useRef<HTMLDivElement>(null)
  const productDropdownRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false)
      }
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Get available products (excluding ones already in cart)
  const availableProducts = allProducts.filter(
    product => !cartItems.some(item => item.id === product.id) && 
    (!selectedCategory || product.category === selectedCategory)
  )

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setSelectedProduct('')
    setIsCategoryDropdownOpen(false)
  }

  const handleAddToCart = () => {
    if (!selectedProduct) return

    const product = allProducts.find(p => p.id === selectedProduct)
    if (!product) return

    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      specs: product.specs,
      description: product.description,
      quantity: quantity,
      category: product.category
    }

    setCartItems(prev => [...prev, newItem])
    setSelectedProduct('')
    setQuantity(1)
    setIsProductDropdownOpen(false)
  }

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (isNaN(value) || value < 1) {
      setQuantity(1)
    } else {
      setQuantity(value)
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    if (cartItems.length === 0) {
      alert('Please add items to your cart before requesting a quote.')
      return
    }

    if (!formData.name || !formData.email || !formData.useType) {
      alert('Please fill in all required fields.')
      return
    }

    if (formData.useType === 'business' && (!formData.companyName || !formData.companyEmail)) {
      alert('Please fill in all business information.')
      return
    }

    // Here you would typically send the data to your backend
    console.log('Quote Request:', { items: cartItems, customerInfo: formData })
    alert('Your quote request has been submitted!')
    setCartItems([])
    setFormData({
      name: '',
      email: '',
      phone: '',
      useType: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Quote Cart</h1>
          <p className="text-lg text-gray-600">Select products and request a custom quote for your needs.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quote Request Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Enter your full name"
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 transition-colors hover:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="example@email.com"
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 transition-colors hover:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="+1 (123) 456-7890"
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 transition-colors hover:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purpose <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, useType: 'personal', companyName: '', companyEmail: '' }))}
                  className={`h-12 flex items-center justify-center gap-2 border-2 rounded-lg transition-colors ${
                    formData.useType === 'personal'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-green-500 text-gray-700'
                  }`}
                >
                  <UserIcon className="w-5 h-5" />
                  Personal Use
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, useType: 'business' }))}
                  className={`h-12 flex items-center justify-center gap-2 border-2 rounded-lg transition-colors ${
                    formData.useType === 'business'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-green-500 text-gray-700'
                  }`}
                >
                  <BuildingOfficeIcon className="w-5 h-5" />
                  Business Use
                </button>
              </div>
            </div>
          </div>

          {formData.useType === 'business' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName || ''}
                  onChange={handleFormChange}
                  placeholder="Enter your company name"
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 transition-colors hover:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail || ''}
                  onChange={handleFormChange}
                  placeholder="company@example.com"
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 transition-colors hover:border-green-500"
                  required
                />
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Requirements or Questions
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 text-gray-900 transition-colors hover:border-green-500 bg-white"
              placeholder="Tell us about your specific requirements, intended use, or any questions you have about our products..."
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Products</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div ref={categoryDropdownRef} className="relative">
                <button
                  type="button"
                  className="w-full h-12 pl-4 pr-10 text-left border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 bg-white flex items-center justify-between transition-colors hover:border-green-500"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                >
                  <span className={selectedCategory ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedCategory || 'Choose a category'}
                  </span>
                  <ChevronDownIcon className={`h-6 w-6 text-gray-400 transition-transform ${isCategoryDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-auto">
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100"
                      onClick={() => handleCategorySelect('')}
                    >
                      <span className="text-gray-500">All Categories</span>
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50"
                        onClick={() => handleCategorySelect(category)}
                      >
                        <span className="text-gray-900">{category}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Product
              </label>
              <div ref={productDropdownRef} className="relative">
                <button
                  type="button"
                  className="w-full h-12 pl-4 pr-10 text-left border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 bg-white flex items-center justify-between transition-colors hover:border-green-500"
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                >
                  <span className={selectedProduct ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedProduct 
                      ? allProducts.find(p => p.id === selectedProduct)?.name
                      : 'Choose a product'}
                  </span>
                  <ChevronDownIcon className={`h-6 w-6 text-gray-400 transition-transform ${isProductDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>

                {isProductDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-auto">
                    {availableProducts.length === 0 ? (
                      <div className="px-4 py-3 text-gray-500">
                        No products available
                      </div>
                    ) : (
                      availableProducts.map((product) => (
                        <button
                          key={product.id}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-0"
                          onClick={() => {
                            setSelectedProduct(product.id)
                            setIsProductDropdownOpen(false)
                          }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-600 mt-0.5">{product.specs}</div>
                            </div>
                            <span className="text-sm text-gray-500">{product.category}</span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-3 flex items-end gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-500 text-gray-900 transition-colors hover:border-green-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center bg-white"
                  />
                  <div className="absolute inset-y-0 right-0 flex flex-col h-full">
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => Math.min(prev + 1, 999))}
                      className="flex-1 flex items-center justify-center w-10 hover:text-green-500 transition-colors border-l-2 border-gray-200"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-4 h-4 text-gray-400 hover:text-green-500 transition-colors"
                      >
                        <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="w-10 h-px bg-gray-200"></div>
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                      className="flex-1 flex items-center justify-center w-10 hover:text-green-500 transition-colors border-l-2 border-gray-200"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-4 h-4 text-gray-400 hover:text-green-500 transition-colors"
                      >
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedProduct}
                className="h-12 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium whitespace-nowrap"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {selectedProduct && (
            <div className="mt-6">
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-800 text-sm leading-relaxed">
                  {allProducts.find(p => p.id === selectedProduct)?.description}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Cart Items</h2>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
              <p className="text-gray-500 text-lg">No items in cart</p>
              <p className="text-gray-400 mt-1">Add products above to request a quote</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">Qty: {item.quantity}</p>
                        <p className="text-sm text-gray-500">{item.specs}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="ml-4 p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-6">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 