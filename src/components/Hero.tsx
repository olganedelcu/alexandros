import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden pt-8">
      {/* Enhanced animated path elements in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
          className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.08, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.03, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"
        ></motion.div>
        
        {/* Floating elements with more dynamic animations */}
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
          className="absolute -left-10 top-1/4 w-40 h-40 rounded-full bg-blue-300 opacity-10 blur-2xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute right-1/4 top-1/2 w-56 h-56 rounded-full bg-indigo-300 opacity-10 blur-2xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute left-1/3 bottom-1/3 w-48 h-48 rounded-full bg-blue-400 opacity-10 blur-2xl"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-3 text-blue-600 font-medium px-4 py-2.5 bg-blue-50 rounded-full shadow-sm border border-blue-200 text-xs min-w-[200px]"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            <span className="mr-2">✨</span>Begin Your Transformational Journey
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-600 mb-6 leading-[2]"
            variants={itemVariants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8">
              I help{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px]">founders</span>
              {" "}reconnect {" "}
            </div>
            <div>
            with{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-400 via-blue-600 to-indigo-700 bg-clip-text text-transparent filter blur-[0.3px]">their greatness</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                ></motion.div>
              </span>
            </div>
          </motion.h1>
          
          <motion.div 
            className="relative mb-12"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="text-lg md:text-xl font-medium text-blue-800 py-4 px-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                className="relative"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              >
                Embrace your best self and unlock peak performance
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-indigo-200/40 to-blue-200/40 rounded-lg -z-10 blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-1/2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded"
                initial={{ width: "0%" }}
                animate={{ width: "50%" }}
                transition={{ delay: 0.9, duration: 0.7 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-lg"
              onClick={() => window.open('https://calendly.com/aktbusinesscoaching/', '_blank')}
            >
              Book a Call
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-800 hover:bg-transparent px-8 py-6 text-lg group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="flex justify-center items-center gap-8"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center px-6 py-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-lg shadow-sm border border-blue-200 w-36">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">60+</div>
              <div className="text-sm text-gray-600">Founders</div>
            </div>
            <div className="text-center px-6 py-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-lg shadow-sm border border-blue-200 w-36">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center px-6 py-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-lg shadow-sm border border-blue-200 w-40">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">1,000+</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 90% 100%, 80% 90%, 70% 100%, 60% 90%, 50% 100%, 40% 90%, 30% 100%, 20% 90%, 10% 100%, 0% 100%)'
      }}></div>

      {/* Thin curved divider */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100" style={{
        clipPath: 'ellipse(50% 200% at 50% 100%)'
      }}></div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5,
            ease: "easeInOut" 
          }}
          className="cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-8 h-12 border-2 border-blue-500 rounded-full p-1 flex items-center justify-center">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                ease: "easeInOut" 
              }}
              className="w-1 h-3 bg-blue-500 rounded-full mx-auto"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
