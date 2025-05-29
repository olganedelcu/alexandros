import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const pyramidLevels = [
  {
    level: 1,
    title: "Environment",
    description: "Where you operate - geography or space",
    color: "from-violet-600 to-indigo-600",
  },
  {
    level: 2,
    title: "Behavior",
    description: "Actions you take - how you behave",
    color: "from-violet-700 to-indigo-700",
  },
  {
    level: 3,
    title: "Skills and Abilities",
    description: "What you can do - what you are good at",
    color: "from-violet-600 to-indigo-600",
  },
  {
    level: 4,
    title: "Beliefs and Values",
    description: "What you stand for - your principles",
    color: "from-violet-700 to-indigo-700",
  },
  {
    level: 5,
    title: "Identity",
    description: "Who you truly are - what makes YOU",
    color: "from-violet-800 to-indigo-800",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-violet-100 via-violet-200 to-violet-300 relative overflow-hidden"
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
          className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-violet-500 opacity-10 blur-2xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2.5 bg-violet-200 rounded-full text-violet-900 font-medium text-xs shadow-sm mb-8 border border-violet-300 min-w-[200px]"
          >
            <span className="mr-2">💡</span>Your Identity is the Secret
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The {" "}
            <span className="bg-gradient-to-r from-violet-800 via-indigo-800 to-violet-900 bg-clip-text text-transparent">Identity Pyramid</span>
          </h2>

          <p className="text-lg text-gray-800 mb-12">
            True growth requires working deeper—not just increasing sales calls or chasing revenue.
            Money and growth follow when founders have a solid sense of identity and purpose.
          </p>
        </motion.div>

        {/* Pyramid Visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {pyramidLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`bg-gradient-to-r ${level.color} rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Level {level.level}: {level.title}
                      </h3>
                      <p className="text-white/90">{level.description}</p>
                    </div>
                    <div className="text-white text-2xl font-bold">
                      {level.level}
                    </div>
                  </div>
                </div>
                {index < pyramidLevels.length - 1 && (
                  <div className="absolute left-1/2 -bottom-4 w-0.5 h-4 bg-gradient-to-b from-violet-700 to-transparent" />
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
      </div>
    </section>
  );
};

export default About;
