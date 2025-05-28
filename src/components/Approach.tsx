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
              <span className="mr-2">💡</span>Your Journey Matters
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-8">
              The {" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Multi-Modal Perspective Matrix</span>
            </h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-12"
                >
              A 7 steps process that helps you tap into unknown resources, unlock hidden strengths, and see opportunities you didn't know were possible. For builders, dreamers, and explorers.
                </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden backdrop-blur-sm"
                >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                >
                  <span className="text-xl font-bold text-white">1</span>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Defining the Problem</span>
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Break down overwhelming challenges into manageable, actionable steps.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10">
              <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                >
                  <span className="text-xl font-bold text-white">2</span>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Identifying Available Resources</span>
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Create meaningful changes that transform your business and mindset.
                </p>
                </div>
              </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10">
              <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                >
                  <span className="text-xl font-bold text-white">3</span>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Sizing the Chunks</span>
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Develop strategies for sustainable business success.
                </p>
              </div>
            </motion.div>
            
            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                >
                  <span className="text-xl font-bold text-white">4</span>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Allocating suitable Resources</span>
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Strengthen your ability to adapt and overcome challenges.
                </p>
              </div>
            </motion.div>
            
            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                >
                  <span className="text-xl font-bold text-white">5</span>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Looking at the Timeline</span>
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Create an environment that nurtures continuous improvement.
                </p>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                >
                  <span className="text-xl font-bold text-white">6</span>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Exploring the MultiModal Perspective Matrix</span>
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Discover new approaches and creative solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 7 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                >
                  <span className="text-xl font-bold text-white">7</span>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Future Pacing your Growth Path</span>
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Find harmony between business success and personal fulfillment.
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
