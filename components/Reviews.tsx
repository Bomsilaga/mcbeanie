'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    text: 'Absolutely love my beanie! Authentic and arrived in perfect condition. Highly recommend McBeanie!',
    verified: true,
  },
  {
    id: 2,
    author: 'James K.',
    rating: 5,
    text: 'Fast shipping and great customer service. The beanie quality is exceptional.',
    verified: true,
  },
  {
    id: 3,
    author: 'Emma L.',
    rating: 5,
    text: 'Best place to buy authenticated designer beanies. So worth it!',
    verified: true,
  },
  {
    id: 4,
    author: 'Alex T.',
    rating: 5,
    text: 'The authentication certificate and packaging were perfect. Very professional.',
    verified: true,
  },
];

export default function Reviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const reviewVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/50"
          >
            <p className="text-purple-600 text-sm font-semibold">⭐ CUSTOMER LOVE</p>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">Trusted by collectors worldwide</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-purple-100/50 group"
              variants={reviewVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px rgba(168, 85, 247, 0.15)',
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-900">{review.author}</h3>
                  {review.verified && (
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      ✓ Verified
                    </motion.span>
                  )}
                </div>

                <motion.div
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + i * 0.05 + 0.2 }}
                    >
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                <p className="text-gray-700 text-base leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
