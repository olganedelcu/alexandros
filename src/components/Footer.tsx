import { Mail, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 text-gray-600 py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
          className="absolute -left-10 top-1/3 w-20 md:w-40 h-20 md:h-40 rounded-full bg-blue-400 opacity-10 blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute -right-10 top-2/3 w-20 md:w-40 h-20 md:h-40 rounded-full bg-blue-500 opacity-10 blur-2xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block -ml-4"
          >
              <img src="/assets/logo1.png" alt="aKt Logo" className="h-14 md:h-16 w-auto" />
          </motion.div>
            <div className="mt-4 mb-6">
              <div className="relative inline-block">
                <p className="text-sm md:text-base text-gray-600">
                  <span className="relative">
                    A revolutionary way
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-200/50 via-blue-400 to-blue-600 rounded"
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: "100%", opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      style={{ 
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                        transform: 'scaleX(1)',
                        transformOrigin: 'left',
                        width: '100%'
                      }}
                    />
                  </span>
                  {" "}with expert guidance with proven strategies to transform your business
          </p>
              </div>
            </div>
            <div className="flex justify-start space-x-4">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/alexandrostziranis/" 
                className="text-gray-500 hover:text-blue-600 transition-colors bg-white/80 rounded-full p-2 shadow-sm hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
                <Linkedin size={18} />
            </motion.a>
          </div>
          </motion.div>
        
        <div className="hidden md:block"></div>
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-start-3 text-left"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">Contact Info</h3>
          <ul className="space-y-4">
            <motion.li 
              whileHover={{ x: 5 }}
                className="flex items-center justify-start group"
            >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <Mail className="text-blue-600" size={16} />
                </div>
                <a href="mailto:alex@aktbusinesscoach.com" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors">
                alex@aktbusinesscoach.com
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
                className="flex items-start justify-start group"
            >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <MapPin className="text-blue-600" size={16} />
                </div>
                <span className="text-sm md:text-base text-gray-600">
                  3rd Floor Suite<br />
                  207 Regent Street<br />
                  London, UK
              </span>
            </motion.li>
          </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-6 mt-6 border-t border-blue-200 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm md:text-base text-gray-600">
            © 2025 aKt. All rights reserved.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold text-sm sm:text-base shadow-lg transform transition duration-300 hover:scale-105 relative overflow-hidden"
          >
            <a href="https://calendly.com/aktbusinesscoaching/" target="_blank" rel="noopener noreferrer" className="relative z-10">
              Book a Call
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
            </a>
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
