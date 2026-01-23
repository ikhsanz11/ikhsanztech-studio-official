import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Home } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function PaymentSuccessPage() {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('order_id') || 'Unknown';

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    // WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `Halo, saya telah melakukan pembayaran.\n\nOrder ID: ${orderId}\n\nMohon diproses. Terima kasih!`
    );
    const whatsappLink = `https://wa.me/6287877066270?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Header />

            <section className="pt-32 pb-20 px-4 sm:px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-14 h-14 text-green-400" />
                        </div>
                        <h1 className="font-sora text-3xl sm:text-4xl font-bold text-white mb-4">
                            Pembayaran Berhasil! 🎉
                        </h1>
                        <p className="text-white/70 text-lg mb-2">
                            Terima kasih atas pembelian Anda.
                        </p>
                        <p className="text-white/50 text-sm">
                            Order ID: <span className="font-mono text-white/70">{orderId}</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 mb-8"
                    >
                        <h2 className="text-lg font-semibold text-white mb-4">
                            Langkah Selanjutnya
                        </h2>
                        <div className="space-y-4 text-left">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-blue-400 font-bold text-sm">1</span>
                                </div>
                                <p className="text-white/70">
                                    Klik tombol <strong className="text-white">"Chat via WhatsApp"</strong> di bawah untuk konfirmasi pembayaran.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-blue-400 font-bold text-sm">2</span>
                                </div>
                                <p className="text-white/70">
                                    Admin akan memproses pesanan Anda dan mengirimkan akses produk <strong className="text-white">maksimal 1x24 jam</strong>.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-400 font-bold text-sm">3</span>
                                </div>
                                <p className="text-white/70">
                                    Nikmati produk digital Anda! Jika ada kendala, silakan hubungi admin.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat via WhatsApp
                        </motion.a>

                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/10 transition-all duration-300"
                            >
                                <Home className="w-5 h-5" />
                                Kembali ke Beranda
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
