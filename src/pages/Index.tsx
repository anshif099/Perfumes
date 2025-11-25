import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Packaging from "@/components/Packaging";
import DarkHero from "@/components/DarkHero";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroCarousel />
      <About />
      <Products />
      <Testimonials />
      <Packaging />
      <DarkHero />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
