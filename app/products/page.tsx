'use client';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { neverWornProducts } from '@/lib/products';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest'>('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([65, 85]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const colors = [...new Set(neverWornProducts.map((p) => p.color))];

  const filteredProducts = neverWornProducts.filter((product) => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    return priceMatch && colorMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
          <h1 className="text-4xl font-bold mb-4">Premium Beanie Collection</h1>
          <p className="text-gray-600 text-lg">
            Carefully curated collection of pristine, never-worn designer beanies. All items in original condition.
          </p>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800">
              <span className="font-bold">✓ Verified Authentic</span> • All items authenticated and verified
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100/30"
        >
          <h3 className="font-bold text-lg mb-6">Filters</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sort */}
            <div>
              <label htmlFor="sort-select" className="block text-sm font-semibold mb-3 text-gray-700">
                Sort By
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full border-2 border-purple-200 rounded-lg px-4 py-2 bg-white hover:border-purple-400 transition focus:outline-none focus:border-purple-600"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Price Range: A${priceRange[0]} - A${priceRange[1]}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="65"
                  max="85"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  aria-label="Minimum price"
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <input
                  type="range"
                  min="65"
                  max="85"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  aria-label="Maximum price"
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
              </div>
            </div>

            {/* Colors */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Color
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => {
                      setSelectedColors(
                        selectedColors.includes(color)
                          ? selectedColors.filter((c) => c !== color)
                          : [...selectedColors, color]
                      );
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                      selectedColors.includes(color)
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white border border-purple-200 text-gray-700 hover:border-purple-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Reset Filters */}
          {(selectedColors.length > 0 || priceRange[0] !== 65 || priceRange[1] !== 85) && (
            <motion.button
              onClick={() => {
                setPriceRange([65, 85]);
                setSelectedColors([]);
              }}
              className="mt-6 px-4 py-2 text-sm font-semibold text-purple-600 hover:bg-purple-100 rounded-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕ Reset Filters
            </motion.button>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-600">
            Showing <span className="text-purple-600 font-bold">{sortedProducts.length}</span> of{' '}
            <span className="text-purple-600 font-bold">{neverWornProducts.length}</span> items
          </p>
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
