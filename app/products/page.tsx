'use client';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { neverWornProducts } from '@/lib/products';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest'>('newest');

  const sortedProducts = [...neverWornProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Never-Worn Collection</h1>
          <p className="text-gray-600 text-lg">
            Exclusive collection of authenticated, never-worn luxury beanies. All items guaranteed pristine condition.
          </p>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800">
              <span className="font-bold">✓ 100% Authentic</span> • All items verified and authenticated by luxury brand experts
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex gap-4 flex-wrap items-end">
          <div>
            <label htmlFor="sort-select" className="block text-sm font-medium mb-2">
              Sort By
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border rounded-lg px-4 py-2 bg-white hover:border-purple-400 transition"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          <div className="ml-auto text-sm text-gray-600">
            Showing {sortedProducts.length} items
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProducts.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No items found</p>
          </div>
        )}
      </div>
    </main>
  );
}
