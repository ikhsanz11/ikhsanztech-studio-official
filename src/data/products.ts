// Centralized product data for Midtrans integration
// Harga dalam Rupiah (number) untuk Midtrans API

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // Harga dalam Rupiah (e.g., 669000)
    displayPrice: string; // Format display (e.g., "IDR 669.000")
    originalPrice: string;
    image: string;
    category: 'prompt-gen' | 'workflow' | 'account';
    features?: string[];
}

export const products: Product[] = [
    {
        id: 'flow-ai',
        name: 'FLOW AI 45000 KREDIT',
        description: 'Akses teknologi canggih Google dengan 45.000 Kredit Premium',
        price: 669000,
        displayPrice: 'IDR 669.000',
        originalPrice: 'IDR 3.849.000',
        image: '/flow-baru.png',
        category: 'account',
        features: [
            '45.000 Kredit Premium',
            'Akun Pribadi (Bukan Sharing)',
            'Garansi Full 30 Hari',
            'Akses Veo 3.1 untuk video AI',
            'Gemini Pro untuk AI conversation',
            'Google Flow dan AI Studio terintegrasi',
        ],
    },
    {
        id: 'google-ai-ultra',
        name: 'Google AI Ultra Privat | 45000 KREDIT',
        description: 'Gemini AI Pro | Google AI Pro Privat | VEO 3.1. Akses langsung ke teknologi canggih Google!',
        price: 669000,
        displayPrice: 'IDR 669.000',
        originalPrice: 'IDR 3.849.000',
        image: '/googleaiultra-baru.png',
        category: 'account',
        features: [
            '45.000 Kredit Premium',
            'Akun Pribadi (Bukan Sharing)',
            'All Device Support',
            'Akses Veo 3.1',
            'Gemini Pro',
            'Google Flow',
            'Whisk',
            'Nano Banana Pro',
        ],
    },
    {
        id: 'higgsfield-ai',
        name: 'HIGGSFIELD AI 1200C',
        description: 'Teknologi pergerakan video AI paling halus untuk kreator profesional',
        price: 499000,
        displayPrice: 'IDR 499.000',
        originalPrice: 'IDR 855.000',
        image: '/higgsfield-baru.png',
        category: 'account',
        features: [
            '1200 Kredit Premium',
            'Akun Pribadi (Bukan Sharing)',
            'Garansi Full 30 Hari',
            'Motion video AI terbaik',
        ],
    },
    {
        id: 'video-gen',
        name: 'Video Prompt Generator',
        description: 'Ubah gambar statis menjadi video AI sinematik sekelas film profesional',
        price: 169000,
        displayPrice: 'IDR 169.000',
        originalPrice: 'IDR 799.000',
        image: '/video-gen-baru.jpg',
        category: 'prompt-gen',
        features: [
            'Prompt Generator Khusus Video AI',
            'Support Veo, Sora, Runway, Kling',
            'Hasil Sinematik Profesional',
            'Lifetime Access',
        ],
    },
    {
        id: 'image-gen',
        name: 'Image Prompt Generator',
        description: 'Bangun adegan AI sinematik dan ultra-realistis setara kualitas film',
        price: 149000,
        displayPrice: 'IDR 149.000',
        originalPrice: 'IDR 599.000',
        image: '/image-gen-baru.jpg',
        category: 'prompt-gen',
        features: [
            'Prompt Generator Khusus Image AI',
            'Support Midjourney, DALL-E, Stable Diffusion',
            'Hasil Ultra-Realistis',
            'Lifetime Access',
        ],
    },
    {
        id: 'kelas-ai',
        name: 'Group WhatsApp',
        description: 'Akses eksklusif ke komunitas kreator, belajar strategi viral, dan gratis akses ChatGPT 5.0 serta Sora 2 selama 3 bulan.',
        price: 599000,
        displayPrice: 'IDR 599.000',
        originalPrice: 'IDR 1.499.000',
        image: '/wa-group-thumb.jpg',
        category: 'account',
        features: [
            'Akses Komunitas Eksklusif',
            'ChatGPT 5.0 Gratis 3 Bulan',
            'Sora 2 Gratis 3 Bulan',
            'Strategi Viral Content',
        ],
    },
    {
        id: 'nano-banana',
        name: 'Nano Banana Image Gen',
        description: 'Bangun konsistensi karakter sekali klik. Cukup upload 1 foto untuk hasilkan ratusan pose sinematik.',
        price: 139000,
        displayPrice: 'IDR 139.000',
        originalPrice: 'IDR 499.000',
        image: '/nano-image-gen.jpg',
        category: 'prompt-gen',
        features: [
            'Konsistensi Karakter AI',
            '1 Foto = Ratusan Pose',
            'Hasil Sinematik',
            'Lifetime Access',
        ],
    },
    {
        id: 'sora2-prompt',
        name: 'Sora2 Smart Prompt',
        description: 'Ubah gambar statis menjadi video hidup dengan detail sinematik dan kendali kamera penuh.',
        price: 139000,
        displayPrice: 'IDR 139.000',
        originalPrice: 'IDR 465.000',
        image: '/sora2-prompt.jpg',
        category: 'prompt-gen',
        features: [
            'Optimized untuk Sora 2',
            'Kendali Kamera Penuh',
            'Detail Sinematik',
            'Lifetime Access',
        ],
    },
    {
        id: 'veo3-prompt',
        name: 'Veo 3.1 Smart Prompt',
        description: 'Generator prompt khusus untuk model Veo 3.1, menghasilkan atmosfer film profesional kelas dunia.',
        price: 139000,
        displayPrice: 'IDR 139.000',
        originalPrice: 'IDR 465.000',
        image: '/veo31-prompt.jpg',
        category: 'prompt-gen',
        features: [
            'Optimized untuk Veo 3.1',
            'Atmosfer Film Profesional',
            'Kualitas Kelas Dunia',
            'Lifetime Access',
        ],
    },
    {
        id: 'nano-workflow',
        name: 'Nano Banana Workflow',
        description: 'Bongkar rahasia workflow asli dari Ikhsanztech Studio. Dari satu gambar jadi film sinematik utuh.',
        price: 269000,
        displayPrice: 'IDR 269.000',
        originalPrice: 'IDR 750.000',
        image: '/nano-workflow.jpg',
        category: 'workflow',
        features: [
            'Workflow Lengkap Step-by-Step',
            'Dari 1 Gambar ke Film',
            'Teknik Profesional',
            'Video Tutorial',
        ],
    },
    {
        id: 'speedramp-workflow',
        name: 'Speedramp Effect Workflow',
        description: 'Mindset AI Video Director dengan tutorial Nano Banana Pro. Efek cinematic profesional untuk video Anda.',
        price: 199000,
        displayPrice: 'IDR 199.000',
        originalPrice: 'IDR 899.000',
        image: '/speedramp-workflow.jpg',
        category: 'workflow',
        features: [
            'Efek Speedramp Cinematic',
            'Tutorial Video Lengkap',
            'Teknik AI Director',
            'Lifetime Access',
        ],
    },
    {
        id: 'nsfw-ai',
        name: 'NSFW AI Website (18++ ONLY)',
        description: '18++ ONLY. Akses website AI premium untuk kreator dewasa. Penggunaan sesuai tanggung jawab masing-masing.',
        price: 699000,
        displayPrice: 'IDR 699.000',
        originalPrice: 'IDR 1.200.000',
        image: '/nsfw-guide.jpg',
        category: 'account',
        features: [
            'Akses Website Premium',
            '18++ Only',
            'Garansi Full',
            'Support 24/7',
        ],
    },
    {
        id: 'chatgpt-plus',
        name: 'ChatGPT Plus 5.2 (3 Bulan)',
        description: 'ChatGPT Plus dengan fitur lengkap: Codex, Sora, mode agen, dan memori percakapan.',
        price: 190000,
        displayPrice: 'IDR 190.000',
        originalPrice: 'IDR 1.047.000',
        image: '/chatgpt-plus.png',
        category: 'account',
        features: [
            'Selesaikan masalah yang kompleks',
            'Lakukan obrolan panjang di beberapa sesi',
            'Buat lebih banyak gambar dengan lebih cepat',
            'Ingat tujuan dan percakapan sebelumnya',
            'Rencanakan perjalanan dan tugas dengan mode agen',
            'Atur proyek dan sesuaikan GPT Anda',
            'Buat dan bagikan video di Sora',
            'Tulis kode dan buat aplikasi dengan Codex',
        ],
    },
    {
        id: 'credit-card',
        name: 'Credit Card Pembayaran',
        description: 'Solusi resmi untuk aktivasi trial platform global (Midjourney, Adobe, dll.) dengan garansi 100% berhasil.',
        price: 249000,
        displayPrice: 'IDR 249.000',
        originalPrice: 'IDR 400.000',
        image: '/cc-payment.png',
        category: 'account',
        features: [
            'Aktivasi Trial Platform Global',
            'Support Midjourney, Adobe, dll',
            'Garansi 100% Berhasil',
            'Support 24/7',
        ],
    },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
    return products.find(product => product.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: Product['category']): Product[] {
    return products.filter(product => product.category === category);
}
