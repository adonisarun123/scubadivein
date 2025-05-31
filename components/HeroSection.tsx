'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Play } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')",
            transform: 'scale(1.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean/70 via-primary-blue/50 to-aqua-cyan/30" />
        </div>
      </div>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800
            }}
            animate={{ 
              y: -100,
              x: `+=${Math.random() * 200 - 100}`
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-shadow-lg">
            Explore the{' '}
            <span className="text-aqua-cyan">Ocean World</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Begin your underwater adventure with India's premier PADI dive center. 
            From beginner to professional, we'll guide you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/courses" className="btn-primary text-lg px-8 py-4">
              Get Certified
            </Link>
            <button
              onClick={() => setShowVideo(true)}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold 
                       hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="font-heading font-semibold text-xl mb-2">PADI Certified</h3>
              <p className="text-gray-200">Internationally recognized certifications</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="font-heading font-semibold text-xl mb-2">Expert Instructors</h3>
              <p className="text-gray-200">Learn from experienced professionals</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="font-heading font-semibold text-xl mb-2">Small Groups</h3>
              <p className="text-gray-200">Personalized attention for safety</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/abcd1234?autoplay=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
} 