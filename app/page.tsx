'use client';

import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/types';
import { useState } from 'react';

const placeholderProducts: Product[] = Array.from({ length: 6 }, (_, i) => ({
  _id: `prod-${i + 1}`,
  name: `Authentic LV Beanie ${i + 1}`,
  slug: `authentic-lv-beanie-${i + 1}`,
  price: 150 + i * 50,
  image: `https://images.unsplash.com/photo-${Math.random().toString(36).substring(7)}?w=500&h=500`,
  description: 'Premium authenticated Louis Vuitton beanie in perfect condition.',
  stock: Math.floor(Math.random() * 5) + 1,
  color: ['Black', 'Grey', 'Navy', 'Brown', 'Burgundy', 'White'][i],
  condition: ['new', 'like-new', 'good'][Math.floor(Math.random() * 3)] as any,
  authenticated: true,
}));

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {placeholderProducts.slice(0, 6).map((product) => (
              <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <Reviews />
    </main>
  );
}
