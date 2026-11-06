import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dhartisaheli.in';

  const productUrls = PRODUCTS.map((p) => ({
    url: `${baseUrl}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const staticUrls = [
    '',
    '/shop',
    '/our-story',
    '/our-women',
    '/our-impact',
    '/bulk-enquiry',
    '/batch-traceability',
    '/contact',
    '/cart',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticUrls, ...productUrls];
}

