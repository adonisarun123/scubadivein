# ScubaDiveIn - Premier PADI Dive Center Website

A modern, responsive website for ScubaDiveIn, a PADI certified dive center offering scuba diving courses in India.

## 🌊 Overview

ScubaDiveIn is a beautifully designed Next.js website featuring:
- Ocean-themed design with vibrant marine colors
- Responsive layout optimized for all devices
- SEO-optimized with structured data
- Interactive animations and parallax effects
- Comprehensive course catalog and booking system
- Gallery with lightbox functionality
- Blog section for diving insights
- Contact form with validation

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom ocean-themed design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Image Carousel**: Swiper
- **Typography**: Google Fonts (Poppins & Open Sans)

## 🎨 Design Features

### Color Palette
- Primary Blue: `#0077B6`
- Aqua Cyan: `#00B4D8`
- Deep Ocean: `#03045E`
- Coral Orange: `#FF6F61`
- Sand Beige: `#FFEBC1`

### Key Components
- Sticky navigation with dropdown menus
- Hero sections with video backgrounds
- Course cards with hover effects
- Testimonial carousel
- Contact form with validation
- Mobile-responsive design

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/scubadivein.git
cd scubadivein
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
scubadivein/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/            # About page
│   ├── courses/          # Courses listing
│   │   └── [slug]/       # Dynamic course details
│   ├── zero-to-hero/     # Career program page
│   ├── contact/          # Contact page
│   ├── gallery/          # Photo/video gallery
│   ├── blog/             # Blog listing
│   ├── terms/            # Terms & conditions
│   └── privacy/          # Privacy policy
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── HeroSection.tsx  # Hero banner
│   ├── CourseSection.tsx # Course cards
│   └── ...              # Other components
├── public/              # Static assets
└── styles/             # Global styles
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- Meta tags optimization
- Structured data (JSON-LD)
- Sitemap generation
- Open Graph tags
- Twitter cards

## 🚧 Future Enhancements

- [ ] Online booking system integration
- [ ] Payment gateway integration
- [ ] Student portal
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Google Maps integration
- [ ] Email notification system

## 📄 License

This project is proprietary to ScubaDiveIn. All rights reserved.

## 📞 Contact

For any queries regarding this project:
- Email: info@scubadivein.in
- Phone: +91-XXXXX-XXXXX
- Website: https://scubadivein.in

---

Built with ❤️ for the underwater world 🌊 