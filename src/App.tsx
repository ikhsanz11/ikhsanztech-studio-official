import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ShowreelSection } from "./components/ShowreelSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProductsSection } from "./components/ProductsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";
import { FlowAiPage } from "./pages/FlowAiPage";
import { GoogleAiUltraPage } from "./pages/GoogleAiUltraPage";
import { HiggsfieldAiPage } from "./pages/HiggsfieldAiPage";
import { VideoGenPage } from "./pages/VideoGenPage";
import { ImageGenPage } from "./pages/ImageGenPage";
import { AiContentPage } from "./pages/AiContentPage";
import { EditingShortsPage } from "./pages/EditingShortsPage";
import { AdsVideoPage } from "./pages/AdsVideoPage";
import { ProfessionalEditingPage } from "./pages/ProfessionalEditingPage";
import { GameAdsPage } from "./pages/GameAdsPage";
import { MotionGraphicPage } from "./pages/MotionGraphicPage";
import { ShortsContentPage } from "./pages/ShortsContentPage";
import { AIContentServicePage } from "./pages/AIContentServicePage";
import { AIAdsServicePage } from "./pages/AIAdsServicePage";
import { AIImageServicePage } from "./pages/AIImageServicePage";
import { AIVoiceServicePage } from "./pages/AIVoiceServicePage";
import { KelasAiPage } from "./pages/KelasAiPage";
import { NanoBananaPage } from "./pages/NanoBananaPage";
import { Sora2PromptPage } from "./pages/Sora2PromptPage";
import { Veo3PromptPage } from "./pages/Veo3PromptPage";
import { NanoWorkflowPage } from "./pages/NanoWorkflowPage";
import { SpeedrampWorkflowPage } from "./pages/SpeedrampWorkflowPage";
import { NsfwAiPage } from "./pages/NsfwAiPage";
import { ChatgptPlusPage } from "./pages/ChatgptPlusPage";
import { CreditCardPage } from "./pages/CreditCardPage";
import { PaymentSuccessPage } from "./pages/PaymentSuccessPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Section paths mapping
const sectionPaths: Record<string, string> = {
  '/jasa-kami': 'jasa-kami',
  '/produk-digital': 'produk-digital',
  '/portofolio': 'portofolio',
};

// Component to handle path-based section scrolling
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Check if current path is a section path
    const sectionId = sectionPaths[location.pathname];

    if (sectionId) {
      // Wait for page to render, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (location.hash) {
      // Handle hash-based navigation as fallback
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // Scroll to top for home page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      {/* Ambient Background Gradient */}
      <div className="ambient-gradient" />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ShowreelSection />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <SpeedInsights />
      <Router>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Section routes - render HomePage and scroll to section */}
          <Route path="/jasa-kami" element={<HomePage />} />
          <Route path="/produk-digital" element={<HomePage />} />
          <Route path="/portofolio" element={<HomePage />} />
          {/* Product pages */}
          <Route path="/produk/flow-ai" element={<FlowAiPage />} />
          <Route path="/produk/google-ai-ultra" element={<GoogleAiUltraPage />} />
          <Route path="/produk/higgsfield-ai" element={<HiggsfieldAiPage />} />
          <Route path="/produk/video-gen" element={<VideoGenPage />} />
          <Route path="/produk/image-gen" element={<ImageGenPage />} />
          <Route path="/portofolio/ai-content" element={<AiContentPage />} />
          <Route path="/portofolio/editing-shorts" element={<EditingShortsPage />} />
          <Route path="/portofolio/ads-video" element={<AdsVideoPage />} />
          <Route path="/services/professional-editing" element={<ProfessionalEditingPage />} />
          <Route path="/services/game-ads" element={<GameAdsPage />} />
          <Route path="/services/motion-graphic" element={<MotionGraphicPage />} />
          <Route path="/services/shorts-content" element={<ShortsContentPage />} />
          <Route path="/services/ai-content-pro" element={<AIContentServicePage />} />
          <Route path="/services/ai-ads-pro" element={<AIAdsServicePage />} />
          <Route path="/services/ai-image-premium" element={<AIImageServicePage />} />
          <Route path="/services/ai-voice-cloning" element={<AIVoiceServicePage />} />
          <Route path="/produk/kelas-ai" element={<KelasAiPage />} />
          <Route path="/produk/nano-banana" element={<NanoBananaPage />} />
          <Route path="/produk/sora2-prompt" element={<Sora2PromptPage />} />
          <Route path="/produk/veo3-prompt" element={<Veo3PromptPage />} />
          <Route path="/produk/nano-workflow" element={<NanoWorkflowPage />} />
          <Route path="/produk/speedramp-workflow" element={<SpeedrampWorkflowPage />} />
          <Route path="/produk/nsfw-ai" element={<NsfwAiPage />} />
          <Route path="/produk/chatgpt-plus" element={<ChatgptPlusPage />} />
          <Route path="/produk/credit-card" element={<CreditCardPage />} />
          {/* Payment Success Page */}
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

