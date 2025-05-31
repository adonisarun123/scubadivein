'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, Award, ArrowRight, CheckCircle, BookOpen, Waves } from 'lucide-react'

const allCourses = [
  {
    id: 'open-water-diver',
    category: 'Beginner',
    title: 'Open Water Diver',
    description: 'Your first step into the underwater world. The most popular scuba certification globally.',
    duration: '4 days',
    price: '₹29,999',
    depth: 'Up to 18m',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800',
    highlights: [
      'No prior experience required',
      'Internationally recognized certification',
      'Theory + Pool + Open water dives',
      'Lifetime certification'
    ]
  },
  {
    id: 'scuba-diver',
    category: 'Beginner',
    title: 'Scuba Diver',
    description: 'Perfect for those with limited time. Dive under supervision to 12 meters.',
    duration: '2 days',
    price: '₹19,999',
    depth: 'Up to 12m',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800',
    highlights: [
      'Quick certification option',
      'Dive with a professional',
      'Upgrade to Open Water anytime',
      'Perfect for vacations'
    ]
  },
  {
    id: 'advanced-open-water',
    category: 'Intermediate',
    title: 'Advanced Open Water Diver',
    description: 'Expand your skills with 5 adventure dives including deep and navigation.',
    duration: '3 days',
    price: '₹27,500',
    depth: 'Up to 30m',
    image: 'https://images.unsplash.com/photo-1586508577428-120d21d3ca2e?q=80&w=800',
    highlights: [
      '5 adventure dives',
      'Deep diving to 30m',
      'Underwater navigation',
      'Choose your adventures'
    ]
  },
  {
    id: 'rescue-diver',
    category: 'Advanced',
    title: 'Rescue Diver',
    description: 'Learn to prevent and manage dive emergencies. The most rewarding course.',
    duration: '4 days',
    price: '₹32,000',
    depth: 'Varies',
    image: 'https://images.unsplash.com/photo-1559827083-d7f12a4cbe2f?q=80&w=800',
    highlights: [
      'Emergency management',
      'Self-rescue techniques',
      'Rescue scenarios',
      'Stress management'
    ]
  },
  {
    id: 'divemaster',
    category: 'Professional',
    title: 'Divemaster',
    description: 'Your first step into professional diving. Lead dives and assist instructors.',
    duration: '6-8 weeks',
    price: '₹85,000',
    depth: 'Professional',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=800',
    highlights: [
      'Professional certification',
      'Lead certified divers',
      'Assist in courses',
      'Internship included'
    ]
  },
  {
    id: 'enriched-air-nitrox',
    category: 'Specialty',
    title: 'Enriched Air Nitrox',
    description: 'Dive longer with enriched air. The most popular specialty course.',
    duration: '1 day',
    price: '₹12,500',
    depth: 'Varies',
    image: 'https://images.unsplash.com/photo-1559950338-822d40b37cd2?q=80&w=800',
    highlights: [
      'Extended bottom times',
      'Shorter surface intervals',
      'Theory focused',
      'No dives required'
    ]
  },
  {
    id: 'deep-diver',
    category: 'Specialty',
    title: 'Deep Diver',
    description: 'Explore deeper dive sites safely. Learn to plan and execute deep dives.',
    duration: '2 days',
    price: '₹22,000',
    depth: 'Up to 40m',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800',
    highlights: [
      'Dive to 40 meters',
      'Deep dive planning',
      'Managing nitrogen',
      '4 training dives'
    ]
  },
  {
    id: 'underwater-photography',
    category: 'Specialty',
    title: 'Underwater Photography',
    description: 'Capture the underwater world. Learn techniques for stunning underwater photos.',
    duration: '2 days',
    price: '₹18,500',
    depth: 'Varies',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800',
    highlights: [
      'Camera techniques',
      'Composition skills',
      'Light and color',
      'Photo editing basics'
    ]
  }
]

const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Professional', 'Specialty']

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCourses = selectedCategory === 'All' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-ocean text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our Diving Courses
            </h1>
            <p className="text-xl text-gray-100">
              From beginner to professional, find the perfect course for your diving journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-sand-beige/20 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-coral-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-primary-blue" />
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                    <div className="text-center">
                      <Waves className="w-5 h-5 mx-auto mb-1 text-primary-blue" />
                      <p className="text-sm text-gray-500">{course.depth}</p>
                    </div>
                    <div className="text-center">
                      <BookOpen className="w-5 h-5 mx-auto mb-1 text-primary-blue" />
                      <p className="text-sm text-gray-500">PADI</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-primary-blue">{course.price}</p>
                    </div>
                    <Link
                      href={`/courses/${course.id}`}
                      className="flex items-center space-x-2 text-primary-blue hover:text-deep-ocean transition-colors group"
                    >
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero to Hero CTA */}
      <section className="py-20 bg-gradient-to-r from-deep-ocean to-primary-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Looking for a Career in Diving?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Check out our Zero to Hero program - from complete beginner to PADI Divemaster in just 6 months!
            </p>
            <Link href="/zero-to-hero" className="btn-secondary inline-flex items-center space-x-2">
              <span>Explore Zero to Hero</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 