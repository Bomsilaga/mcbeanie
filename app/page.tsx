'use client';

import Header from '@/components/Header';
import Reviews from '@/components/Reviews';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import { neverWornProducts, getFeaturedProduct } from '@/lib/products';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const featuredProduct = getFeaturedProduct();

  const handleAddToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Carousel */}
      {featuredProduct && (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
                Never-Worn <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Luxury Beanies
                </span>
              </h1>
              <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto">
                Authenticated, pristine, never-worn designer beanies. Premium quality. Verified authentic. Limited availability.
              </p>
            </motion.div>

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

            {/* Featured Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{featuredProduct.name}</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-purple-600">
                      ${featuredProduct.price}
                    </span>
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                      ✓ Verified Authentic
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">{featuredProduct.description}</p>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Brand:</span>
                      <span>{featuredProduct.details?.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Material:</span>
                      <span>{featuredProduct.details?.material}</span>
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

                  <button
                    type="button"
                    onClick={() => handleAddToCart(featuredProduct)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Authentication Certificate</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold">Original Packaging</p>
                        <p className="text-sm text-gray-600">Comes with authentic LV dust bag</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold">Never Worn</p>
                        <p className="text-sm text-gray-600">Pristine condition, straight from packaging</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold">Expert Verified</p>
                        <p className="text-sm text-gray-600">Authenticated by luxury brand experts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p className="font-semibold">Limited Stock</p>
                        <p className="text-sm text-gray-600">Exclusive availability, 1 item only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Never-Worn Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-center mb-4">Never-Worn Collection</h2>
            <p className="text-center text-gray-600 text-lg">
              Exclusively never-worn, authenticated luxury beanies. All items guaranteed pristine condition.
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
