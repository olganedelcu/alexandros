import { motion } from "framer-motion";

const pyramidLevels = [
  {
    level: 1,
    title: "Environment",
    description: "Where you operate - geography or space",
    color: "from-violet-50 via-indigo-50 to-blue-100",
  },
  {
    level: 2,
    title: "Behavior",
    description: "Actions you take - how you behave",
    color: "from-violet-50 via-indigo-50 to-blue-100",
  },
  {
    level: 3,
    title: "Skills and Abilities",
    description: "What you can do - what you are good at",
    color: "from-violet-50 via-indigo-50 to-blue-100",
  },
  {
    level: 4,
    title: "Beliefs and Values",
    description: "What you stand for - your principles",
    color: "from-violet-50 via-indigo-50 to-blue-100",
  },
  {
    level: 5,
    title: "Identity",
    description: "Who you truly are - what makes YOU",
    color: "from-violet-50 via-indigo-50 to-blue-100",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden"
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
          className="absolute -left-10 top-1/3 w-32 md:w-40 h-32 md:h-40 rounded-full bg-blue-300 opacity-10 blur-2xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-8 md:mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-6 md:mb-8 border border-blue-200 min-w-[180px] md:min-w-[200px]"
          >
            <span className="mr-2">💡</span>Your Identity is the Secret
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-4 md:mb-8">
            The Power of {" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px]">Purpose in Business</span>
          </h2>

          <motion.p 
            whileHover={{ x: 5 }}
            className="text-base md:text-lg leading-relaxed text-gray-600 mb-8 md:mb-12 px-2 md:px-0"
          >
            Purpose is what turns resilience into a habit, not a chore. It's what keeps you creative when the road ahead looks uncertain. When your purpose is crystal clear, everything begins to align:
          </motion.p>
        </motion.div>

        {/* Pyramid Visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 md:space-y-4">
            {pyramidLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${level.color} rounded-xl p-4 md:p-6 shadow-sm border border-violet-200 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                        <span className="bg-gradient-to-r from-violet-400 via-indigo-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">
                          Level {level.level}: {level.title}
                        </span>
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">{level.description}</p>
                    </div>
                    <div className="text-blue-600 text-xl md:text-2xl font-bold flex-shrink-0">
                      {level.level}
                    </div>
                  </div>
                </div>
                {index < pyramidLevels.length - 1 && (
                  <div className="absolute left-1/2 -bottom-3 md:-bottom-4 w-0.5 h-3 md:h-4 bg-gradient-to-b from-violet-200/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <div className="relative inline-block">
            <p className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px] font-semibold text-lg md:text-xl">
              Growing at the Speed of Trust
            </p>
            <motion.div 
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-200/50 via-blue-400 to-blue-600 rounded"
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
      </div>
    </section>
  );
};

export default About;
