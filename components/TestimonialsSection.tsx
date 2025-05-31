'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    course: 'Open Water Diver',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    text: 'Amazing experience! The instructors were patient and made me feel safe throughout the course. I never thought I could overcome my fear of water, but here I am - a certified diver!'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    course: 'Advanced Open Water',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    text: 'Professional training with top-notch equipment. The deep dive and navigation training were particularly exciting. ScubaDiveIn has the best instructors in India!'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    course: 'Rescue Diver',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
    text: 'The rescue diver course was challenging but incredibly rewarding. I feel confident in my abilities to help others now. Thank you for this life-changing experience!'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    course: 'Divemaster',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
    text: 'Becoming a Divemaster with ScubaDiveIn was the best decision. The zero to hero program is comprehensive and the internship opportunities are excellent.'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    course: 'Open Water Diver',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150',
    text: 'Small group sizes meant personalized attention. The theory was explained clearly and the practical sessions were fun. Highly recommend for beginners!'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-sand-beige/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What Our <span className="gradient-text">Divers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of happy divers who have started their underwater journey with us
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-primary-blue',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-coral-orange'
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonials-swiper !pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg h-full"
                >
                  <Quote className="w-10 h-10 text-coral-orange/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-coral-orange text-coral-orange" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.course}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Styles */}
        <style jsx global>{`
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            color: #0077B6;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .testimonials-swiper .swiper-button-next:after,
          .testimonials-swiper .swiper-button-prev:after {
            font-size: 20px;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            opacity: 0.5;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `}</style>
      </div>
    </section>
  )
} 