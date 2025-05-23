
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Approach />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
