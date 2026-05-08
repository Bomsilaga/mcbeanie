'use client';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { neverWornProducts, getFeaturedProduct } from '@/lib/products';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

  const featuredProduct = getFeaturedProduct();
  const otherProducts = neverWornProducts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Featured Product Hero Section */}
      {featuredProduct && (
        <section className="relative py-20 bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="w-full h-full"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2), transparent 50%)',
                backgroundSize: '200% 200%',
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Featured Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                  style={{ perspective: '1200px' }}
                >
                  <Image
                    src={featuredProduct.image || '/lv-beanie-hero.png'}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-cyan-600/20"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Featured Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-pink-500/20 rounded-full border border-teal-400/50"
                >
                  <p className="text-teal-200 text-sm font-semibold">★ FEATURED COLLECTION</p>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl md:text-6xl font-black mb-4 leading-tight"
                >
                  {featuredProduct.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-gray-200 mb-6"
                >
                  {featuredProduct.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-8 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                    <span className="text-lg">
                      <span className="font-bold">Color:</span> {featuredProduct.color}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                    <span className="text-lg">
                      <span className="font-bold">Condition:</span> {featuredProduct.details?.condition}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                    <span className="text-lg">
                      <span className="font-bold">Authentication:</span> {featuredProduct.details?.authentication}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                    <span className="text-lg">
                      <span className="font-bold">Material:</span> {featuredProduct.details?.material}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="text-5xl font-black bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    A${featuredProduct.price}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold w-fit">
                      ✓ Verified Authentic
                    </span>
                    <span className="bg-teal-600/80 text-white px-4 py-2 rounded-full text-sm font-bold w-fit">
                      Never Worn - Pristine
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 flex gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="https://depop.app.link/6g078fuJW2b"
                      target="_blank"
                      className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition duration-300"
                    >
                      Shop on Depop
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

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
          className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-teal-100/30"
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
                className="w-full border-2 border-teal-200 rounded-lg px-4 py-2 bg-white hover:border-teal-400 transition focus:outline-none focus:border-teal-600"
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
                  className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />
                <input
                  type="range"
                  min="65"
                  max="85"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  aria-label="Maximum price"
                  className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
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
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-white border border-teal-200 text-gray-700 hover:border-teal-400'
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
              className="mt-6 px-4 py-2 text-sm font-semibold text-teal-600 hover:bg-teal-100 rounded-lg transition"
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
            Showing <span className="text-teal-600 font-bold">{sortedProducts.length}</span> of{' '}
            <span className="text-teal-600 font-bold">{neverWornProducts.length}</span> items
          </p>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h3 className="text-4xl font-bold mb-3">More Premium Selections</h3>
          <p className="text-gray-600">Explore our complete collection of authenticated never-worn beanies</p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProducts.map((product, idx) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
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

