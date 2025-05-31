import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'ScubaDiveIn - Premier PADI Dive Center in India | Learn Scuba Diving',
  description: 'Explore the underwater world with ScubaDiveIn. PADI certified dive center offering courses from beginner to instructor level. Start your diving journey today!',
  keywords: 'scuba diving, PADI courses, dive center India, learn diving, open water diver, advanced diving, Bangalore diving',
  authors: [{ name: 'ScubaDiveIn' }],
  openGraph: {
    title: 'ScubaDiveIn - Explore the Ocean World',
    description: 'Premier PADI dive center in India. Learn scuba diving from certified instructors.',
    url: 'https://scubadivein.in',
    siteName: 'ScubaDiveIn',
    images: [
      {
        url: 'https://scubadivein.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ScubaDiveIn - Explore the Ocean World',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScubaDiveIn - Premier PADI Dive Center',
    description: 'Learn scuba diving with certified PADI instructors in India',
    images: ['https://scubadivein.in/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 