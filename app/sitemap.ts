import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://scubadivein.in'
  
  const routes = [
    '',
    '/about',
    '/courses',
    '/courses/open-water-diver',
    '/courses/advanced-open-water',
    '/courses/rescue-diver',
    '/courses/divemaster',
    '/zero-to-hero',
    '/gallery',
    '/blog',
    '/contact',
    '/terms',
    '/privacy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/courses') ? 0.8 : 0.5,
  }))
} 