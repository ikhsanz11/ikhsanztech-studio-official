import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Video,
  Gamepad2,
  Play,
  Smartphone,
  Sparkles,
  Megaphone,
  Image,
  Mic,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Jasa Editing Video Profesional',
    subtitle: 'Jangan biarkan ide kontenmu tenggelam. Kami menyulap raw footage menjadi Ads Commercial, Explainer Video, dan Website Promo yang scroll-stopping.',
    highlight: 'Kenapa kami? Karena kamu butuh partner yang anti-ngaret, paham ritme visual, dan memberikan kualitas studio dengan harga yang masuk akal. Siap bikin brand-mu makin dilirik?"',
    image: 'https://public.youware.com/image/2a04eada-ee4d-4120-a594-9df842714760/328tkfbx3q.png',
    link: '/services/professional-editing',
    shortTitle: 'Video Pro',
  },
  {
    icon: Gamepad2,
    title: 'Jasa Edit Video Konten ADS Game / 3D Animation',
    subtitle: 'Ubah gameplay biasa atau aset 3D mentah menjadi iklan sinematik yang memukau. Kami meracik Game Ads & 3D Animation dengan transisi mulus dan efek visual yang bikin audiens betah menonton sampai habis.',
    highlight: 'Kombinasi editing berkualitas studio, harga bersahabat, dan pengiriman tepat waktu. Siap bikin kontenmu terlihat high-end?',
    image: 'https://public.youware.com/image/b737ca1f-7843-4aef-a844-6c8dfd94be17/1tyukzjspa.png',
    link: '/services/game-ads',
    shortTitle: 'Game Ads',
  },
  {
    icon: Play,
    title: 'Jasa Editing Video Animasi | Motion Graphic',
    subtitle: 'Punya info rumit atau produk baru? Sampaikan dengan cara asik lewat Motion Graphic. Kami mengubah pesan kaku menjadi animasi Explainer & Ads yang dinamis dan mudah dicerna.',
    highlight: 'Tak hanya estetik, kami pastikan flow videomu komunikatif, smooth, dan tepat waktu. Kualitas pro dengan harga yang tetap masuk akal.',
    image: 'https://public.youware.com/image/8e29a702-b6ad-474d-b415-7caf4b061cd4/dadwzo5va7.png',
    link: '/services/motion-graphic',
    shortTitle: 'Motion',
  },
  {
    icon: Smartphone,
    title: 'Membuat Konten Reels, TikTok, Short & Ads | Profesional & Berkualitas',
    subtitle: 'Video pendek itu soal 3 detik pertama. Kami meracik hook visual yang kuat agar audiens betah nonton sampai habis.',
    highlight: 'Apapun niche-nya—mulai dari Game, F&B (Kuliner), Properti, hingga Motion Flyer—kami ubah aset mentahmu menjadi konten yang engaging dan siap viral. Edit rapi, flow enak, dan pastinya tepat waktu.',
    image: 'https://public.youware.com/image/12ff9b38-6b05-4e37-a889-81f23d779018/j9xk7qwso2.png',
    link: '/services/shorts-content',
    shortTitle: 'Reels/TikTok',
  },
  {
    icon: Sparkles,
    title: 'Jasa Pembuatan Konten AI | Konsisten Character',
    subtitle: 'Ubah imajinasi liar menjadi visual nyata. Kami menggabungkan berbagai AI Tools canggih untuk menciptakan video dengan Konsistensi Karakter tingkat tinggi.',
    highlight: 'Lupakan video AI yang glitchy. Dapatkan visual yang mulus, narasi yang kuat, dan eksekusi super cepat untuk konten yang memukau audiens di detik pertama.',
    image: 'https://public.youware.com/image/68f5670c-baaa-4bc8-af11-37acaa7d70fe/rgzexzj724.png',
    link: '/services/ai-content-pro',
    shortTitle: 'AI Content',
  },
  {
    icon: Megaphone,
    title: 'Jasa Produksi Konten AI | Promosi & Iklan',
    subtitle: 'Tingkatkan kualitas konten Anda dengan visual yang memukau dan alur cerita yang memikat melalui AI Video Creation Service yang saya tawarkan.',
    highlight: 'Dengan memanfaatkan teknologi kecerdasan buatan terbaru, saya menciptakan video unik dan bergaya yang sempurna untuk kebutuhan iklan produk, otomotif, iklan fashion dan kebutuhan iklan apapun yang kalian inginkan.',
    image: 'https://public.youware.com/image/076719d5-6ebd-4892-a3e9-1b9c49993c54/c4e4rvvb0p.png',
    link: '/services/ai-ads-pro',
    shortTitle: 'AI Ads',
  },
  {
    icon: Image,
    title: 'Jasa Pembuatan Gambar AI | Konsisten Character',
    subtitle: 'Gambar AI dengan konsistensi karakter tinggi untuk branding.',
    highlight: 'Visual AI yang konsisten dan profesional untuk kebutuhan konten dan marketing.',
    image: 'https://public.youware.com/image/e666dbf2-3bd9-4051-b5fa-25024568cc38/u6x47u8xyt.png',
    link: '/services/ai-image-premium',
    shortTitle: 'AI Image',
  },
  {
    icon: Mic,
    title: 'Jasa Voice Over AI | Cloning Voice',
    subtitle: 'Voice cloning AI untuk narasi profesional dan personalisasi.',
    highlight: 'Suara AI yang natural dan profesional untuk berbagai kebutuhan konten.',
    image: 'https://public.youware.com/image/3f9a7885-8c1a-45d8-a3c4-1e5ddcc86fb7/9fwt1vueaz.png',
    link: '/services/ai-voice-cloning',
    shortTitle: 'AI Voice',
  },
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const currentService = services[currentIndex];
  const isReversed = currentIndex % 2 === 1;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="jasa-kami" ref={sectionRef} className="section-fade-bottom relative py-20 overflow-hidden">
      {/* Background gradient matching site theme */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-purple-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 tracking-wide">Jasa Kami</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Solusi kreatif lengkap untuk mengembangkan brand dan konten viral Anda
          </p>
        </motion.div>

        {/* ============================================
            MOBILE SMART GRID (Hidden on Desktop)
            ============================================ */}
        <div className="md:hidden">
          {/* 4x2 Grid Selector */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === currentIndex;
              return (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${isActive
                    ? 'bg-purple-600/30 border-2 border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                    : 'bg-zinc-900/40 border border-white/10 hover:border-white/30'
                    }`}
                >
                  <Icon className={`w-6 h-6 mb-1 ${isActive ? 'text-purple-400' : 'text-white/70'}`} />
                  <span className={`text-[10px] text-center leading-tight ${isActive ? 'text-white font-semibold' : 'text-white/60'}`}>
                    {service.shortTitle}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Category Labels */}
          <div className="flex justify-between text-xs text-white/50 mb-4 px-2">
            <span>Video Editing</span>
            <span>AI Services</span>
          </div>

          {/* Dynamic Description Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative rounded-xl overflow-hidden mb-4">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl" />
              </div>

              {/* Service Title */}
              <h3 className="font-sora text-base font-bold text-white mb-3 leading-snug">
                {currentService.title}
              </h3>

              {/* Full Description (NOT truncated) */}
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                {currentService.subtitle}
              </p>

              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {currentService.highlight}
              </p>

              {/* CTA Button */}
              <Link
                to={currentService.link}
                className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-gray-900 font-semibold px-5 py-3 rounded-full w-full transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Lihat Detail Layanan
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================
            DESKTOP LAYOUT (Hidden on Mobile)
            ============================================ */}
        <div className="hidden md:block">
          {/* Slide Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
          </div>

          {/* Service Slide */}
          <div className="relative min-h-[550px] lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden bg-zinc-900/40 backdrop-blur-md border border-white/10 p-2"
                  >
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-auto rounded-xl"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-2 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl pointer-events-none" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8">
                  <h3 className="font-sora text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide">
                    {currentService.title}
                  </h3>

                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light line-clamp-3">
                    {currentService.subtitle}
                  </p>

                  <p className="text-white font-normal text-sm sm:text-base leading-relaxed line-clamp-3">
                    {currentService.highlight}
                  </p>

                  {/* CTA Button */}
                  {currentService.link ? (
                    <Link
                      to={currentService.link}
                      className="inline-flex items-center gap-3 bg-white hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-gray-900 font-semibold px-6 py-4 rounded-full w-fit transition-all duration-500 mt-2 hover:scale-[1.03]"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      Lihat Detail Layanan
                    </Link>
                  ) : (
                    <motion.a
                      href="https://wa.me/6287877066270"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-white hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-gray-900 font-semibold px-6 py-4 rounded-full w-fit transition-all duration-500 mt-2"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Mulai Project Sekarang
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-8 text-white/40 text-sm">
            {currentIndex + 1} / {services.length}
          </div>
        </div>
      </div>
    </section>
  );
}
