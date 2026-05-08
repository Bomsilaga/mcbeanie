'use client';

import Header from '@/components/Header';
import Reviews from '@/components/Reviews';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { neverWornProducts, getFeaturedProduct } from '@/lib/products';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const featuredProduct = getFeaturedProduct();

  const handleAddToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Animated Hero Section with Carousel */}
      {featuredProduct && (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <AnimatedBackground />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-12 text-center"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 backdrop-blur"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(168, 85, 247, 0.2)',
                      '0 0 40px rgba(168, 85, 247, 0.4)',
                      '0 0 20px rgba(168, 85, 247, 0.2)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="text-purple-300 text-sm font-semibold flex items-center gap-2">
                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
                      <Sparkles size={16} />
                    </motion.span>
                    FEATURED: Verified Pristine Condition
                  </p>
                </motion.div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Never-Worn <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Premium Beanies
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              >
                Pristine, never-worn designer beanies. Verified authentic. Limited stock. Premium quality.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://depop.app.link/6g078fuJW2b"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition duration-300"
                  >
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      <ExternalLink size={20} />
                    </motion.span>
                    Shop on Depop
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, borderColor: '#a855f7', backgroundColor: 'rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-purple-400 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition duration-300 backdrop-blur"
                  >
                    Browse Collection
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Carousel with Animation Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <ProductCarousel
                images={
                  featuredProduct.images?.map((img) => ({
                    src: img,
                    alt: featuredProduct.name,
                    title: `${featuredProduct.name} - ${featuredProduct.color}`,
                  })) || []
                }
                productName={featuredProduct.name}
              />
            </motion.div>

            {/* Featured Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <h2 className="text-3xl font-bold mb-4">{featuredProduct.name}</h2>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-purple-600">
                      A${featuredProduct.price}
                    </span>
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                      ✓ Verified Authentic
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">{featuredProduct.description}</p>

                  <div className="space-y-3 mb-8 bg-white rounded-lg p-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Brand:</span>
                      <span className="font-medium">{featuredProduct.details?.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Material:</span>
                      <span className="font-medium">{featuredProduct.details?.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Condition:</span>
                      <span className="text-green-600 font-semibold">
                        {featuredProduct.details?.condition}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Stock:</span>
                      <span className="text-purple-600 font-semibold">
                        {featuredProduct.stock} Available
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(featuredProduct)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300"
                    >
                      Add to Cart
                    </button>
                    <Link
                      href="https://depop.app.link/6g078fuJW2b"
                      target="_blank"
                      className="w-full flex items-center justify-center gap-2 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition duration-300"
                    >
                      <ExternalLink size={20} />
                      Also Available on Depop
                    </Link>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-2xl">🔐</span>
                    Authentication Certificate
                  </h3>
                  <div className="space-y-4">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-800">Original Packaging</p>
                        <p className="text-sm text-gray-600">Comes with authentic LV dust bag</p>
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-800">Never Worn</p>
                        <p className="text-sm text-gray-600">Pristine condition, straight from packaging</p>
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-800">Expert Verified</p>
                        <p className="text-sm text-gray-600">Authenticated by luxury brand experts</p>
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold text-gray-800">Limited Stock</p>
                        <p className="text-sm text-gray-600">Exclusive availability, 1 item only</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pristine Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-center mb-4">Premium Collection</h2>
            <p className="text-center text-gray-600 text-lg">
              Exclusively pristine, verified authentic designer beanies. Never-worn, original condition guaranteed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {neverWornProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition"
            >
              View All Never-Worn Items
            </Link>
          </div>
        </div>
      </section>

      <Reviews />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Support McBeanie</h2>
          <p className="text-lg mb-8">
            Can't find what you're looking for? Check out our full collection on Depop for more authenticated luxury beanies.
          </p>
          <Link
            href="https://depop.app.link/6g078fuJW2b"
            target="_blank"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Browse on Depop
          </Link>
        </div>
      </section>
    </main>
  );
}
