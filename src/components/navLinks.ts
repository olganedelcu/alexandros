type ScrollToSection = (sectionId: string) => void;

export const getNavLinks = (isAboutPage: boolean, isBlogPage: boolean, scrollToSection: ScrollToSection) => {
  return isAboutPage || isBlogPage ? [
    { 
      name: "Home", 
      href: "/", 
      onClick: () => window.location.href = '/' 
    },
    { 
      name: "About", 
      href: "/about", 
      onClick: () => window.location.href = '/about' 
    },
    { 
      name: "Blog", 
      href: "/blog", 
      onClick: () => window.location.href = '/blog' 
    },
  ] : [
    { 
      name: "Testimonials", 
      href: isBlogPage ? "/#testimonials" : "#testimonials", 
      onClick: () => scrollToSection('testimonials') 
    },
    { 
      name: "Packages", 
      href: isBlogPage ? "/#packages" : "#packages", 
      onClick: () => scrollToSection('packages') 
    },
    { 
      name: "FAQ", 
      href: isBlogPage ? "/#faq" : "#faq", 
      onClick: () => scrollToSection('faq') 
    },   
    { 
      name: "About", 
      href: "/about", 
      onClick: () => window.location.href = '/about' 
    },
    { 
      name: "Blog", 
      href: "/blog", 
      onClick: () => window.location.href = '/blog' 
    },
  ];
}; 