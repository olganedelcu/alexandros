
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 relative">
      {/* Journey connector element with enhanced animation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <motion.div 
          className="w-1 h-20 bg-gradient-to-b from-blue-500 to-indigo-700 rounded-full relative"
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <ArrowDown className="text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            y: [0, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-0 w-full h-px bg-blue-400 opacity-10"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            y: [0, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute top-2/4 left-0 w-full h-px bg-blue-300 opacity-10"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.08, 0.05],
            y: [0, -8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 left-0 w-full h-px bg-blue-300 opacity-10"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
          className="absolute -left-20 top-1/3 w-60 h-60 rounded-full bg-blue-400 opacity-10 blur-xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute -right-20 top-2/3 w-80 h-80 rounded-full bg-indigo-400 opacity-10 blur-xl"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block mb-4">
              <motion.div 
                className="absolute inset-0 rounded-full bg-blue-500/20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <img 
                src="/lovable-uploads/2f91ecf5-0509-425f-8412-80cb318ab6c8.png" 
                alt="AKT Logo" 
                className="h-20 w-20 mx-auto mb-4 filter invert relative z-10"
              />
            </div>
            <motion.h3 
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Alexandros Tziranis
            </motion.h3>
            <motion.p 
              className="text-blue-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Growing at the Speed of Trust
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="border-t border-blue-800/50 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-4">
              Ready to unlock your greatness? Book your consultation today.
            </p>
            <motion.a 
              href="https://intro.co/AlexandrosTziranis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              https://intro.co/AlexandrosTziranis
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-10 pt-8 border-t border-blue-800/50 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>&copy; 2024 Alexandros Tziranis. All rights reserved.</p>
            <motion.p 
              className="mt-2 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Your journey to greatness begins here
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
