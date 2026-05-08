'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye, Check } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
      whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(168, 85, 247, 0.3)' }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <Image
            src={`https://via.placeholder.com/500x500?text=${encodeURIComponent(product.name)}`}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
            unoptimized
          />

          {/* Overlay with Quick View and Wishlist */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: showOverlay ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: showOverlay ? 'auto' : 'none' }}
          >
            <motion.button
              className="bg-white text-purple-600 p-3 rounded-full hover:bg-purple-600 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={20} />
            </motion.button>
            <motion.button
              className="bg-white text-red-600 p-3 rounded-full hover:bg-red-600 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
              }}
            >
              <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
            </motion.button>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Never Worn
          </motion.div>

          {/* Stock indicator */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <p className="text-white font-bold text-lg">Out of Stock</p>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-lg mb-1 hover:text-purple-600 transition line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-4 font-medium">{product.color}</p>

        <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
          <div>
            <motion.p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              A${product.price}
            </motion.p>
            <p className={`text-xs font-semibold mt-1 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>
          </div>
          {product.authenticated && (
            <motion.div
              className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-bold"
              whileHover={{ scale: 1.05 }}
            >
              ✓ Verified
            </motion.div>
          )}
        </div>

        <motion.button
          type="button"
          onClick={() => {
            onAddToCart(product);
            setJustAdded(true);
            setTimeout(() => setJustAdded(false), 2000);
          }}
          disabled={product.stock === 0}
          className={`w-full py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
            justAdded
              ? 'bg-green-600 text-white'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
          }`}
          whileHover={{ scale: product.stock > 0 ? 1.02 : 1 }}
          whileTap={{ scale: product.stock > 0 ? 0.98 : 1 }}
        >
          <motion.span
            animate={justAdded ? { rotate: 360 } : { y: [0, -2, 0] }}
            transition={
              justAdded
                ? { duration: 0.5 }
                : { duration: 2, repeat: Infinity }
            }
          >
            {justAdded ? <Check size={18} /> : <ShoppingCart size={18} />}
          </motion.span>
          {justAdded ? 'Added to Cart!' : 'Add to Cart'}
        </motion.button>
      </div>
    </motion.div>
  );
}
