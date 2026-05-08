'use client';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/types';
import { useState } from 'react';

const placeholderProducts: Product[] = Array.from({ length: 10 }, (_, i) => ({
  _id: `prod-${i + 1}`,
  name: `Authentic LV Beanie ${i + 1}`,
  slug: `authentic-lv-beanie-${i + 1}`,
  price: 150 + i * 30,
  image: `https://via.placeholder.com/500x500?text=LV+Beanie+${i + 1}`,
  description: `Premium authenticated Louis Vuitton beanie in ${['black', 'grey', 'navy', 'brown', 'burgundy', 'white', 'cream', 'olive', 'tan', 'charcoal'][i]} condition.`,
  stock: Math.floor(Math.random() * 5) + 1,
  color: ['Black', 'Grey', 'Navy', 'Brown', 'Burgundy', 'White', 'Cream', 'Olive', 'Tan', 'Charcoal'][i],
  condition: ['new', 'like-new', 'good'][Math.floor(Math.random() * 3)] as any,
  authenticated: true,
}));

export default function ProductsPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest'>('newest');

  const sortedProducts = [...placeholderProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop All Beanies</h1>
          <p className="text-gray-600 text-lg">Discover our collection of authenticated designer beanies</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-4 flex-wrap">
          <div>
            <label htmlFor="sort-select" className="block text-sm font-medium mb-2">Sort By</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </main>
  );
}
