import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from '@/data/faqs';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Background elements */}
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-8 border border-blue-200 min-w-[200px]"
            >
              <span className="mr-2">🎩</span>FAQ
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
              Got Questions? <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">I've Got Answers</span>
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Everything you need to know about working with me, no pitch just raw, authentic answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 