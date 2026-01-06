import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft,
    FileText,
    Cpu,
    MessageSquare,
    Send,
    Check,
    Video,
    Sparkles,
    Zap
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const workflowSteps = [
    {
        id: 1,
        title: 'Berikan Brief Anda',
        description: 'Sampaikan ide atau kebutuhan umum Anda terkait video yang diinginkan.',
        icon: FileText
    },
    {
        id: 2,
        title: 'Proses Produksi',
        description: 'Pengembangan video menggunakan berbagai tools AI canggih.',
        icon: Cpu
    },
    {
        id: 3,
        title: 'Ulasan & Revisi',
        description: 'Peninjauan versi awal dan pemberian masukan penyempurnaan.',
        icon: MessageSquare
    },
    {
        id: 4,
        title: 'Pengiriman Final',
        description: 'Video akhir dikirimkan dalam format yang sesuai kebutuhan.',
        icon: Send
    },
];

const services = [
    {
        title: 'Video AI Realistis',
        description: 'Pembuatan video dengan avatar AI atau teknologi image-to-video untuk presentasi dan iklan.',
        icon: Video
    },
    {
        title: 'AI Content Creation',
        description: 'Produksi konten massal untuk TikTok dan Instagram menggunakan prompt engineering yang presisi.',
        icon: Sparkles
    },
    {
        title: 'Otomasi Konten UMKM',
        description: 'Solusi bagi pemilik bisnis yang ingin tetap eksis di media sosial tanpa harus menghabiskan waktu berjam-jam.',
        icon: Zap
    },
];

const features = [
    'Video Eksklusif (Durasi hingga 1 menit)',
    'Character Konsisten AI',
    'Free Voice Over & Free Backsound Musik',
    'Editing Profesional & Hak Milik Penuh',
    'Human Touch Quality (E-E-A-T)',
    'Biaya Efisien untuk UMKM',
];

export function AIContentServicePage() {
    return (
        <div className="min-h-screen bg-dark text-white overflow-x-hidden">
            <Helmet>
                <title>Jasa Pembuatan Konten AI Kreatif – Solusi Cerdas Bisnis Masa Depan | Ikhsanztech</title>
                <meta name="description" content="Tingkatkan efisiensi bisnis dengan jasa pembuatan konten AI. Mulai dari video AI realistis, script writer, hingga konten media sosial otomatis." />
                <meta name="keywords" content="Jasa Pembuatan Konten AI, AI Content Creation, Video AI, Konten AI Indonesia, UMKM Digital, Otomasi Konten" />
            </Helmet>
            <div className="ambient-gradient" />
            <div className="relative z-10">
                <Header />

                {/* Fixed Back Button */}
                <Link
                    to="/"
                    className="fixed top-20 sm:top-24 left-4 sm:left-6 z-50 inline-flex items-center gap-2 text-white font-medium hover:text-white/70 transition-colors bg-black/30 sm:bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 text-sm sm:text-base"
                >
                    <ArrowLeft className="w-4 h-4" />
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
                                            src="https://public.youware.com/image/68f5670c-baaa-4bc8-af11-37acaa7d70fe/rgzexzj724.png"
                                            alt="Jasa Pembuatan Konten AI Kreatif"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Title & Package Info */}
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                        Jasa Pembuatan Konten AI Kreatif – Solusi Cerdas Bisnis Masa Depan
                                    </h1>
                                    <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-xl p-6">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                            <div>
                                                <p className="text-white font-bold text-lg">Waktu Pengerjaan</p>
                                                <p className="text-white/60">1 Hari</p>
                                            </div>
                                            <div className="sm:text-right">
                                                <p className="text-white font-bold text-lg">Jumlah Revisi</p>
                                                <p className="text-white/60">Tak Terbatas</p>
                                            </div>
                                        </div>
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
                            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
                                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                                    Selamat datang di <strong className="text-white">masa depan pemasaran digital</strong>. Ikhsanztech Studio memadukan kreativitas manusia dengan kecanggihan kecerdasan buatan melalui layanan <strong className="text-white">jasa pembuatan konten AI</strong>. Kami membantu UMKM di Indonesia bertransformasi ke era digital dengan biaya yang lebih efisien namun hasil tetap berkualitas premium.
                                </p>
                                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                    Kami memastikan setiap konten AI yang kami hasilkan tetap memiliki <strong className="text-white">'sentuhan manusia' (human touch)</strong> agar tetap relevan dan dipercaya oleh audiens Anda (E-E-A-T). Jadilah <strong className="text-white">pionir di industri Anda</strong> dengan memanfaatkan teknologi AI bersama spesialis yang tepat.
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
                                Layanan Unggulan AI Kami
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {services.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.div
                                            key={service.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-xl p-6"
                                        >
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4">
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
                                                <p className="text-white/60 text-sm">{service.description}</p>
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
                            transition={{ delay: 0.25 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                                Alur Kerja
                            </h2>

                            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {workflowSteps.map((step, index) => {
                                        const Icon = step.icon;
                                        return (
                                            <motion.div
                                                key={step.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.25 + index * 0.1 }}
                                                className="flex items-start gap-4 p-4 rounded-xl border border-white/10"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <span className="text-white/50 text-xs font-medium">Step {step.id}</span>
                                                    <p className="text-white text-sm font-bold mb-1">{step.title}</p>
                                                    <p className="text-white/60 text-xs">{step.description}</p>
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
                            transition={{ delay: 0.35 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                                Fitur Termasuk
                            </h2>

                            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.35 + index * 0.05 }}
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
                            <motion.a
                                href="https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio%2C%20saya%20tertarik%20dengan%20Jasa%20Pembuatan%20Konten%20AI.%20Mari%20kita%20diskusikan%20kebutuhan%20bisnis%20saya!"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Hubungi via WhatsApp
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
