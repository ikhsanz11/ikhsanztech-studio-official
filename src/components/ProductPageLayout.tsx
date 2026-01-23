import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MidtransCheckout } from './MidtransCheckout';
import { getProductById, Product } from '../data/products';

interface ProductPageLayoutProps {
    productId: string;
}

export function ProductPageLayout({ productId }: ProductPageLayoutProps) {
    const product = getProductById(productId);

    if (!product) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Product not found</p>
            </div>
        );
    }

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
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8">
                                <h1 className="font-sora text-2xl sm:text-3xl font-bold text-white mb-4">
                                    {product.name}
                                </h1>

                                <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-3xl font-bold text-white">{product.displayPrice}</span>
                                    <span className="text-zinc-500 line-through">{product.originalPrice}</span>
                                </div>

                                {product.features && product.features.length > 0 && (
                                    <div className="space-y-3 mb-8">
                                        {product.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-white/70 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <MidtransCheckout
                                    productId={product.id}
                                    buttonClassName="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
