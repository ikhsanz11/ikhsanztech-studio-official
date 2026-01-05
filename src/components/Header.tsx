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
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/10"
              >
                <div className="px-6 py-4 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-white/80 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="https://wa.me/message/3VBAYSQKPXSYB1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white font-bold text-sm mt-2 py-3 text-center rounded-full border border-white/10"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
