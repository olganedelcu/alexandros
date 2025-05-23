
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Add smooth scrolling effect
  useEffect(() => {
    const handleScrollToSection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleScrollToSection);
    return () => document.removeEventListener('click', handleScrollToSection);
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <About />
        <Approach />
        <Testimonials />
        <CTA />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
