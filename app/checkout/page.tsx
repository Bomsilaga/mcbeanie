'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const total = 450; // Example total

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === 'stripe') {
      // Integrate Stripe payment
      console.log('Processing Stripe payment...');
    } else {
      // Integrate PayPal payment
      console.log('Processing PayPal payment...');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Shipping Information</h2>

                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-4 py-2"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border rounded px-4 py-2"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border rounded px-4 py-2"
                    />
                  </div>

                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-4 py-2"
                  />

                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="border rounded px-4 py-2"
                    />
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="border rounded px-4 py-2"
                    >
                      <option value="">State</option>
                      <option value="NSW">NSW</option>
                      <option value="VIC">VIC</option>
                      <option value="QLD">QLD</option>
                      <option value="WA">WA</option>
                      <option value="SA">SA</option>
                      <option value="TAS">TAS</option>
                      <option value="ACT">ACT</option>
                      <option value="NT">NT</option>
                    </select>
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                      className="border rounded px-4 py-2"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>

                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-100" style={{ borderColor: paymentMethod === 'stripe' ? '#a855f7' : '#e5e7eb' }}>
                    <input
                      type="radio"
                      name="payment"
                      value="stripe"
                      checked={paymentMethod === 'stripe'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'stripe' | 'paypal')}
                      className="mr-4"
                    />
                    <div>
                      <h3 className="font-bold">Credit Card (Stripe)</h3>
                      <p className="text-gray-600 text-sm">Secure payment with Stripe</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-100" style={{ borderColor: paymentMethod === 'paypal' ? '#a855f7' : '#e5e7eb' }}>
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'stripe' | 'paypal')}
                      className="mr-4"
                    />
                    <div>
                      <h3 className="font-bold">PayPal</h3>
                      <p className="text-gray-600 text-sm">Fast and secure checkout with PayPal</p>
                    </div>
                  </label>
                </div>

                {paymentMethod === 'stripe' && (
                  <div className="mt-6 p-4 bg-white border rounded-lg">
                    <p className="text-gray-600 text-center">Stripe integration will appear here</p>
                  </div>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="mt-6 p-4 bg-white border rounded-lg">
                    <p className="text-gray-600 text-center">PayPal integration will appear here</p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition"
              >
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$440.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/cart" className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
