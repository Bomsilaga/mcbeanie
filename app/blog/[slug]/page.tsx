'use client';

import Header from '@/components/Header';
import { useParams } from 'next/navigation';

const blogPostsData: Record<string, any> = {
  'authentic-lv-beanie-guide': {
    title: 'Authentic Louis Vuitton Resale: How to Spot Real vs Fake Beanies',
    author: 'Style Expert',
    publishedAt: '2024-01-15',
    readTime: 5,
    content: `
      <h2>Introduction</h2>
      <p>Louis Vuitton beanies have become a symbol of luxury and style, making them highly sought after by fashion enthusiasts. However, the popularity also means the market is flooded with counterfeit products. In this comprehensive guide, we'll teach you how to authenticate Louis Vuitton beanies with confidence.</p>

      <h2>Key Authentication Points</h2>
      <h3>1. The Monogram Pattern</h3>
      <p>Authentic LV beanies feature perfectly symmetrical monogram patterns. The letters should be evenly spaced and aligned. Counterfeit versions often have irregular spacing or misaligned patterns.</p>

      <h3>2. Stitching Quality</h3>
      <p>Examine the stitching carefully. Louis Vuitton uses precise, even stitching that never crosses the monogram. Each stitch should be consistent and professional. Poor stitching is a red flag for counterfeits.</p>

      <h3>3. Material Feel</h3>
      <p>Authentic LV beanies use high-quality, premium materials that feel soft and luxurious. The material should not feel thin or cheap. If it feels plastic-like, it's likely counterfeit.</p>

      <h3>4. Logo Clarity</h3>
      <p>The LV logo should be crisp and clear with sharp edges. Look for any fading, bleeding, or blurring of the logo, which indicates a fake product.</p>

      <h2>Where to Buy Authenticated Beanies</h2>
      <p>At McBeanie, every single item goes through a rigorous authentication process. Our expert team verifies each beanie before it reaches you, so you can shop with confidence.</p>

      <h2>Conclusion</h2>
      <p>By following these authentication tips and shopping from trusted retailers like McBeanie, you can ensure you're getting a genuine Louis Vuitton beanie that will last for years.</p>
    `,
    keywords: ['authentication', 'louis vuitton', 'beanie'],
  },
  'sustainable-fashion-gen-z': {
    title: 'Gen Z Guide to Sustainable Fashion: Why Resale Matters',
    author: 'Fashion Influencer',
    publishedAt: '2024-01-12',
    readTime: 6,
    content: `<p>Generation Z is reshaping the fashion industry with sustainable choices and ethical consumption...</p>`,
    keywords: ['sustainability', 'gen z', 'fashion'],
  },
  'luxury-beanies-fashion-statement': {
    title: 'Luxury Beanies: A Fashion Statement for Every Season',
    author: 'Trend Analyst',
    publishedAt: '2024-01-10',
    readTime: 4,
    content: `<p>Designer beanies have transcended their practical purpose to become a statement piece...</p>`,
    keywords: ['luxury', 'beanies', 'fashion'],
  },
  'designer-beanie-care-guide': {
    title: 'How to Care for Your Designer Beanies: Complete Guide',
    author: 'Care Expert',
    publishedAt: '2024-01-08',
    readTime: 5,
    content: `<p>Protecting your investment in luxury beanies requires proper care and maintenance...</p>`,
    keywords: ['care', 'maintenance', 'luxury'],
  },
  'vintage-lv-buyers-guide': {
    title: 'Investing in Vintage LV: A Buyer\'s Guide to Collector\'s Items',
    author: 'Vintage Curator',
    publishedAt: '2024-01-05',
    readTime: 7,
    content: `<p>Vintage Louis Vuitton pieces have become increasingly valuable investments...</p>`,
    keywords: ['vintage', 'investment', 'louis vuitton'],
  },
  'winter-fashion-beanie-trend': {
    title: 'Winter Fashion 2024: The Designer Beanie Comeback',
    author: 'Fashion Editor',
    publishedAt: '2024-01-03',
    readTime: 5,
    content: `<p>As winter approaches, luxury beanies are making a major fashion comeback...</p>`,
    keywords: ['winter', 'trends', 'fashion'],
  },
  'sustainable-luxury-resale-market': {
    title: 'Sustainable Luxury: The Rise of the Designer Resale Market',
    author: 'Market Analyst',
    publishedAt: '2024-01-01',
    readTime: 6,
    content: `<p>The luxury resale market is experiencing unprecedented growth as consumers...</p>`,
    keywords: ['sustainable', 'resale', 'luxury'],
  },
  'style-designer-beanie-lookbook': {
    title: '5 Ways to Style Your Designer Beanie: Complete Lookbook',
    author: 'Style Guide',
    publishedAt: '2023-12-30',
    readTime: 4,
    content: `<p>Discover five stunning ways to incorporate your designer beanie into your wardrobe...</p>`,
    keywords: ['styling', 'outfits', 'beanie'],
  },
  'authentication-process-explained': {
    title: 'Authentication Process Explained: How We Verify Every Beanie',
    author: 'Authentication Team',
    publishedAt: '2023-12-28',
    readTime: 5,
    content: `<p>Our rigorous authentication process ensures every item meets our standards...</p>`,
    keywords: ['authentication', 'verification', 'process'],
  },
  'future-of-fashion-resale': {
    title: 'Why Resale is the Future of Fashion: Trends for 2024',
    author: 'Future Trends',
    publishedAt: '2023-12-25',
    readTime: 6,
    content: `<p>The resale market represents the future of sustainable fashion...</p>`,
    keywords: ['resale', 'future', 'trends'],
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPostsData[slug] || blogPostsData['authentic-lv-beanie-guide'];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-gray-600 text-sm">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {post.keywords.map((kw: string) => (
            <span key={kw} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
              #{kw}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Share This Post</h3>
          <div className="flex gap-4">
            <a href="#" className="text-purple-600 hover:text-purple-700">Twitter</a>
            <a href="#" className="text-purple-600 hover:text-purple-700">Facebook</a>
            <a href="#" className="text-purple-600 hover:text-purple-700">Pinterest</a>
          </div>
        </div>
      </article>
    </main>
  );
}
