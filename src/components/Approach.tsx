import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Approach = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-32 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 bottom-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 top-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-blue-300 to-indigo-400"
        />
      </div>

      {/* Journey connector element */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <motion.div 
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative"
        >
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
            <ArrowDown className="text-blue-600" />
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Image and Title Card */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-[0_0_15px_rgba(79,70,229,0.3)] relative overflow-hidden h-full flex items-center"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              
              <div className="relative z-10 space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold text-gray-800"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Multi-Modal Perspective Matrix</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-600 italic"
                >
                  It's a tool I've spent years refining, working with people like you: builders, 
                  dreamers, and explorers who want more out of life and business.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-600"
                >
                  That's why I developed the Multi-Modal Perspective Matrix (MMPM)—a method that 
                  helps you tap into unknown resources, unlock hidden strengths, and see opportunities 
                  you didn't know were possible.
                </motion.p>
              </div>
            </motion.div>

            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] mx-auto">
              <motion.div
                whileHover={{ scale: 1.03 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(79,70,229,0.3)] border-[1px] sm:border-[2px] border-transparent bg-gradient-to-br from-blue-400 to-indigo-600 p-[1px] sm:p-[2px]"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  <motion.img
                    src="/public/assets/pic.jpeg"
                    alt="Multi-Modal Perspective Matrix"
                    className="w-full h-auto object-cover filter brightness-105 contrast-105"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "550px",
                      objectFit: "cover",
                      boxShadow: "inset 0 0 20px rgba(79,70,229,0.2)"
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="max-w-6xl mx-auto relative">
            {/* Animated Connecting Lines */}
            <motion.div 
              animate={{
                scaleY: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-400 -translate-x-1/2"
            >
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full -translate-x-1/2 translate-y-1/2"
              />
            </motion.div>
            
            {/* Animated Curved Path */}
            <motion.svg 
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 right-0 top-0 bottom-0 w-full h-full pointer-events-none" 
              style={{ zIndex: 0 }}
            >
              <path
                d="M 45% 20% C 50% 20%, 50% 40%, 55% 40% C 60% 40%, 60% 60%, 45% 60% C 30% 60%, 30% 80%, 55% 80%"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </motion.svg>
            
            {/* Step 1 - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl relative overflow-hidden w-[45%] ml-auto mr-0 mb-16"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              <motion.div 
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 -top-4 w-8 h-8 bg-blue-50 rounded-full border-2 border-blue-400 -translate-x-1/2"
              />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center shadow-md mx-auto mb-6"
                >
                  <span className="text-2xl font-bold text-white">1</span>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Simplify Complexities</h3>
                <p className="text-gray-600 text-center">
                  Break down overwhelming challenges into manageable, actionable steps that create clarity and direction.
                </p>
              </div>
            </motion.div>

            {/* Step 2 - Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl relative overflow-hidden w-[45%] mr-auto ml-0 mb-16"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              <motion.div 
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 -top-4 w-8 h-8 bg-blue-50 rounded-full border-2 border-blue-400 -translate-x-1/2"
              />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center shadow-md mx-auto mb-6"
                >
                  <span className="text-2xl font-bold text-white">2</span>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Drive Impact</h3>
                <p className="text-gray-600 text-center">
                  Create meaningful changes that transform your business and mindset, leading to tangible outcomes.
                </p>
              </div>
            </motion.div>

            {/* Step 3 - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl relative overflow-hidden w-[45%] ml-auto mr-0"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              <motion.div 
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 -top-4 w-8 h-8 bg-blue-50 rounded-full border-2 border-blue-400 -translate-x-1/2"
              />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center shadow-md mx-auto mb-6"
                >
                  <span className="text-2xl font-bold text-white">3</span>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Craft Success</h3>
                <p className="text-gray-600 text-center">
                  Develop strategies that lead to sustainable business success and personal fulfillment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
