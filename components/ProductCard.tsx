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
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
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
            <p className="text-2xl font-bold text-purple-600">${product.price}</p>
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

        <button
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
