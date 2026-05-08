'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About McBeanie</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p>
              McBeanie was born from a passion for luxury fashion and a commitment to sustainability. We believe that authentic designer pieces should be accessible to everyone, regardless of budget. Our mission is to make luxury beanies—especially authenticated Louis Vuitton pieces—available to Gen Z and Gen Alpha fashion enthusiasts who value quality and authenticity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose McBeanie?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>100% Authenticated:</strong> Every item goes through a rigorous authentication process by our expert team</li>
              <li><strong>Sustainable:</strong> We promote circular fashion by helping authenticated items find new homes</li>
              <li><strong>Gen Z Approved:</strong> Modern design, smooth animations, and a shopping experience built for the culture</li>
              <li><strong>Fast Shipping:</strong> We ship authenticated items quickly and securely</li>
              <li><strong>Customer Support:</strong> Dedicated team ready to help with any questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Authentication Process</h2>
            <p>
              We take authentication seriously. Our team of experts examines each piece for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monogram pattern accuracy and symmetry</li>
              <li>Stitching quality and precision</li>
              <li>Material authenticity and feel</li>
              <li>Logo clarity and placement</li>
              <li>Serial numbers and authenticity certificates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Sustainability</h2>
            <p>
              Every purchase at McBeanie is a vote for sustainable fashion. By buying resale authenticated pieces, you're:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reducing fashion waste</li>
              <li>Supporting the circular economy</li>
              <li>Getting premium quality at affordable prices</li>
              <li>Making a positive environmental impact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p>
              Have questions? We'd love to hear from you! Connect with our team at:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> cynthia.ipalibo@gmail.com</p>
              <p><strong>Depop:</strong> <a href="https://depop.app.link/6g078fuJW2b" className="text-purple-600 hover:text-purple-700">Visit our Depop store</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Beanie?</h3>
          <p className="mb-6">Browse our collection of authenticated luxury beanies</p>
          <Link href="/products" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Shop Now
          </Link>
        </div>
      </div>
    </main>
  );
}
