'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Users, Award, MapPin, Star } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Happy Divers',
    color: 'text-primary-blue'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-coral-orange'
  },
  {
    icon: MapPin,
    value: 25,
    suffix: '+',
    label: 'Dive Sites',
    color: 'text-aqua-cyan'
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'Rating',
    color: 'text-deep-ocean'
  }
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toFixed(value % 1 !== 0 ? 1 : 0)}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-ocean text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-aqua-cyan/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-float-delay-1" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Journey in Numbers
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Trusted by thousands of divers to begin their underwater adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-4 ${stat.color}`}>
                  <Icon className="w-10 h-10" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 