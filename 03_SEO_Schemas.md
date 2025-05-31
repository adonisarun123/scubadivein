# SEO & Structured Data

## JSON-LD Schemas

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ScubaDiveIn",
  "url": "https://scubadivein.in",
  "logo": "https://scubadivein.in/logo.png",
  "sameAs": [
    "https://www.facebook.com/scubadivein",
    "https://www.instagram.com/scubadivein/"
  ]
}
```

### Course
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "PADI Open Water Diver",
  "description": "Beginner scuba diving course with certification.",
  "provider": {
    "@type": "Organization",
    "name": "ScubaDiveIn",
    "sameAs": "https://scubadivein.in"
  }
}
```

### Local Business
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ScubaDiveIn",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "India"
  },
  "telephone": "+91-XXXXX-XXXXX"
}
```