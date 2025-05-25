import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "You are a magician!",
      author: "Jilian",
      role: "Trade Exporter"
    },
    {
      quote: "Your out-of-the-box thinking provided a fresh perspective on my challenges.",
      author: "Alla",
      role: "Food Industry Owner"
    },
    {
      quote: "If I were a new entrepreneur and had this problem, with no idea how to solve it, I would contact you.",
      author: "Ana",
      role: "Career Coach"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
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
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
              <span className="mr-2">💫</span>Client Stories
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-8">
              I've helped <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">60+ International Founders</span>
            </h2>
            <p className="text-base text-gray-600 mb-12">
              Hear from our successful founders! See how we've helped them transform their businesses, unlock hidden potential, and achieve growth they never thought possible.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-[0_0_20px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700">
                    <Quote className="text-white w-6 h-6" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6 italic relative">
                  <span className="font-serif text-5xl text-blue-400 absolute -top-4 -left-1 opacity-20">"</span>
                  {testimonial.quote}
                  <span className="font-serif text-5xl text-blue-400 absolute -bottom-10 -right-1 opacity-20">"</span>
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 opacity-70"></div>
                <motion.div 
                  className="border-t border-blue-200 pt-4 mt-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
