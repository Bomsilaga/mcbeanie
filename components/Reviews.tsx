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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              variants={reviewVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">{review.author}</h3>
                {review.verified && (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
