import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Category = 'prompt-gen' | 'workflow' | 'account';

const categories: { id: Category; label: string }[] = [
  { id: 'prompt-gen', label: 'Prompt Gen' },
  { id: 'workflow', label: 'AI Workflow' },
  { id: 'account', label: 'Premium Account' },
];

const products = [
  {
    id: 'flow-ai',
    name: 'FLOW AI 45000 KREDIT',
    description: 'Akses teknologi canggih Google dengan 45.000 Kredit Premium',
    price: 'IDR 669.000',
    originalPrice: 'IDR 3.849.000',
    image: '/flow-baru.jpg',
    category: 'account' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo,%20saya%20ingin%20membeli%20paket%20FLOW%20AI%2045000%20KREDIT.',
  },
  {
    id: 'google-ai-ultra',
    name: 'Google AI Ultra Privat | 45000 KREDIT',
    description: 'Gemini AI Pro | Google AI Pro Privat | VEO 3.1. Akses langsung ke teknologi canggih Google!',
    price: 'IDR 669.000',
    originalPrice: 'IDR 3.849.000',
    image: '/googleaiultra-baru.jpg',
    category: 'account' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo,%20saya%20ingin%20membeli%20Google%20AI%20Ultra%20Privat.',
  },
  {
    id: 'higgsfield-ai',
    name: 'HIGGSFIELD AI 1200C',
    description: 'Teknologi pergerakan video AI paling halus untuk kreator profesional',
    price: 'IDR 499.000',
    originalPrice: 'IDR 855.000',
    image: '/higgsfield-baru.jpg',
    category: 'account' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo,%20saya%20ingin%20membeli%20paket%20HIGGSFIELD%20AI%201200C.',
  },
  {
    id: 'video-gen',
    name: 'Video Prompt Generator',
    description: 'Ubah gambar statis menjadi video AI sinematik sekelas film profesional',
    price: 'IDR 169.000',
    originalPrice: 'IDR 799.000',
    image: '/video-gen-baru.jpg',
    category: 'prompt-gen' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo,%20saya%20ingin%20membeli%20Video%20Prompt%20Gen.',
  },
  {
    id: 'image-gen',
    name: 'Image Prompt Generator',
    description: 'Bangun adegan AI sinematik dan ultra-realistis setara kualitas film',
    price: 'IDR 149.000',
    originalPrice: 'IDR 599.000',
    image: '/image-gen-baru.jpg',
    category: 'prompt-gen' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo,%20saya%20ingin%20membeli%20Image%20Prompt%20Gen.',
  },
  {
    id: 'kelas-ai',
    name: 'Group WhatsApp',
    description: 'Akses eksklusif ke komunitas kreator, belajar strategi viral, dan gratis akses ChatGPT 5.0 serta Sora 2 selama 3 bulan.',
    price: 'IDR 599.000',
    originalPrice: 'IDR 1.499.000',
    image: '/wa-group-thumb.jpg',
    category: 'account' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20Group%20WhatsApp.',
  },
  {
    id: 'nano-banana',
    name: 'Nano Banana Image Gen',
    description: 'Bangun konsistensi karakter sekali klik. Cukup upload 1 foto untuk hasilkan ratusan pose sinematik.',
    price: 'IDR 139.000',
    originalPrice: 'IDR 499.000',
    image: '/nano-image-gen.jpg',
    category: 'prompt-gen' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20Nano%20Banana%20Image%20Gen.',
  },
  {
    id: 'sora2-prompt',
    name: 'Sora2 Smart Prompt',
    description: 'Ubah gambar statis menjadi video hidup dengan detail sinematik dan kendali kamera penuh.',
    price: 'IDR 139.000',
    originalPrice: 'IDR 465.000',
    image: '/sora2-prompt.jpg',
    category: 'prompt-gen' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20Sora2%20Smart%20Prompt.',
  },
  {
    id: 'veo3-prompt',
    name: 'Veo 3.1 Smart Prompt',
    description: 'Generator prompt khusus untuk model Veo 3.1, menghasilkan atmosfer film profesional kelas dunia.',
    price: 'IDR 139.000',
    originalPrice: 'IDR 465.000',
    image: '/veo31-prompt.jpg',
    category: 'prompt-gen' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20Veo%203.1%20Smart%20Prompt.',
  },
  {
    id: 'nano-workflow',
    name: 'Nano Banana Workflow',
    description: 'Bongkar rahasia workflow asli dari Ikhsanztech Studio. Dari satu gambar jadi film sinematik utuh.',
    price: 'IDR 269.000',
    originalPrice: 'IDR 750.000',
    image: '/nano-workflow.jpg',
    category: 'workflow' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20memesan%20Nano%20Banana%20Workflow.',
  },
  {
    id: 'speedramp-workflow',
    name: 'Speedramp Effect Workflow',
    description: 'Mindset AI Video Director dengan tutorial Nano Banana Pro. Efek cinematic profesional untuk video Anda.',
    price: 'IDR 199.000',
    originalPrice: 'IDR 899.000',
    image: '/speedramp-workflow.jpg',
    category: 'workflow' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20Speedramp%20Effect%20Workflow.%20Mohon%20info%20pembayarannya.',
  },
  {
    id: 'nsfw-ai',
    name: 'NSFW AI Website (18++ ONLY)',
    description: '18++ ONLY. Akses website AI premium untuk kreator dewasa. Penggunaan sesuai tanggung jawab masing-masing.',
    price: 'IDR 699.000',
    originalPrice: 'IDR 1.200.000',
    image: '/nsfw-guide.jpg',
    category: 'account' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20NSFW%20AI%20Website.%20Mohon%20info%20pembayarannya.',
  },
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus 5.2 (3 Bulan)',
    description: 'Akses ChatGPT Plus resmi durasi 3 Bulan. Admin Fast Respon 24/7 siap membantu.',
    price: 'IDR 160.000',
    originalPrice: 'IDR 960.000',
    image: '/chatgpt-plus.jpg',
    category: 'account' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20ChatGPT%20Plus%205.2%20(3%20Bulan).%20Mohon%20info%20pembayarannya.',
  },
  {
    id: 'credit-card',
    name: 'Credit Card Pembayaran',
    description: 'Solusi resmi untuk aktivasi trial platform global (Midjourney, Adobe, dll.) dengan garansi 100% berhasil.',
    price: 'IDR 249.000',
    originalPrice: 'IDR 400.000',
    image: '/cc-payment.jpg',
    category: 'account' as Category,
    whatsappLink: 'https://wa.me/6287877066270?text=Halo%20Ikhsanztech-studio,%20saya%20ingin%20membeli%20Credit%20Card%20Pembayaran.%20Mohon%20info%20pembayarannya.',
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <Link to={`/produk/${product.id}`} className="block">
      <motion.div
        id={product.id}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-white/8 via-zinc-900/50 to-zinc-900/30 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-4 flex flex-col md:flex-row gap-4 md:gap-6 group cursor-pointer items-center hover:border-white/25 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] transition-all duration-300"
      >
        {/* Product Image - Left */}
        <div className="w-24 md:w-28 flex-shrink-0 aspect-square rounded-xl overflow-hidden bg-white/5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Product Info - Center */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-inter font-bold text-sm md:text-base text-white group-hover:text-white/80 transition-colors">
            {product.name}
          </h3>
          <p className="text-white/50 text-xs mt-1 leading-relaxed line-clamp-2">{product.description}</p>
          <div className="flex items-baseline gap-2 mt-2 justify-center md:justify-start">
            <span className="text-sm md:text-base font-bold text-white">
              {product.price}
            </span>
            <span className="text-[10px] text-white/30 line-through">{product.originalPrice}</span>
          </div>
          {/* Mini Checklist */}
          <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
            <span className="text-white/50 text-[10px] flex items-center gap-1">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Akses Instant
            </span>
            <span className="text-white/50 text-[10px] flex items-center gap-1">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Garansi
            </span>
          </div>
        </div>

        {/* CTA - Right */}
        <div className="w-full md:w-auto flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-black text-white font-bold text-xs border border-white/10 hover:border-white/20 hover:bg-zinc-900 transition-all text-center whitespace-nowrap"
          >
            Beli Sekarang
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}


export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('prompt-gen');

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <section id="produk-digital" className="section-fade-top relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">
            PRODUK DIGITAL
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Produk digital premium untuk meningkatkan produktivitas dan kreativitas Anda
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-medium backdrop-blur-md border transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-white/20 border-white/40 text-white'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Products List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
