import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      setVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", href: "#about", onClick: () => scrollToSection('about') },
    { name: "Testimonials", href: "#testimonials", onClick: () => scrollToSection('testimonials') },
    { name: "FAQ", href: "#faq", onClick: () => scrollToSection('faq') },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm transition-opacity duration-1000 ${visible ? 'opacity-0' : 'opacity-100'}`}></div>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-blue-100/90">
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.15, 0.1],
              scale: [1, 1.08, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              delay: 1,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, 20, 0],
              y: [0, -10, 0],
              opacity: [0.05, 0.1, 0.05] 
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut"
            }}
            className="absolute -left-10 top-1/2 w-40 h-40 rounded-full bg-blue-200 opacity-10 blur-2xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, -20, 0],
              y: [0, 10, 0],
              opacity: [0.05, 0.1, 0.05] 
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              delay: 2,
              ease: "easeInOut"
            }}
            className="absolute right-1/4 top-1/2 w-56 h-56 rounded-full bg-indigo-200 opacity-10 blur-2xl"
          ></motion.div>
        </div>

        {/* Main navbar content with backdrop blur */}
        <div className="relative bg-gradient-to-br from-blue-50/30 via-indigo-50/30 to-blue-100/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo/Brand */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <img 
                  src="/assets/logo1.png" 
                  alt="AKT Logo - Growing at the Speed of Trust" 
                  className="h-10 w-10 sm:h-14 sm:w-14"
                />
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      link.onClick();
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Desktop Button */}
              <div className="hidden md:block">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold text-sm sm:text-base shadow-lg transform transition duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <a href="https://calendly.com/aktbusinesscoaching/" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    Book a Call
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        link.onClick();
                      }}
                      className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button
                    asChild
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-md font-bold text-base shadow-lg transform transition duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <a href="https://calendly.com/aktbusinesscoaching/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="relative z-10">
                      Book a Call
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 