import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Jasa Kami', href: '/jasa-kami' },
  { name: 'Produk Digital', href: '/produk-digital' },
  { name: 'Portofolio', href: '/portofolio' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 rounded-full bg-gradient-to-br from-white/10 via-zinc-900/50 to-black/40 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <nav className="flex items-center justify-between px-4 sm:px-8 py-4">
              {/* Logo */}
              <motion.a
                href="/"
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-white font-bold font-sora text-lg">Ikhsanztech-studio.</span>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-10">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://wa.me/message/3VBAYSQKPXSYB1"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-black text-white font-bold text-sm px-6 py-2.5 rounded-full border border-white/10 hover:bg-zinc-900 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Hubungi Kami</motion.a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative h-full flex flex-col"
            >
              {/* Close Button - Top Right */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Centered Menu Items */}
              <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="text-white text-2xl font-semibold hover:text-purple-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/message/3VBAYSQKPXSYB1"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-6 bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-white/90 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hubungi Kami
                </motion.a>
              </div>

              {/* Bottom Branding */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center pb-8"
              >
                <span className="text-white/40 text-sm">Ikhsanztech-studio.</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
