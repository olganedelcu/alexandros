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
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-medium italic bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-comic">
              AkT
            </h2>
          </motion.div>
          <p className="mt-4 mb-6 text-sm sm:text-base">
            Transform your business journey with expert guidance and proven strategies for sustainable success.
          </p>
          <div className="flex justify-start space-x-6">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/alexandrostziranis/" 
              className="text-gray-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
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
              <a href="mailto:atziranis@yahoo.com" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                atziranis@yahoo.com
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center justify-start"
            >
              <Phone className="mr-3 text-blue-600 flex-shrink-0" size={20} />
              <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                +1 (234) 567-890
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-start justify-start"
            >
              <MapPin className="mr-3 text-blue-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">
                123 Business Avenue,<br />
                Suite 100, New York, NY 10001
              </span>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 mt-6 border-t border-blue-200 text-left">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} AkT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
