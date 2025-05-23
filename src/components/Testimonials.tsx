import { ArrowDown, Quote } from "lucide-react";
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100 opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-indigo-100 opacity-40 animate-pulse delay-700"></div>
      </div>
      
      {/* Journey connector element with enhanced animation */}
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
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
            <ArrowDown className="text-blue-600" />
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey Stories</span> From My Clients
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center shadow-lg relative overflow-hidden"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/10">
                    <Quote className="text-blue-600 w-6 h-6" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6 italic relative">
                  <span className="font-serif text-5xl text-blue-500 absolute -top-4 -left-1 opacity-20">"</span>
                  {testimonial.quote}
                  <span className="font-serif text-5xl text-blue-500 absolute -bottom-10 -right-1 opacity-20">"</span>
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-70"></div>
                <motion.div 
                  className="border-t border-blue-100 pt-4 mt-auto"
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
