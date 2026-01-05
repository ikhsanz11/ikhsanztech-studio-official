import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// 2 horizontal videos (16:9) for commercial ads - Google Drive
const videos = [
    { id: 1, platform: 'gdrive', fileId: '1zXYpz8X8nPZY7L7LlWV8oVS2veZmZjxO' },
    { id: 2, platform: 'gdrive', fileId: '1307gWMWOgKJzVHWx-3cex6K4GRiCIMa1' },
];

function getEmbedUrl(video: typeof videos[0]) {
    return `https://drive.google.com/file/d/${video.fileId}/preview`;
}

export function AdsVideoPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-h-screen bg-dark text-white overflow-x-hidden">
            <div className="ambient-gradient" />
            <div className="relative z-10">
                <Header />

                {/* Fixed Back Button - Responsive positioning */}
                <Link
                    to="/"
                    className="fixed top-20 sm:top-24 left-4 sm:left-6 z-50 inline-flex items-center gap-2 text-white font-medium hover:text-white/70 transition-colors bg-black/30 sm:bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 text-sm sm:text-base"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Kembali</span>
                </Link>

                <section className="pt-32 sm:pt-28 pb-16 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Title - Responsive text */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 sm:mb-12 text-center"
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                                Ads Video Commercial
                            </h1>
                            <p className="text-white/50 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg max-w-lg mx-auto">
                                Video iklan profesional untuk brand dan bisnis
                            </p>
                        </motion.div>

                        {/* Single Video Slide - Responsive horizontal */}
                        <div className="relative flex items-center justify-center px-10 sm:px-16">
                            {/* Navigation Arrows */}
                            <button
                                onClick={goToPrevious}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 sm:bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </button>

                            <button
                                onClick={goToNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 sm:bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </button>

                            {/* Video Display - Horizontal 16:9 for Ads */}
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-2xl shadow-2xl"
                            >
                                <iframe
                                    src={getEmbedUrl(videos[currentIndex])}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={`Ads Video ${videos[currentIndex].id}`}
                                />
                            </motion.div>
                        </div>

                        {/* Video Indicators */}
                        <div className="flex justify-center gap-3 mt-6 sm:mt-8">
                            {videos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-purple-500 scale-125'
                                            : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Counter */}
                        <p className="text-center text-white/40 mt-4 text-sm">
                            {currentIndex + 1} / {videos.length}
                        </p>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
