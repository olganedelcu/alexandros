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
      </div>

      {/* Journey connector element */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative">
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
            <ArrowDown className="text-blue-600" />
          </div>
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
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-100/30 blur-3xl"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[400px] relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-medium text-sm">
                    Your Journey Matters
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    You're in the right place
                  </h3>
                </div>

                <div className="space-y-6 text-gray-600">
                  <div className="p-8">
                    <p className="text-lg leading-relaxed mb-6">
                      I've walked the path of entrepreneurship, faced the
                      challenges, and discovered the keys to success. Now, I'm
                      here to guide you through your journey.
                    </p>

                    <p className="text-lg leading-relaxed">
                      With expertise in engineering, finance, and psychology, I
                      bring a unique perspective to help you navigate the
                      complexities of business growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-30"></div>
              
                <div className="relative rounded-lg overflow-hidden border-4 border-blue-200 shadow-lg max-w-[60%] mx-auto mt-8 ml-32">
                  <img
                    src="/src/assets/alexandros.png"
                    alt="Alexandros Tziranis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-blue-600 font-semibold text-lg">
                Growing at the Speed of Trust
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
