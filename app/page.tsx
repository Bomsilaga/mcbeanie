'use client';

import Header from '@/components/Header';
import Reviews from '@/components/Reviews';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProduct, neverWornProducts } from '@/lib/products';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Sparkles } from 'lucide-react';

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

      {/* Full-Width Carousel Hero Section */}
      {featuredProduct && (
        <section className="relative w-full aspect-video bg-black overflow-hidden">
          <ProductCarousel
            images={
              featuredProduct.images?.map((img) => ({
                src: img,
                alt: featuredProduct.name,
                title: `${featuredProduct.name} - View ${featuredProduct.images.indexOf(img) + 1}`,
              })) || []
            }
            productName={featuredProduct.name}
            autoPlay={true}
            autoPlayInterval={5000}
          />

          {/* Overlay Content - Bottom Left */}
          <motion.div
            className="absolute bottom-0 left-0 z-20 p-6 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-teal-300 text-xs md:text-sm font-semibold mb-3 flex items-center gap-2">
              <Sparkles size={16} />
              FEATURED COLLECTION
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
              {featuredProduct.name}
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-6 max-w-md">
              {featuredProduct.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-2xl md:text-3xl font-black text-transparent bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text">
                A${featuredProduct.price}
              </span>
              <span className="bg-green-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                ✓ Never Worn
              </span>
              <span className="bg-teal-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                ✓ Verified Authentic
              </span>
            </div>
          </motion.div>

          {/* CTA Button - Bottom Right */}
          <motion.div
            className="absolute bottom-8 right-8 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://depop.app.link/6g078fuJW2b"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-bold text-sm md:text-base hover:shadow-2xl transition duration-300"
            >
              <ExternalLink size={20} />
              Shop Now
            </Link>
          </motion.div>
        </section>
      )}

      {/* Pristine Collection */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
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
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-pink-500/10 rounded-full border border-teal-200/50"
            >
              <p className="text-teal-600 text-sm font-semibold">FEATURED COLLECTION</p>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent">
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
              className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-teal-500/50 transition duration-300 transform hover:scale-105"
            >
              Explore Full Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <Reviews />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600" />
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
                  className="inline-block bg-white text-teal-600 px-10 py-4 rounded-full font-bold hover:shadow-xl transition duration-300"
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

