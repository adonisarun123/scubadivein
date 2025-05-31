'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, Award, ArrowRight } from 'lucide-react'

const courses = [
  {
    id: 'open-water',
    title: 'Open Water Diver',
    description: 'Your first step into the underwater world. No experience needed!',
    duration: '4 days',
    price: '₹29,999',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070',
    features: ['No experience required', 'Internationally recognized', 'Lifetime certification'],
    color: 'from-aqua-cyan to-primary-blue'
  },
  {
    id: 'advanced',
    title: 'Advanced Open Water',
    description: 'Expand your skills and explore deeper with 5 adventure dives.',
    duration: '3 days',
    price: '₹27,500',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1586508577428-120d21d3ca2e?q=80&w=2070',
    features: ['5 adventure dives', 'Deep diving to 30m', 'Navigation skills'],
    color: 'from-primary-blue to-deep-ocean'
  },
  {
    id: 'rescue',
    title: 'Rescue Diver',
    description: 'Learn to prevent and manage dive emergencies with confidence.',
    duration: '4 days',
    price: '₹32,000',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1559827083-d7f12a4cbe2f?q=80&w=2070',
    features: ['Emergency management', 'Rescue techniques', 'First aid skills'],
    color: 'from-coral-orange to-primary-blue'
  }
]

export default function CourseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sand-beige/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="gradient-text">Popular Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner to professional, we offer comprehensive PADI courses 
            designed to help you explore the underwater world safely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10`} />
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-blue">{course.level}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 text-coral-orange mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Course Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Small groups
                    </span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-primary-blue">{course.price}</p>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="flex items-center space-x-2 text-primary-blue hover:text-deep-ocean transition-colors group/link"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/courses" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 