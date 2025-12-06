import HeroSection from "../components/HeroSection";
import ToolsGrid from "../components/ToolsGrid";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0518] relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <HeroSection />
      <ToolsGrid />
      <Testimonials />
      <Footer />
    </div>
  );
}
