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
import { ExternalLink, Star, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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

      {/* Full-Screen Animated Hero Section */}
      {featuredProduct && (
        <section className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex flex-col justify-between">
          <AnimatedBackground />

          {/* Top Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-start pt-8 md:pt-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto w-full px-4 text-center"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 backdrop-blur"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(168, 85, 247, 0.2)',
                      '0 0 40px rgba(168, 85, 247, 0.4)',
                      '0 0 20px rgba(168, 85, 247, 0.2)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="text-purple-300 text-sm font-semibold flex items-center gap-2 justify-center">
                    <motion.span
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles size={16} />
                    </motion.span>
                    FEATURED: Verified Pristine Condition
                  </p>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4 md:mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
                  Never-Worn
                </h1>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-2xl opacity-50" />
                  <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                    Premium Beanies
                  </h2>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light"
              >
                Authenticated luxury beanies in pristine condition. Limited stock. Verified authentic. Timeless style.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.08, boxShadow: '0 30px 60px rgba(168, 85, 247, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://depop.app.link/6g078fuJW2b"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-full font-bold text-base md:text-lg hover:shadow-2xl transition duration-300 backdrop-blur-sm border border-purple-400/50"
                  >
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      <ExternalLink size={22} />
                    </motion.span>
                    Shop on Depop
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.08, borderColor: 'rgb(255, 255, 255)', backgroundColor: 'rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-white/10 border-2 border-white/40 text-white rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition duration-300 backdrop-blur-sm"
                  >
                    Browse Collection
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Full-Screen Featured Product Display */}
          <div className="relative z-10 flex-1 flex items-center justify-center px-4 pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
              className="w-full max-w-5xl h-full max-h-[600px] md:max-h-[700px] lg:max-h-[750px]"
              style={{ perspective: '1200px' }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-pink-900">
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Featured Product Image */}
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={`https://via.placeholder.com/800x600?text=${encodeURIComponent(featuredProduct.name)}`}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />

                  {/* Animated overlay with product info */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <p className="text-purple-300 text-sm font-semibold mb-2">FEATURED ITEM</p>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                        {featuredProduct.name}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                          A${featuredProduct.price}
                        </span>
                        <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                          Never Worn
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 bg-clip-border"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pristine Collection */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/50"
            >
              <p className="text-purple-600 text-sm font-semibold">FEATURED COLLECTION</p>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              Premium Selection
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Exclusively pristine, verified authentic designer beanies. Never-worn, original condition guaranteed. Curated for collectors and enthusiasts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {neverWornProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105"
            >
              Explore Full Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <Reviews />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2), transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Own Premium?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Browse our complete collection on Depop or explore limited stock items directly. All items authenticated and verified for authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://depop.app.link/6g078fuJW2b"
                  target="_blank"
                  className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:shadow-xl transition duration-300"
                >
                  Shop on Depop
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="inline-block bg-white/20 border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition duration-300 backdrop-blur"
                >
                  View Our Store
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
