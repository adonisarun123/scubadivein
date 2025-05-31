'use client'

import HeroSection from '@/components/HeroSection'
import CourseSection from '@/components/CourseSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import StatsSection from '@/components/StatsSection'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CourseSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  )
} 