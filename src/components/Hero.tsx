
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
      {/* Enhanced animated path elements in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.08, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.03, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"
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
            duration: 15,
            ease: "easeInOut"
          }}
          className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-blue-300 opacity-10 blur-2xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
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
            duration: 12,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute left-1/3 bottom-1/4 w-48 h-48 rounded-full bg-blue-400 opacity-10 blur-2xl"
        ></motion.div>
      </div>
      
      <motion.div 
        className="absolute top-8 left-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img 
          src="/lovable-uploads/2f91ecf5-0509-425f-8412-80cb318ab6c8.png" 
          alt="AKT Logo - Growing at the Speed of Trust" 
          className="h-16 w-16"
        />
      </motion.div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-3 text-blue-600 font-medium px-4 py-1 bg-blue-50 rounded-full shadow-sm"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Begin Your Transformational Journey
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I help founders reconnect with{" "}
            <span className="relative inline-block">
              <span>their greatness</span>
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              ></motion.div>
            </span>
          </motion.h1>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg mb-8 inline-block shadow-lg"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <p className="text-xl font-medium">
              Embrace your best self and unlock peak performance
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-lg group"
              onClick={() => window.open('https://intro.co/AlexandrosTziranis', '_blank')}
            >
              Begin Your Journey
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
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
