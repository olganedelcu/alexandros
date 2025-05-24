import { ArrowDown } from "lucide-react";
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
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"
        ></motion.div>

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

        {/* Persistent Thunder Effect */}
        <div className="absolute right-0 top-0 w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              d="M50 0 L60 40 L80 20 L70 60 L90 50 L60 80 L70 100 L50 70 L30 100 L40 80 L10 50 L30 60 L20 20 L40 40 Z"
              fill="none"
              stroke="rgba(79,70,229,0.4)"
              strokeWidth="1"
              className="filter blur-[2px]"
            />
          </svg>
        </div>

        <div className="absolute left-0 bottom-0 w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M30 0 L40 30 L60 10 L50 50 L70 40 L40 70 L50 90 L30 60 L10 90 L20 70 L0 40 L20 50 L10 10 L30 30 Z"
              fill="none"
              stroke="rgba(79,70,229,0.3)"
              strokeWidth="1"
              className="filter blur-[2px]"
            />
          </svg>
        </div>
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
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px]">Business Journey</span>
          </h2>

          <motion.p 
            whileHover={{ x: 5 }}
            className="text-xl leading-relaxed text-gray-600 mb-12"
          >
            I've walked the path of entrepreneurship, faced the
            challenges, and discovered the keys to success. Now, I'm
            here to guide you through your journey.
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
                className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-xl p-8 text-left border border-blue-200 shadow-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-auto mb-6 border border-blue-200">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Vision</h3>
                <p className="text-gray-600">Develop a clear roadmap for your business growth and success</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-xl p-8 text-left border border-blue-200 shadow-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-auto mb-6 border border-blue-200">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">Embrace new ideas and approaches to stay ahead of the curve</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-xl p-8 text-left border border-blue-200 shadow-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-auto mb-6 border border-blue-200">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Growth</h3>
                <p className="text-gray-600">Scale your business with confidence and purpose</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px] font-semibold text-xl">
                Growing at the Speed of Trust
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
