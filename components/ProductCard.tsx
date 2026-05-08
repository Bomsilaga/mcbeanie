'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
      whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(168, 85, 247, 0.3)' }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-64 bg-gray-200">
          <Image
            src={`https://via.placeholder.com/500x500?text=${encodeURIComponent(product.name)}`}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Never Worn
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-purple-600 transition">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3">{product.color}</p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-purple-600">A${product.price}</p>
            <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>
          </div>
          {product.authenticated && (
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              ✓ Verified
            </div>
          )}
        </div>

        <motion.button
          type="button"
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: product.stock > 0 ? 1.02 : 1 }}
          whileTap={{ scale: product.stock > 0 ? 0.98 : 1 }}
        >
          <motion.span animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ShoppingCart size={18} />
          </motion.span>
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
