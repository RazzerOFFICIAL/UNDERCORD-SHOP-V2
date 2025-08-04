import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Consulenza from "@/components/Consulenza";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollIndicator from "@/components/ScrollIndicator";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image Extended to Full Page */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 bg-background/80 z-0" />
      
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Consulenza />
        <Testimonials />
        <Footer />
        <ScrollToTop />
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Index;
