'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, Award, ChevronRight, CheckCircle, Calendar, Waves, BookOpen, AlertCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

const courseDetails = {
  'open-water-diver': {
    title: 'PADI Open Water Diver',
    category: 'Beginner',
    description: `The PADI Open Water Diver course is the world's most popular scuba course, and has introduced millions of people to the adventurous diving lifestyle.`,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
    duration: '4 days',
    price: '₹29,999',
    depth: 'Maximum 18 meters / 60 feet',
    age: 'Minimum 10 years old',
    included: [
      'All course materials and eLearning',
      'Pool training sessions',
      '4 open water dives',
      'All equipment rental',
      'PADI certification fees',
      'Dive log book',
      'Light refreshments'
    ],
    requirements: [
      'Adequate swimming skills',
      'Good physical health',
      'No serious medical conditions',
      'Comfortable in water'
    ],
    whatYouLearn: [
      'Scuba diving principles and terminology',
      'Equipment setup and maintenance',
      'Underwater communication and buddy procedures',
      'Buoyancy control and underwater navigation basics',
      'Safety procedures and emergency management'
    ],
    schedule: [
      { day: 'Day 1', activities: 'Theory sessions, equipment introduction, pool session 1' },
      { day: 'Day 2', activities: 'Theory review, pool sessions 2 & 3, final exam' },
      { day: 'Day 3', activities: 'Open water dives 1 & 2 (max depth 12m)' },
      { day: 'Day 4', activities: 'Open water dives 3 & 4 (max depth 18m), certification!' }
    ]
  },
  'advanced-open-water': {
    title: 'PADI Advanced Open Water Diver',
    category: 'Intermediate',
    description: `Exploration, Excitement, Experiences - that's what the PADI Advanced Open Water Diver course is all about.`,
    image: 'https://images.unsplash.com/photo-1586508577428-120d21d3ca2e?q=80&w=1200',
    duration: '3 days',
    price: '₹27,500',
    depth: 'Maximum 30 meters / 100 feet',
    age: 'Minimum 12 years old',
    included: [
      'PADI eLearning materials',
      '5 adventure dives',
      'Deep dive (required)',
      'Navigation dive (required)',
      'All equipment rental',
      'PADI certification fees',
      'Dive planning materials'
    ],
    requirements: [
      'PADI Open Water Diver certification',
      'Or qualifying certification from another agency',
      'Good health and fitness',
      'Recent diving experience recommended'
    ],
    whatYouLearn: [
      'Deep diving techniques and planning',
      'Underwater navigation with compass',
      'Peak performance buoyancy',
      'Wreck diving basics',
      'Night diving procedures'
    ],
    schedule: [
      { day: 'Day 1', activities: 'Orientation, Deep Adventure Dive, Navigation Adventure Dive' },
      { day: 'Day 2', activities: 'Two elective Adventure Dives (e.g., Wreck, Peak Performance Buoyancy)' },
      { day: 'Day 3', activities: 'Final Adventure Dive (e.g., Night Dive), certification!' }
    ]
  },
  'rescue-diver': {
    title: 'PADI Rescue Diver',
    category: 'Advanced',
    description: 'The PADI Rescue Diver course prepares you to deal with dive emergencies, minor and major, using a variety of techniques.',
    image: 'https://images.unsplash.com/photo-1559827083-d7f12a4cbe2f?q=80&w=1200',
    duration: '4 days',
    price: '₹32,000',
    depth: 'Various depths',
    age: 'Minimum 12 years old',
    included: [
      'PADI eLearning materials',
      'Pool and open water sessions',
      'Emergency scenarios training',
      'All equipment rental',
      'PADI certification fees',
      'Pocket mask',
      'Emergency action plan slate'
    ],
    requirements: [
      'PADI Adventure Diver/Junior Adventure Diver',
      'Emergency First Response training (within 24 months)',
      'Good physical fitness',
      'Strong swimming skills'
    ],
    whatYouLearn: [
      'Self-rescue techniques',
      'Recognizing and managing stress in other divers',
      'Emergency management and equipment',
      'Rescuing panicked divers',
      'Rescuing unresponsive divers'
    ],
    schedule: [
      { day: 'Day 1', activities: 'Theory, self-rescue exercises, tired diver scenarios' },
      { day: 'Day 2', activities: 'Panicked diver scenarios, underwater problems, missing diver procedures' },
      { day: 'Day 3', activities: 'Unresponsive diver scenarios, surfacing techniques, shore scenarios' },
      { day: 'Day 4', activities: 'Open water scenarios, final assessment, certification!' }
    ]
  }
}

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = courseDetails[params.slug as keyof typeof courseDetails]
  
  if (!course) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative container-custom h-full flex items-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <div className="flex items-center space-x-2 text-sm mb-2">
              <Link href="/courses" className="hover:text-aqua-cyan transition-colors">
                Courses
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>{course.category}</span>
            </div>
            <h1 className="text-5xl font-heading font-bold mb-4">{course.title}</h1>
            <p className="text-xl max-w-2xl">{course.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Course Info Bar */}
      <section className="bg-primary-blue text-white py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">{course.duration}</p>
              <p className="text-sm opacity-80">Duration</p>
            </div>
            <div className="text-center">
              <Waves className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">{course.depth}</p>
              <p className="text-sm opacity-80">Maximum Depth</p>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">{course.age}</p>
              <p className="text-sm opacity-80">Age Requirement</p>
            </div>
            <div className="text-center">
              <Award className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">{course.price}</p>
              <p className="text-sm opacity-80">Course Price</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Course Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6">Course Schedule</h2>
                <div className="space-y-4">
                  {course.schedule.map((day, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-20 flex-shrink-0">
                        <div className="bg-coral-orange text-white rounded-lg p-2 text-center">
                          <p className="font-semibold">{day.day}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{day.activities}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6">Requirements</h2>
                <div className="bg-sand-beige/30 rounded-lg p-6">
                  <ul className="space-y-3">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-coral-orange mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{req}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-6 sticky top-28"
              >
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-4xl font-bold text-primary-blue">{course.price}</p>
                </div>

                <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                <ul className="space-y-2 mb-6">
                  {course.included.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className="btn-primary w-full text-center block mb-3"
                >
                  Book This Course
                </Link>
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  className="btn-secondary w-full text-center block"
                >
                  WhatsApp Inquiry
                </a>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Limited seats available. Book early to secure your spot!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20 bg-sand-beige/20">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Add related courses here */}
          </div>
        </div>
      </section>
    </div>
  )
} 