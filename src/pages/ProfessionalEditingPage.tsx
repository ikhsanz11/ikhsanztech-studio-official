import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft,
    MessageCircle,
    Upload,
    Clapperboard,
    Send,
    ClipboardCheck,
    CheckCircle2,
    Check,
    Play,
    Film,
    Megaphone,
    Building2
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { handleWhatsAppClick } from '../utils/gtag';

const workflowSteps = [
    { id: 1, title: 'Konsultasi Konsep & Keinginan', icon: MessageCircle },
    { id: 2, title: 'Pengiriman File (Google Drive/Dropbox)', icon: Upload },
    { id: 3, title: 'Proses Editing', icon: Clapperboard },
    { id: 4, title: 'Pengiriman Hasil Draft', icon: Send },
    { id: 5, title: 'Peninjauan & Revisi', icon: ClipboardCheck },
    { id: 6, title: 'Selesai (Final Delivery)', icon: CheckCircle2 },
];

const services = [
    {
        title: 'Editing Video TikTok & Reels',
        description: 'Optimasi algoritma dengan hook yang kuat dalam 3 detik pertama.',
        icon: Play
    },
    {
        title: 'Konten YouTube Profesional',
        description: 'Editing vlog, tutorial, hingga dokumenter dengan color grading cinematic.',
        icon: Film
    },
    {
        title: 'Video Iklan & Promosi (Ads)',
        description: 'Didesain khusus untuk meningkatkan penjualan produk UMKM maupun perusahaan besar.',
        icon: Megaphone
    },
    {
        title: 'Company Profile & Event',
        description: 'Dokumentasi formal dengan sentuhan kreatif yang elegan.',
        icon: Building2
    },
];

const features = [
    'Color Grading Cinematic',
    'Animation Text Premium',
    'Sound Design (No Copyright)',
    'Smooth Transition',
    'Motion Graphics',
    'Full HD hingga 4K',
    'Free Revision',
    'Storytelling Optimization',
];

export function ProfessionalEditingPage() {
    return (
        <div className="min-h-screen text-white overflow-x-hidden">
            <Helmet>
                <title>Jasa Editing Video Profesional – Ubah Konten Jadi Viral | Ikhsanztech</title>
                <meta name="description" content="Cari jasa editing video di Makassar? Ikhsanztech Studio melayani edit video TikTok, Reels, YouTube, dan Company Profile dengan kualitas cinematic & cepat." />
                <meta name="keywords" content="Jasa Editing Video, Editing Video Profesional, Edit Video TikTok, Edit Video Reels, Edit Video YouTube, Company Profile, Makassar" />
            </Helmet>
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
                                {/* Service Image */}
                                <div className="w-full lg:w-1/2">
                                    <div className="rounded-2xl overflow-hidden border border-white/10">
                                        <img
                                            src="https://public.youware.com/image/2a04eada-ee4d-4120-a594-9df842714760/328tkfbx3q.png"
                                            alt="Jasa Editing Video Profesional di Makassar"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Title & Package Info */}
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                        Jasa Editing Video Profesional – Ubah Konten Jadi Viral
                                    </h1>
                                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                        <p className="text-white font-bold text-xl sm:text-2xl mb-2">
                                            LONG VIDEO (3-5 Minute)
                                        </p>
                                        <p className="text-white font-bold text-lg">
                                            Waktu Pengerjaan: 1 Hari
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Description Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-12 sm:mb-16"
                        >
                            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                                    Di era visual 2026, video bukan sekadar gambar bergerak, melainkan <strong className="text-white">identitas bisnis Anda</strong>. Ikhsanztech Studio hadir sebagai solusi jasa editing video yang fokus pada <strong className="text-white">konversi dan estetika</strong>. Kami memahami bahwa setiap platform memiliki bahasa visual yang berbeda.
                                </p>
                                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                    Dengan pengalaman lebih dari <strong className="text-white">5 tahun di industri kreatif</strong>, kami tidak hanya mengedit, tapi juga membantu Anda dalam aspek storytelling. Kami menggunakan perangkat software terbaru untuk memastikan render berkualitas tinggi (<strong className="text-white">Full HD hingga 4K</strong>) dengan durasi pengerjaan yang cepat.
                                </p>
                            </div>
                        </motion.div>

                        {/* Services We Offer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                                Layanan Editing Video Profesional
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {services.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.div
                                            key={service.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
                                                    <p className="text-white/60 text-sm">{service.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Workflow Steps */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                                Langkah Pekerjaan
                            </h2>

                            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {workflowSteps.map((step, index) => {
                                        const Icon = step.icon;
                                        return (
                                            <motion.div
                                                key={step.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
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
                            transition={{ delay: 0.4 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                                Fitur Termasuk
                            </h2>

                            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 + index * 0.05 }}
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
                                Ingin Video Lebih Panjang? Langsung Chat ya
                            </p>
                            <motion.button
                                onClick={() => handleWhatsAppClick('https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio%2C%20saya%20tertarik%20dengan%20jasa%20Editing%20Video%20Profesional%20(Long%20Video).%20Bisa%20bantu%20saya%20untuk%20konsultasi%20konsepnya%3F')}
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
