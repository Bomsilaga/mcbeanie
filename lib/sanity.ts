import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

export const imageBuilder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return imageBuilder.image(source);
}

export async function getProducts() {
  return client.fetch(`*[_type == "product"] | order(_createdAt desc)`);
}

export async function getProduct(slug: string) {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug });
}

export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) { ..., "slug": slug.current }`
  );
}

export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] { ..., "slug": slug.current }`,
    { slug }
  );
}

export async function getReviews() {
  return client.fetch(`*[_type == "review"] | order(_createdAt desc)`);
}

export default client;
