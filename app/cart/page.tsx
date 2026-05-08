'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [coupon, setCoupon] = useState('');

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 10 : 0;
  const grandTotal = total + shipping;

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Browse our collection and add some luxury beanies!</p>
          <Link href="/products" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex gap-4 pb-6 border-b last:border-0 last:pb-0 mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.color}</p>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                        className="w-16 border rounded px-2 py-1"
                      />
                      <span className="font-bold">${item.price * item.quantity}</span>
                      <button onClick={() => removeItem(item._id)} className="text-red-600 hover:text-red-700 ml-auto">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full border rounded px-4 py-2 mb-2"
                />
                <button className="w-full bg-gray-300 text-gray-700 py-2 rounded font-semibold hover:bg-gray-400">
                  Apply
                </button>
              </div>

              <Link
                href="/checkout"
                className="w-full block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Proceed to Checkout
              </Link>

              <Link href="/products" className="block text-center text-purple-600 font-semibold mt-4 hover:text-purple-700">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
