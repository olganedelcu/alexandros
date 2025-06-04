import { motion } from "framer-motion";

const approachSteps = [
  {
    step: 1,
    title: "Defining the Problem",
    description: "Break down overwhelming challenges into manageable, actionable steps."
  },
  {
    step: 2,
    title: "Identifying Available Resources",
    description: "Create meaningful changes that transform your business and mindset."
  },
  {
    step: 3,
    title: "Sizing the Chunks",
    description: "Develop strategies for sustainable business success."
  },
  {
    step: 4,
    title: "Allocating suitable Resources",
    description: "Strengthen your ability to adapt and overcome challenges."
  },
  {
    step: 5,
    title: "Looking at the Timeline",
    description: "Create an environment that nurtures continuous improvement."
  },
  {
    step: 6,
    title: "Exploring the MultiModal Perspective Matrix",
    description: "Discover new approaches and creative solutions."
  },
  {
    step: 7,
    title: "Future Pacing your Growth Path",
    description: "Find harmony between business success and personal fulfillment."
  }
];

const Approach = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 relative">
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
          className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-2xl"
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
          className="absolute -right-10 top-2/3 w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-2xl"
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
          className="absolute left-1/3 top-1/4 w-40 h-40 rounded-full bg-blue-300 opacity-10 blur-2xl"
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2.5 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full text-blue-700 font-medium text-xs shadow-sm mb-8 border border-blue-300 min-w-[200px]"
            >
              <span className="mr-2">💡</span>Your Journey Matters
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-8">
              The {" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Multi-Modal Perspective Matrix</span>
            </h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-lg text-gray-600 mb-12"
            >
              A 7 steps process that helps you tap into unknown resources, unlock hidden strengths, and see opportunities you didn't know were possible. For builders, dreamers, and explorers.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {approachSteps.map((step, index) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-xl p-8 shadow-[0_0_20px_rgba(37,99,235,0.4)] relative overflow-hidden backdrop-blur-sm"
              >
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md mx-auto mb-4"
                  >
                    <span className="text-xl font-bold text-white">{step.step}</span>
                  </motion.div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3 text-center">
                    <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">{step.title}</span>
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
