'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Heart, Globe, BookOpen } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize your safety with top-quality equipment, experienced instructors, and small group sizes for personalized attention.',
    color: 'bg-primary-blue'
  },
  {
    icon: Award,
    title: 'PADI 5 Star Center',
    description: 'As a PADI 5 Star Dive Center, we maintain the highest standards of dive training and customer service excellence.',
    color: 'bg-coral-orange'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Our PADI-certified instructors have years of experience and are passionate about sharing their love for the ocean.',
    color: 'bg-aqua-cyan'
  },
  {
    icon: Heart,
    title: 'Personalized Learning',
    description: 'We adapt our teaching methods to suit your learning style and pace, ensuring you feel comfortable and confident.',
    color: 'bg-deep-ocean'
  },
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Your PADI certification is recognized worldwide, opening doors to dive sites across the globe.',
    color: 'bg-primary-blue'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Training',
    description: 'From theory to practical skills, we provide thorough training that prepares you for real-world diving scenarios.',
    color: 'bg-coral-orange'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="gradient-text">ScubaDiveIn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best diving education and experiences in India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="text-center p-6 h-full">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.color} text-white rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-ocean text-white rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Start Your Diving Journey?
              </h3>
              <p className="text-lg mb-6 text-gray-100">
                Join thousands of satisfied divers who have learned with us. Our commitment to excellence, 
                safety, and personalized instruction makes us the preferred choice for diving education in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/courses" className="btn-secondary text-center">
                  Explore Courses
                </a>
                <a href="/contact" className="text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-deep-ocean transition-all duration-300 text-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583922606661-0822ed0bd916?q=80&w=1920"
                alt="Divers exploring coral reef"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-coral-orange text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 