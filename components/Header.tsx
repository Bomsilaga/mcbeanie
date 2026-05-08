'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          McBeanie
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/products" className="text-sm font-medium hover:text-purple-600 transition">
            Shop
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-purple-600 transition">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-600 transition">
            About
          </Link>
          <Link href="/cart" className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            <ShoppingCart size={18} />
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
            <div className="p-4 space-y-4">
              <Link href="/products" className="block text-sm font-medium">
                Shop
              </Link>
              <Link href="/blog" className="block text-sm font-medium">
                Blog
              </Link>
              <Link href="/about" className="block text-sm font-medium">
                About
              </Link>
              <Link href="/cart" className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg">
                <ShoppingCart size={18} />
                Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
