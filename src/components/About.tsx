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

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Transform Your{" "}
            <span className="text-blue-600">Business Journey</span>
          </h2>

          <div className="text-lg text-gray-600 space-y-6 mb-12">
            <p className="relative inline-block">
              30+ years of entrepreneurial success,
              <span className="block text-blue-600 font-semibold mt-2">
                Now helping founders unlock their greatness
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-4"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center min-h-[500px] relative z-10">
            <div className="relative flex items-center justify-start">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden max-w-[60%] mx-auto ml-24"
              >
                <img
                  src="/public/assets/about.png"
                  alt="Alexandros Tziranis"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-sm shadow-sm"
                >
                  Your Journey Matters
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  You're in the right place
                </h3>
              </div>

              <div className="space-y-6 text-gray-600">
                <div className="space-y-6">
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="text-xl leading-relaxed"
                  >
                    I've walked the path of entrepreneurship, faced the
                    challenges, and discovered the keys to success. Now, I'm
                    here to guide you through your journey.
                  </motion.p>

                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="text-xl leading-relaxed"
                  >
                    With expertise in engineering, finance, and psychology, I
                    bring a unique perspective to help you navigate the
                    complexities of business growth.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-blue-600 font-semibold text-xl">
              Growing at the Speed of Trust
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
