'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Diving Sites in India Every Diver Must Explore',
    excerpt: 'From the crystal-clear waters of Andaman to the vibrant reefs of Lakshadweep, discover the best diving destinations India has to offer.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800',
    author: 'Captain Rajesh Kumar',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Destinations',
    slug: 'top-10-diving-sites-india'
  },
  {
    id: 2,
    title: 'Essential Gear Guide for Beginner Divers',
    excerpt: 'Everything you need to know about scuba diving equipment, from masks to fins, and how to choose the right gear for your needs.',
    image: 'https://images.unsplash.com/photo-1559827083-d8e2604c2a51?q=80&w=800',
    author: 'Sarah Thompson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Gear Guide',
    slug: 'essential-gear-guide-beginners'
  },
  {
    id: 3,
    title: 'Understanding Decompression Sickness: Prevention and Safety',
    excerpt: 'Learn about the causes, symptoms, and most importantly, how to prevent decompression sickness while diving.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800',
    author: 'Dr. Amit Patel',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Safety',
    slug: 'understanding-decompression-sickness'
  },
  {
    id: 4,
    title: 'Marine Life Photography: Tips for Underwater Photographers',
    excerpt: 'Master the art of underwater photography with these pro tips on camera settings, composition, and marine life behavior.',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800',
    author: 'Priya Sharma',
    date: '2023-12-28',
    readTime: '12 min read',
    category: 'Photography',
    slug: 'marine-life-photography-tips'
  },
  {
    id: 5,
    title: 'From Open Water to Divemaster: Your Career Path in Diving',
    excerpt: 'A comprehensive guide to advancing your diving certifications and turning your passion into a professional career.',
    image: 'https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=800',
    author: 'Captain Rajesh Kumar',
    date: '2023-12-20',
    readTime: '15 min read',
    category: 'Career',
    slug: 'open-water-to-divemaster-career'
  },
  {
    id: 6,
    title: 'Night Diving: Exploring the Underwater World After Dark',
    excerpt: 'Discover the magic of night diving, what makes it special, and essential safety tips for your first nocturnal underwater adventure.',
    image: 'https://images.unsplash.com/photo-1559827283-7c9bcc09de42?q=80&w=800',
    author: 'Amit Patel',
    date: '2023-12-15',
    readTime: '7 min read',
    category: 'Adventure',
    slug: 'night-diving-guide'
  }
]

const categories = ['All', 'Destinations', 'Gear Guide', 'Safety', 'Photography', 'Career', 'Adventure']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

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
              Dive Blog
            </h1>
            <p className="text-xl text-gray-100">
              Insights, tips, and stories from the underwater world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-sand-beige/20">
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

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-coral-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-heading font-bold mb-3 hover:text-primary-blue transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Date and Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-blue hover:text-deep-ocean font-semibold flex items-center group/link"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Stay Updated with Diving News
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Subscribe to our newsletter for the latest diving tips, destinations, and special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800"
                required
              />
              <button
                type="submit"
                className="btn-secondary"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 