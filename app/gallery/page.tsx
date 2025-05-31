'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryCategories = [
  'All',
  'Underwater Life',
  'Training Sessions',
  'Dive Sites',
  'Our Team',
  'Equipment'
]

const galleryItems = [
  {
    id: 1,
    type: 'image',
    category: 'Underwater Life',
    title: 'Coral Garden',
    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=400'
  },
  {
    id: 2,
    type: 'image',
    category: 'Underwater Life',
    title: 'Sea Turtle Encounter',
    src: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=400'
  },
  {
    id: 3,
    type: 'image',
    category: 'Training Sessions',
    title: 'Pool Training',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400'
  },
  {
    id: 4,
    type: 'video',
    category: 'Dive Sites',
    title: 'Andaman Diving',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400',
    videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video ID
  },
  {
    id: 5,
    type: 'image',
    category: 'Our Team',
    title: 'Instructor Team',
    src: 'https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=400'
  },
  {
    id: 6,
    type: 'image',
    category: 'Equipment',
    title: 'Dive Gear Setup',
    src: 'https://images.unsplash.com/photo-1559827083-d8e2604c2a51?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1559827083-d8e2604c2a51?q=80&w=400'
  },
  {
    id: 7,
    type: 'image',
    category: 'Underwater Life',
    title: 'Manta Ray',
    src: 'https://images.unsplash.com/photo-1559827283-7c9bcc09de42?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1559827283-7c9bcc09de42?q=80&w=400'
  },
  {
    id: 8,
    type: 'image',
    category: 'Training Sessions',
    title: 'Open Water Training',
    src: 'https://images.unsplash.com/photo-1586508577428-120d21d3ca2e?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1586508577428-120d21d3ca2e?q=80&w=400'
  },
  {
    id: 9,
    type: 'image',
    category: 'Dive Sites',
    title: 'Wreck Diving',
    src: 'https://images.unsplash.com/photo-1559827083-a4b87734aed8?q=80&w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1559827083-a4b87734aed8?q=80&w=400'
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (item: any, index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length
    
    setCurrentIndex(newIndex)
    setSelectedItem(filteredItems[newIndex])
  }

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
              Gallery
            </h1>
            <p className="text-xl text-gray-100">
              Dive into our collection of underwater adventures and training moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-sand-beige/20 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(item, index)}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.category}</p>
                    </div>
                  </div>

                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <Play className="w-8 h-8 text-primary-blue ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Content */}
          <div className="max-w-6xl max-h-[90vh] relative">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[90vh] object-contain"
              />
            ) : (
              <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedItem.videoId}?autoplay=1`}
                  className="w-full h-[70vh]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-2xl font-semibold">{selectedItem.title}</h3>
              <p className="text-gray-300">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Create Your Own Memories
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Join us for an unforgettable diving experience and be part of our gallery
            </p>
            <a href="/courses" className="btn-secondary">
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 