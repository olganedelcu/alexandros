import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 text-gray-600 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div className="text-left">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block -ml-4"
          >
            <img src="/assets/logo1.png" alt="AkT Logo" className="h-16 w-auto" />
          </motion.div>
          <p className="mt-4 mb-6 text-sm sm:text-base">
            A revolutionary way with expert guidance with proven strategies to transform your business
          </p>
          <div className="flex justify-start space-x-6">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/alexandrostziranis/" 
              className="text-gray-500 hover:text-blue-600 transition-colors bg-white/80 rounded-full p-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="hidden md:block"></div>
        
        <div className="md:col-start-3 text-left">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Contact Info</h3>
          <ul className="space-y-4">
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center justify-start"
            >
              <Mail className="mr-3 text-blue-600 flex-shrink-0" size={20} />
              <a href="mailto:aktbusinesscoaching@gmail.com" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                aktbusinesscoaching@gmail.com
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-start justify-start"
            >
              <MapPin className="mr-3 text-blue-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">
                3rd Floor Suite<br />
                207 Regent Street<br />
                London, UK
              </span>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 mt-6 border-t border-blue-200 text-left flex justify-between items-center">
        <p className="text-sm sm:text-base">
          © 2025 AkT. All rights reserved.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://calendly.com/aktbusinesscoaching/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm text-base overflow-hidden"
        >
          <span className="relative z-10">Book Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
