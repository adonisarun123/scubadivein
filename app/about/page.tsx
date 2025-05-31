'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Target, History } from 'lucide-react'

const teamMembers = [
  {
    name: 'Captain Rajesh Kumar',
    role: 'Founder & Chief Instructor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
    certifications: 'PADI Master Instructor, EFR Instructor',
    experience: '20+ years'
  },
  {
    name: 'Sarah Thompson',
    role: 'Senior Dive Instructor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    certifications: 'PADI IDC Staff Instructor',
    experience: '15+ years'
  },
  {
    name: 'Amit Patel',
    role: 'Dive Master & Guide',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
    certifications: 'PADI Divemaster, Rescue Diver',
    experience: '8+ years'
  },
  {
    name: 'Priya Sharma',
    role: 'Marine Biologist & Instructor',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400',
    certifications: 'PADI Open Water Instructor, Marine Biology Degree',
    experience: '10+ years'
  }
]

const milestones = [
  { year: '2008', event: 'ScubaDiveIn founded with a vision to make diving accessible to all Indians' },
  { year: '2010', event: 'Became PADI 5 Star Dive Center' },
  { year: '2015', event: 'Expanded operations to Andaman Islands' },
  { year: '2018', event: 'Launched Zero to Hero career program' },
  { year: '2020', event: 'Introduced virtual reality training for theory classes' },
  { year: '2023', event: 'Certified our 5000th diver' }
]

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About ScubaDiveIn</h1>
            <p className="text-xl text-gray-100">
              Your trusted partner in underwater exploration since 2008
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2008 by Captain Rajesh Kumar, ScubaDiveIn was born from a passion to share 
                the wonders of the underwater world with fellow Indians. What started as a small diving 
                school in Bangalore has grown into one of India's most respected PADI dive centers.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe that everyone should have the opportunity to experience the magic of scuba diving. 
                Our mission is to provide world-class diving education that's accessible, safe, and enjoyable 
                for people from all walks of life.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be a PADI 5 Star Dive Center with operations in multiple locations, 
                having certified over 5,000 divers and continuing to grow our diving community every day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800"
                alt="Divers exploring underwater"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-coral-orange text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div>Years of Excellence</div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-blue text-white rounded-full mb-4">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To make world-class diving education accessible to all Indians while maintaining 
                the highest standards of safety and professionalism.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-coral-orange text-white rounded-full mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be India's leading dive education center, inspiring a new generation of divers 
                to explore and protect our oceans.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-aqua-cyan text-white rounded-full mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Safety, integrity, passion, and environmental responsibility guide everything we do 
                at ScubaDiveIn.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-sand-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped who we are today</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h3 className="text-xl font-semibold text-primary-blue mb-2">{milestone.year}</h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-coral-orange rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-coral-orange/20 rounded-full"></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="instructors" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Expert instructors passionate about diving</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-aqua-cyan">{member.role}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-1">{member.certifications}</p>
                  <p className="font-semibold">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Join Our Diving Family?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your diving journey with instructors who care about your success
            </p>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 