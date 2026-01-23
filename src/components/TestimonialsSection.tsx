import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Content Creator',
    content: 'IkhsanzTech membantu konten saya viral! Views naik 300% dalam sebulan.',
    avatar: 'AP',
  },
  {
    name: 'Dewi Susanti',
    role: 'Business Owner',
    content: 'Editing video profesional dan cepat. Sangat recommended untuk bisnis!',
    avatar: 'DS',
  },
  {
    name: 'Rizky Maulana',
    role: 'Digital Marketer',
    content: 'AI tools mereka luar biasa. Produktivitas tim meningkat drastis.',
    avatar: 'RM',
  },
  {
    name: 'Sari Indah',
    role: 'Influencer',
    content: 'Kualitas motion graphics yang premium dengan harga terjangkau.',
    avatar: 'SI',
  },
  {
    name: 'Budi Santoso',
    role: 'Startup Founder',
    content: 'Partner terbaik untuk branding dan konten digital. Highly professional!',
    avatar: 'BS',
  },
  {
    name: 'Maya Putri',
    role: 'E-commerce Owner',
    content: 'Video ads dari IkhsanzTech meningkatkan conversion rate 150%!',
    avatar: 'MP',
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-card p-4 min-w-[260px] mx-3 flex flex-col gap-3">
      {/* Quote */}
      <p className="text-white text-sm leading-relaxed italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-medium text-white text-sm">{testimonial.name}</div>
          <div className="text-white/60 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-fade-bottom relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 tracking-wide">
            TESTIMONI
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Testimoni dari klien yang telah merasakan dampak positif kerjasama dengan kami
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
