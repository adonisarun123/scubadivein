import Link from 'next/link'
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  courses: [
    { name: 'Open Water Diver', href: '/courses/open-water-diver' },
    { name: 'Advanced Open Water', href: '/courses/advanced-open-water' },
    { name: 'Rescue Diver', href: '/courses/rescue-diver' },
    { name: 'Divemaster', href: '/courses/divemaster' },
    { name: 'Zero to Hero Program', href: '/zero-to-hero' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Instructors', href: '/about#instructors' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'FAQs', href: '/faqs' },
    { name: 'Booking Policy', href: '/booking-policy' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/scubadivein' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/scubadivein' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/scubadivein' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/scubadivein' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-ocean text-white relative">
      {/* Wave SVG */}
      <div className="relative w-full -mb-px">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] lg:h-[80px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <span className="text-deep-ocean font-bold text-xl">SDI</span>
              </div>
              <span className="font-heading font-bold text-3xl">ScubaDiveIn</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm">
              Your journey to becoming a certified diver starts here. Join India's premier PADI dive center and explore the underwater world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-aqua-cyan transition-colors group"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Courses Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-aqua-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-aqua-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+91XXXXXXXXXX" className="flex items-start space-x-3 text-gray-300 hover:text-aqua-cyan transition-colors">
                  <Phone className="w-5 h-5 mt-0.5" />
                  <span>+91-XXXXX-XXXXX</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@scubadivein.in" className="flex items-start space-x-3 text-gray-300 hover:text-aqua-cyan transition-colors">
                  <Mail className="w-5 h-5 mt-0.5" />
                  <span>info@scubadivein.in</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ScubaDiveIn. All rights reserved. PADI Dive Center #XXXXX
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-aqua-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-aqua-cyan transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PADI Certification Badge */}
      <div className="bg-deep-ocean/50 py-4">
        <div className="container-custom flex justify-center">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Certified</span>
            <div className="w-16 h-8 bg-white/10 rounded flex items-center justify-center">
              <span className="font-bold text-white">PADI</span>
            </div>
            <span>Dive Center</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 