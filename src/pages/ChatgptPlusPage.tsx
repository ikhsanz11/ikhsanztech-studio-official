import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const features = [
    'Akses ChatGPT Plus resmi',
    'Durasi 3 Bulan penuh',
    'Admin Fast Respon 24/7',
    'Fitur GPT-4o lengkap',
    'DALL-E 3 & Code Interpreter',
    'Garansi akun aktif',
];

export function ChatgptPlusPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Header />

            <Link
                to="/"
                className="fixed top-20 sm:top-24 left-4 sm:left-6 z-50 inline-flex items-center gap-2 text-white font-medium hover:text-white/70 transition-colors bg-black/30 sm:bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 text-sm sm:text-base"
            >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Kembali</span>
            </Link>

            <section className="pt-32 sm:pt-28 pb-16 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                                    <img
                                        src="/chatgpt-plus.jpg"
                                        alt="ChatGPT Plus 5.0 (Resmi)"
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="font-sora text-2xl sm:text-3xl font-bold text-white">
                                        ChatGPT Plus 5.2
                                    </h1>
                                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">RESMI</span>
                                </div>
                                <p className="text-white/50 text-sm mb-4">Durasi 3 Bulan</p>

                                <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
                                    Akses ChatGPT Plus resmi dengan semua fitur premium. Admin Fast Respon 24/7 siap membantu kapan saja.
                                </p>

                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-3xl font-bold text-white">IDR 160.000</span>
                                    <span className="text-zinc-500 line-through">IDR 960.000</span>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-white/70 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.a
                                    href="https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20ChatGPT%20Plus%205.2%20(3%20Bulan).%20Mohon%20info%20pembayarannya."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full inline-flex items-center justify-center bg-black hover:bg-zinc-900 text-white font-bold px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    Beli Sekarang
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
