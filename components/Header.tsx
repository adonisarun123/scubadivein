'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Courses',
    href: '/courses',
    dropdown: [
      { name: 'Open Water Diver', href: '/courses/open-water-diver' },
      { name: 'Advanced Open Water', href: '/courses/advanced-open-water' },
      { name: 'Rescue Diver', href: '/courses/rescue-diver' },
      { name: 'Divemaster', href: '/courses/divemaster' },
      { name: 'All Courses', href: '/courses' },
    ]
  },
  { name: 'Zero to Hero', href: '/zero-to-hero' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SDI</span>
            </div>
            <span className="font-heading font-bold text-2xl gradient-text">ScubaDiveIn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="text-gray-700 hover:text-primary-blue font-medium transition-colors">
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-sand-beige hover:text-primary-blue transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-blue font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center space-x-2 text-primary-blue hover:text-deep-ocean transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Us</span>
            </a>
            <Link href="/courses" className="btn-primary">
              Get Certified
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-sand-beige hover:text-primary-blue rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-blue transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4 space-y-3">
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="flex items-center justify-center space-x-2 p-3 bg-sand-beige text-primary-blue rounded-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Call Us</span>
                  </a>
                  <Link
                    href="/courses"
                    className="block text-center btn-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Certified
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 