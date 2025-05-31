'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, TrendingUp, Briefcase, Award, ChevronRight, CheckCircle, Calendar, Users } from 'lucide-react'

const programPhases = [
  {
    phase: 'Phase 1',
    title: 'Open Water Diver',
    duration: '4 days',
    description: 'Begin your journey with the world\'s most popular diving certification.',
    skills: ['Basic dive theory', 'Equipment usage', 'Underwater skills', 'Safety procedures']
  },
  {
    phase: 'Phase 2',
    title: 'Advanced Open Water',
    duration: '3 days',
    description: 'Expand your skills with adventure dives including deep and navigation.',
    skills: ['Deep diving', 'Underwater navigation', 'Peak performance buoyancy', 'Specialty dives']
  },
  {
    phase: 'Phase 3',
    title: 'Rescue Diver + EFR',
    duration: '5 days',
    description: 'Learn to prevent and manage emergencies with confidence.',
    skills: ['Emergency management', 'Rescue techniques', 'First aid & CPR', 'Stress management']
  },
  {
    phase: 'Phase 4',
    title: 'Divemaster',
    duration: '6-8 weeks',
    description: 'Transform into a dive professional and start your career.',
    skills: ['Leading dives', 'Assisting instructors', 'Dive center operations', 'Professional skills']
  },
  {
    phase: 'Phase 5',
    title: 'Internship',
    duration: '4 weeks',
    description: 'Gain real-world experience working at our dive center.',
    skills: ['Customer service', 'Dive guiding', 'Equipment maintenance', 'Business operations']
  }
]

const benefits = [
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Open doors to diving careers worldwide with internationally recognized certifications'
  },
  {
    icon: Users,
    title: 'Small Group Training',
    description: 'Maximum 4 students per instructor ensures personalized attention and quality training'
  },
  {
    icon: TrendingUp,
    title: 'Fast Track Program',
    description: 'Go from zero experience to professional divemaster in just 6 months'
  },
  {
    icon: Award,
    title: 'Job Placement Support',
    description: 'We help connect our graduates with dive centers looking for qualified professionals'
  }
]

export default function ZeroToHeroPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2070"
            alt="Divemaster leading divers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean/90 to-primary-blue/70" />
        </div>

        <div className="relative container-custom text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Zero to Hero
            </h1>
            <p className="text-2xl mb-4">
              Transform Your Life in 6 Months
            </p>
            <p className="text-xl text-gray-100 mb-8">
              Go from complete beginner to professional PADI Divemaster. 
              Start a career that lets you work in paradise, travel the world, 
              and share your passion for the ocean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Apply Now
              </Link>
              <a href="#program-details" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-sand-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Your Path to <span className="gradient-text">Professional Diving</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive program takes you through every certification level, 
              preparing you for a successful career in the diving industry.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            {programPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < programPhases.length - 1 && (
                  <div className="absolute left-1/2 top-full h-20 w-0.5 bg-primary-blue/30 transform -translate-x-1/2" />
                )}

                <div className={`flex items-center mb-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className={`bg-white rounded-2xl shadow-lg p-8 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="flex items-center mb-4">
                        <span className="text-coral-orange font-bold text-lg mr-4">{phase.phase}</span>
                        <Clock className="w-5 h-5 text-gray-500 mr-2" />
                        <span className="text-gray-500">{phase.duration}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="program-details" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to succeed in your diving career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-ocean text-white rounded-full mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Investment & Details */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-6">
                Investment in Your Future
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">All certifications from Open Water to Divemaster</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">All course materials and equipment usage</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">4-week paid internship opportunity</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Job placement assistance</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Lifetime alumni support network</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="text-3xl font-bold mb-2">₹2,50,000</p>
                <p className="text-sm opacity-80">Complete program fee (Payment plans available)</p>
              </div>

              <Link href="/contact" className="btn-secondary inline-flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=1920"
                alt="Professional divemaster at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-coral-orange text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">95%</div>
                <div>Job Placement Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Do I need any prior diving experience?</h3>
              <p className="text-gray-600">
                No! Our Zero to Hero program is designed for complete beginners. We'll teach you everything 
                from scratch and guide you through each certification level.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">What are the job opportunities after completion?</h3>
              <p className="text-gray-600">
                As a PADI Divemaster, you can work at dive centers worldwide, lead fun dives, assist in courses, 
                work on liveaboards, or even start your own diving business. We also help with job placements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Can I work while doing the program?</h3>
              <p className="text-gray-600">
                The program is intensive and requires full-time commitment. However, during the internship phase, 
                you'll earn while gaining practical experience at our dive center.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sand-beige/20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Change Your Life?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Limited seats available for our next batch starting soon. 
              Apply now to secure your spot in this life-changing program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Apply for Zero to Hero
              </Link>
              <a href="tel:+91XXXXXXXXXX" className="btn-secondary text-lg px-8 py-4">
                Call to Discuss
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 