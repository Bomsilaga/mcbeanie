'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-0 right-0"
          animate={{
            y: [0, 50, 0],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Luxury Beanies,<br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Authenticated & Affordable
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          Discover authentic Louis Vuitton and premium designer beanies. Sustainably curated. Verified. Shipped fast.
        </motion.p>

        <motion.div className="flex gap-4 justify-center flex-col sm:flex-row" variants={itemVariants}>
          <Link
            href="/products"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
          >
            Shop Now
          </Link>
          <Link
            href="https://depop.app.link/6g078fuJW2b"
            target="_blank"
            className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400/10 transition duration-300"
          >
            Browse on Depop
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
