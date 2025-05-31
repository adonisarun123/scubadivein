# Image & Video SEO Best Practices

## Image Optimization
- Use descriptive ALT text for all images (e.g., `alt="scuba diving in Andaman"`).
- Use WebP format for faster load speed.
- Resize to max width of 1200px.
- Lazy load images.

## Video Schema Example (for YouTube embedded video)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Zero to Hero Scuba Program",
  "description": "Become a certified scuba instructor from beginner level.",
  "thumbnailUrl": "https://img.youtube.com/vi/abcd1234/maxresdefault.jpg",
  "uploadDate": "2023-08-01",
  "contentUrl": "https://www.youtube.com/watch?v=abcd1234",
  "embedUrl": "https://www.youtube.com/embed/abcd1234"
}
```