'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-ocean via-primary-blue to-aqua-cyan text-white relative overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="0.2" d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,213.3C672,192,768,192,864,213.3C960,235,1056,277,1152,277.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Ready to Take the Plunge?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Start your underwater adventure today. Join our next batch of diving courses 
            and discover a whole new world beneath the waves.
          </p>

          {/* Special Offer Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block bg-coral-orange text-white px-6 py-2 rounded-full mb-8"
          >
            <span className="font-semibold">🎉 Limited Time: 10% off on all beginner courses!</span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/courses" 
              className="bg-white text-deep-ocean px-8 py-4 rounded-full font-semibold text-lg hover:bg-sand-beige transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Course</span>
            </Link>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-deep-ocean transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Money Back Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-2xl font-bold">5 Star</div>
              <div className="text-sm">PADI Dive Center</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 