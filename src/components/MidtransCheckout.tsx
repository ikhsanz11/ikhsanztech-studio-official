import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CreditCard, User, Mail, Phone } from 'lucide-react';
import { getProductById } from '../data/products';

// Declare Snap type for TypeScript
declare global {
    interface Window {
        snap?: {
            pay: (token: string, options: {
                onSuccess: (result: unknown) => void;
                onPending: (result: unknown) => void;
                onError: (result: unknown) => void;
                onClose: () => void;
            }) => void;
        };
    }
}

interface MidtransCheckoutProps {
    productId: string;
    buttonClassName?: string;
    buttonText?: string;
}

export function MidtransCheckout({
    productId,
    buttonClassName = "w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300",
    buttonText = "Beli Sekarang"
}: MidtransCheckoutProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const product = getProductById(productId);

    if (!product) {
        console.error(`Product not found: ${productId}`);
        return null;
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setError(null);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setError(null);
        setFormData({ name: '', email: '', phone: '' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Validate form
            if (!formData.name.trim() || !formData.email.trim()) {
                throw new Error('Nama dan email wajib diisi');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Format email tidak valid');
            }

            // Call backend to create transaction
            const response = await fetch('/api/create-transaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product.id,
                    productName: product.name,
                    productPrice: product.price,
                    customerName: formData.name,
                    customerEmail: formData.email,
                    customerPhone: formData.phone,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Gagal membuat transaksi');
            }

            // Close modal
            setIsModalOpen(false);

            // Open Midtrans Snap popup
            if (window.snap) {
                window.snap.pay(data.token, {
                    onSuccess: (result) => {
                        console.log('Payment Success:', result);
                        // Redirect to WhatsApp with success message
                        const whatsappMessage = encodeURIComponent(
                            `Halo, saya ${formData.name} telah membeli ${product.name}.\n\nOrder ID: ${data.order_id}\nEmail: ${formData.email}\n\nMohon diproses. Terima kasih!`
                        );
                        window.location.href = `https://wa.me/6287877066270?text=${whatsappMessage}`;
                    },
                    onPending: (result) => {
                        console.log('Payment Pending:', result);
                        alert('Pembayaran pending. Silakan selesaikan pembayaran Anda.');
                    },
                    onError: (result) => {
                        console.error('Payment Error:', result);
                        alert('Pembayaran gagal. Silakan coba lagi.');
                    },
                    onClose: () => {
                        console.log('Payment popup closed');
                    },
                });
            } else {
                // Fallback: redirect to Midtrans payment page
                window.location.href = data.redirect_url;
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Checkout Button */}
            <motion.button
                onClick={handleOpenModal}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={buttonClassName}
            >
                <CreditCard className="w-5 h-5 mr-2" />
                {buttonText}
            </motion.button>

            {/* Checkout Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-white mb-2">Checkout</h2>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <p className="text-white font-semibold">{product.name}</p>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-lg font-bold text-white">{product.displayPrice}</span>
                                        <span className="text-sm text-white/40 line-through">{product.originalPrice}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                                        <User className="w-4 h-4" />
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                                        <Mail className="w-4 h-4" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="email@example.com"
                                    />
                                </div>

                                {/* Phone (Optional) */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                                        <Phone className="w-4 h-4" />
                                        Nomor WhatsApp (Opsional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="08xxxxxxxxxx"
                                    />
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="p-3 bg-red-500/20 border border-red-500/40 rounded-xl text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Memproses...
                                        </>
                                    ) : (
                                        <>
                                            <CreditCard className="w-5 h-5" />
                                            Bayar {product.displayPrice}
                                        </>
                                    )}
                                </motion.button>

                                {/* Payment Methods Info */}
                                <p className="text-center text-xs text-white/40 mt-4">
                                    Pembayaran aman via Midtrans. Mendukung QRIS, Virtual Account, E-Wallet, dan Kartu Kredit.
                                </p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
