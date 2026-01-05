import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { label: 'AI Content', href: '/portofolio/ai-content' },
  { label: 'Editing Short, Reels & TikTok', href: '/portofolio/editing-shorts' },
  { label: 'Ads Video Commercial', href: '/portofolio/ads-video' },
];

export function ShowreelSection() {
  return (
    <section id="portofolio" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">PORTOFOLIO
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Lihat hasil karya terbaik kami dalam editing video, motion graphics, dan konten kreatif
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.3)] border border-white/10"
        >
          {/* Portfolio Image */}
          <img
            src="/portfolio-main.jpg"
            alt="IkhsanzTech Studio Portfolio"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />

          {/* Subtle overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />

          {/* Label */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="text-white/80 font-medium text-sm">
              IkhsanzTech Studio Showreel 2026
            </div>
          </div>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.href}
              className="font-bold text-lg text-white bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 hover:bg-zinc-800/60 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              {category.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
