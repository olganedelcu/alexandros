import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden"
    >
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
          className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-blue-300 opacity-10 blur-2xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-8 border border-blue-200 min-w-[200px]"
          >
            <span className="mr-2">💡</span>Your Journey Matters
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-8">
            The Power of {" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px]">Purpose in Business</span>
          </h2>

          <motion.p 
            whileHover={{ x: 5 }}
            className="text-lg leading-relaxed text-gray-600 mb-12"
          >
            Purpose is what turns resilience into a habit, not a chore. It's what keeps you creative when the road ahead looks uncertain.When your purpose is crystal clear, everything begins to align:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mt-4"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-12 text-left border border-violet-200 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Consistency</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">Consistency flows effortlessly. It's easier to stay committed when you're anchored to a mission that matters.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-12 text-left border border-violet-200 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Skills</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">Skills sharpen with intention. You're motivated to grow because you know why the growth is necessary.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 rounded-xl p-12 text-left border border-violet-200 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Strategies</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">Strategies succeed with meaning. Every tactic is backed by something larger than just "getting ahead."</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-24"
            >
              <div className="relative inline-block">
                <p className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px] font-semibold text-xl">
                  Growing at the Speed of Trust
                </p>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-violet-200/50 via-violet-400 to-violet-600 rounded"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{ 
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                    width: '85%'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
