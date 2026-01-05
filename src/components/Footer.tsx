import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  menu: [
    { name: 'Jasa Kami', href: '#services' },
    { name: 'Produk Digital', href: '#products' },
    { name: 'Portofolio', href: '#showreel' },
    { name: 'Hubungi Kami', href: 'https://wa.me/6287877066270', external: true },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  socials: [
    { name: 'Instagram', href: 'https://www.instagram.com/ikhsanztechstudio', icon: Instagram },
    {
      name: 'TikTok', href: 'https://www.tiktok.com/@ikhsanztechstudio', icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      )
    },
    { name: 'YouTube', href: 'https://www.youtube.com/c/IkhsanzTech', icon: Youtube },
    {
      name: 'Facebook', href: 'https://www.facebook.com/share/1DRyCeDUHj/?mibextid=wwXIfr', icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="section-fade-top relative pt-20 pb-8 overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-zinc-900/60 to-zinc-900/40 backdrop-blur-xl border-t border-white/10" />

      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-purple-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >

              <span className="text-xl font-bold font-sora text-white">
                IkhsanzTech
              </span>
              <span className="text-white/60 font-light text-xs align-top">®</span>
            </motion.a>
            <p className="text-white/60 text-sm max-w-md leading-relaxed mb-6">Ikhsanztech-studio adalah agensi kreatif dan AI Design Specialist dengan pengalaman lebih dari 5 tahun di industri kreatif digital, khususnya dalam pengembangan konten YouTube melalui channel Ikhsanz Tech. Kami berfokus pada layanan editing video dan pembuatan konten berbasis teknologi Artificial Intelligence.</p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a href="mailto:mnurikhsanbusiness@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                mnurikhsanbusiness@gmail.com
              </a>
              <a href="tel:+6287877066270" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +62 878-7706-6270
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />Jakarta Selatan, Indonesia</div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-sora font-semibold text-white mb-4">Menu</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-sora font-semibold text-white mb-4">Media Social</h4>
            <div className="flex gap-4">
              {footerLinks.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="mt-8">
              <h4 className="font-sora font-semibold text-white mb-4">Legal</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex items-center justify-center">
            <p className="text-white/40 text-xs">
              © 2026 Ikhsanztech-studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
