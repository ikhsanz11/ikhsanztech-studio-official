import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    MessageCircle,
    Upload,
    Clapperboard,
    Send,
    ClipboardCheck,
    CheckCircle2,
    Check
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { handleWhatsAppClick } from '../utils/gtag';

const workflowSteps = [
    { id: 1, title: 'Jelaskan konsep & berikan referensi jika ada', icon: MessageCircle },
    { id: 2, title: 'Kirim file/bahan (GoogleDrive/Dropbox)', icon: Upload },
    { id: 3, title: 'Pengerjaan project video', icon: Clapperboard },
    { id: 4, title: 'Mengirimkan hasil video', icon: Send },
    { id: 5, title: 'Peninjauan dan Revisi', icon: ClipboardCheck },
    { id: 6, title: 'Selesai :)', icon: CheckCircle2 },
];

const features = [
    'Durasi Max 5 Min (Kualitas Tinggi)',
    'Full 4K HD Result',
    'Format .MP4 (Universal)',
    'Desain Modern & Sesuai Tren',
    'Musik Bebas Copyright',
    'Revisi GRATIS & Konsultasi GRATIS',
];

const sliderImages = [
    { src: '/jasa-motion-graphic.png', alt: 'Jasa Editing Video Animasi | Motion Graphic - Thumbnail' },
    { src: '/showcase/motion-graphic/Artboard 46.png', alt: 'Motion Graphic Showcase 1' },
    { src: '/showcase/motion-graphic/Artboard 47.png', alt: 'Motion Graphic Showcase 2' },
    { src: '/showcase/motion-graphic/Artboard 48.png', alt: 'Motion Graphic Showcase 3' },
    { src: '/showcase/motion-graphic/Artboard 49.png', alt: 'Motion Graphic Showcase 4' },
    { src: '/showcase/motion-graphic/Artboard 50.png', alt: 'Motion Graphic Showcase 5' },
    { src: '/showcase/motion-graphic/Artboard 51.png', alt: 'Motion Graphic Showcase 6' },
    { src: '/showcase/motion-graphic/Artboard 52.png', alt: 'Motion Graphic Showcase 7' },
    { src: '/showcase/motion-graphic/Artboard 53.png', alt: 'Motion Graphic Showcase 8' },
];

export function MotionGraphicPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState(0);

    const goToPrevSlide = () => {
        setSlideDirection(-1);
        setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setSlideDirection(1);
        setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setSlideDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    return (
        <div className="min-h-screen text-white overflow-x-hidden">
            <div className="global-fixed-bg" />
            <div className="relative z-10">
                <Header />

                {/* Fixed Back Button */}
                <Link
                    to="/"
                    className="fixed top-[72px] sm:top-20 left-4 sm:left-6 z-50 inline-flex items-center gap-1.5 sm:gap-2 text-white/90 text-xs sm:text-sm font-medium hover:text-white transition-colors bg-black/60 backdrop-blur-sm px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/10 hover:bg-black/80"
                >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Kembali</span>
                </Link>

                <section className="pt-32 sm:pt-28 pb-16 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Header with Image */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12 sm:mb-16"
                        >
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                {/* Service Image Slider */}
                                <div className="w-full max-w-[320px] sm:max-w-md lg:max-w-none lg:w-1/2 mx-auto lg:mx-0">
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40">
                                        {/* Slider Container */}
                                        <div className="relative aspect-square overflow-hidden">
                                            <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                                                <motion.img
                                                    key={currentSlide}
                                                    src={sliderImages[currentSlide].src}
                                                    alt={sliderImages[currentSlide].alt}
                                                    custom={slideDirection}
                                                    initial={{ opacity: 0, x: slideDirection > 0 ? 100 : -100 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: slideDirection > 0 ? -100 : 100 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="absolute inset-0 w-full h-full object-contain"
                                                />
                                            </AnimatePresence>
                                        </div>

                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={goToPrevSlide}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-all duration-300 z-10 group"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                                        </button>
                                        <button
                                            onClick={goToNextSlide}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-all duration-300 z-10 group"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                                        </button>

                                        {/* Dot Indicators */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                                            {sliderImages.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => goToSlide(index)}
                                                    className={`rounded-full transition-all duration-300 ${
                                                        index === currentSlide
                                                            ? 'bg-white w-5 h-2'
                                                            : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                                                    }`}
                                                    aria-label={`Go to slide ${index + 1}`}
                                                />
                                            ))}
                                        </div>

                                        {/* Slide Counter */}
                                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white/80 text-xs font-medium z-10">
                                            {currentSlide + 1} / {sliderImages.length}
                                        </div>
                                    </div>
                                </div>

                                {/* Title & Package Info */}
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                                        Jasa Editing Video Animasi | Motion Graphic
                                    </h1>
                                    <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-xl p-6">
                                        <p className="text-white font-bold text-xl sm:text-2xl mb-2">
                                            Premium Package
                                        </p>
                                        <p className="text-white font-bold text-lg">
                                            Waktu Pengerjaan: 1 Hari
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Workflow Steps */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                                Langkah Pekerjaan
                            </h2>

                            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {workflowSteps.map((step, index) => {
                                        const Icon = step.icon;
                                        return (
                                            <motion.div
                                                key={step.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                className="flex items-center gap-4 p-4 rounded-xl border border-white/10"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <span className="text-white/50 text-xs font-medium">Step {step.id}</span>
                                                    <p className="text-white text-sm font-medium">{step.title}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Features Checklist */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                                Fitur Termasuk
                            </h2>

                            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + index * 0.05 }}
                                            className="flex items-center gap-3 p-3 rounded-xl border border-white/10"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-white text-sm font-medium">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-white/60 text-sm sm:text-base mb-4">
                                Tertarik? Langsung Chat ya
                            </p>
                            <motion.button
                                onClick={() => handleWhatsAppClick('https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio%2C%20saya%20ingin%20konsultasi%20mengenai%20Jasa%20Video%20Animasi%20%26%20Motion%20Graphic%20Premium.')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Hubungi via WhatsApp
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
