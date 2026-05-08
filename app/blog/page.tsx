'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Authentic Louis Vuitton Resale: How to Spot Real vs Fake Beanies',
    slug: 'authentic-lv-beanie-guide',
    excerpt: 'Learn the key indicators of authentic Louis Vuitton beanies and how to avoid counterfeit products.',
    author: 'Style Expert',
    publishedAt: '2024-01-15',
    readTime: 5,
    keywords: ['authentication', 'louis vuitton', 'beanie'],
  },
  {
    id: 2,
    title: 'Gen Z Guide to Sustainable Fashion: Why Resale Matters',
    slug: 'sustainable-fashion-gen-z',
    excerpt: 'Discover how buying resale designer items helps the environment and saves you money.',
    author: 'Fashion Influencer',
    publishedAt: '2024-01-12',
    readTime: 6,
    keywords: ['sustainability', 'gen z', 'fashion'],
  },
  {
    id: 3,
    title: 'Luxury Beanies: A Fashion Statement for Every Season',
    slug: 'luxury-beanies-fashion-statement',
    excerpt: 'Explore why designer beanies have become the ultimate accessory for fashion enthusiasts.',
    author: 'Trend Analyst',
    publishedAt: '2024-01-10',
    readTime: 4,
    keywords: ['luxury', 'beanies', 'fashion'],
  },
  {
    id: 4,
    title: 'How to Care for Your Designer Beanies: Complete Guide',
    slug: 'designer-beanie-care-guide',
    excerpt: 'Protect your investment with our comprehensive care and storage guide for luxury beanies.',
    author: 'Care Expert',
    publishedAt: '2024-01-08',
    readTime: 5,
    keywords: ['care', 'maintenance', 'luxury'],
  },
  {
    id: 5,
    title: 'Investing in Vintage LV: A Buyer\'s Guide to Collector\'s Items',
    slug: 'vintage-lv-buyers-guide',
    excerpt: 'Understand which vintage Louis Vuitton pieces are investment-worthy and hold their value.',
    author: 'Vintage Curator',
    publishedAt: '2024-01-05',
    readTime: 7,
    keywords: ['vintage', 'investment', 'louis vuitton'],
  },
  {
    id: 6,
    title: 'Winter Fashion 2024: The Designer Beanie Comeback',
    slug: 'winter-fashion-beanie-trend',
    excerpt: 'See why luxury beanies are trending this season and how to style them perfectly.',
    author: 'Fashion Editor',
    publishedAt: '2024-01-03',
    readTime: 5,
    keywords: ['winter', 'trends', 'fashion'],
  },
  {
    id: 7,
    title: 'Sustainable Luxury: The Rise of the Designer Resale Market',
    slug: 'sustainable-luxury-resale-market',
    excerpt: 'Explore how the luxury resale market is changing fashion and reducing waste globally.',
    author: 'Market Analyst',
    publishedAt: '2024-01-01',
    readTime: 6,
    keywords: ['sustainable', 'resale', 'luxury'],
  },
  {
    id: 8,
    title: '5 Ways to Style Your Designer Beanie: Complete Lookbook',
    slug: 'style-designer-beanie-lookbook',
    excerpt: 'Get inspired with five stunning outfit ideas featuring your luxury beanie.',
    author: 'Style Guide',
    publishedAt: '2023-12-30',
    readTime: 4,
    keywords: ['styling', 'outfits', 'beanie'],
  },
  {
    id: 9,
    title: 'Authentication Process Explained: How We Verify Every Beanie',
    slug: 'authentication-process-explained',
    excerpt: 'Behind the scenes look at our rigorous authentication process for designer items.',
    author: 'Authentication Team',
    publishedAt: '2023-12-28',
    readTime: 5,
    keywords: ['authentication', 'verification', 'process'],
  },
  {
    id: 10,
    title: 'Why Resale is the Future of Fashion: Trends for 2024',
    slug: 'future-of-fashion-resale',
    excerpt: 'Discover why the luxury resale market is the future of sustainable fashion.',
    author: 'Future Trends',
    publishedAt: '2023-12-25',
    readTime: 6,
    keywords: ['resale', 'future', 'trends'],
  },
];

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">McBeanie Blog</h1>
          <p className="text-gray-600 text-lg">Stories, guides, and trends in luxury beanie culture</p>
        </div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="border-b pb-8 hover:bg-gray-50 p-4 rounded-lg transition"
              variants={postVariants}
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold mb-3 hover:text-purple-600 transition">{post.title}</h2>
              </Link>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 items-center">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span key={kw} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                    #{kw}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
