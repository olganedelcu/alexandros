import { motion } from "framer-motion";

const Approach = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-violet-300 opacity-10 blur-2xl"
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
          className="absolute -right-10 top-2/3 w-40 h-40 rounded-full bg-indigo-300 opacity-10 blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute left-1/3 top-1/4 w-40 h-40 rounded-full bg-blue-200 opacity-10 blur-2xl"
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2.5 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-full text-violet-600 font-medium text-xs shadow-sm mb-8 border border-violet-200 min-w-[200px]"
            >
              <span className="mr-2">💡</span>The New Way
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-8">
              The Power of {" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Purpose in Business</span>
            </h2>
          </motion.div>

          {/* Top Section - Image and Title Card */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-2xl p-12 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden h-full flex items-center backdrop-blur-sm"
            >
              <div className="relative z-10 space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold"
                >
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Multi-Modal Perspective Matrix</span>
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
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)] border-[1px] sm:border-[2px] border-transparent bg-gradient-to-br from-violet-400 to-indigo-600 p-[1px] sm:p-[2px]"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  <motion.img
                    src="/assets/pic.jpeg"
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
            {/* Step 1 - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-2xl p-16 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden w-[65%] ml-auto mr-0 mb-16 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center shadow-md mx-auto mb-8"
                >
                  <span className="text-2xl font-bold text-white">1</span>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-4 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Simplify Complexities</span>
                </h3>
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
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-2xl p-16 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden w-[65%] mr-auto ml-0 mb-16 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center shadow-md mx-auto mb-8"
                >
                  <span className="text-2xl font-bold text-white">2</span>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-4 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Drive Impact</span>
                </h3>
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
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-2xl p-16 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden w-[65%] ml-auto mr-0 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center shadow-md mx-auto mb-8"
                >
                  <span className="text-2xl font-bold text-white">3</span>
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-4 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Craft Success</span>
                </h3>
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
