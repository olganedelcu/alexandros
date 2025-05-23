import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your business coaching different?",
      answer: "Unlike traditional coaching that focuses solely on business metrics, I help founders reconnect with their greatness and unlock their full potential. My approach combines strategic business guidance with personal development, ensuring you not only grow your business but also evolve as a leader. We don't just work on what you do, but who you are becoming."
    },
    {
      question: "How long does the coaching process take?",
      answer: "The coaching journey is unique to each founder. While some see significant shifts in 3-6 months, others prefer longer-term engagement for sustained growth. We work at your pace, focusing on meaningful progress rather than arbitrary timelines. The goal is to create lasting transformation, not quick fixes."
    },
    {
      question: "What results can I expect from coaching?",
      answer: "You can expect to see improvements in both your business performance and personal leadership. This includes clearer vision and strategy, better decision-making, improved team dynamics, increased revenue, and most importantly, a stronger connection to your purpose and potential. Many clients report feeling more confident, focused, and aligned with their goals."
    },
    {
      question: "How do we work together?",
      answer: "We begin with a deep dive into your current situation, challenges, and aspirations. Our sessions combine strategic planning, mindset work, and practical implementation. You'll receive personalized guidance, accountability, and support between sessions. The process is collaborative, with you driving the agenda and me providing the framework and expertise."
    },
    {
      question: "Is this coaching suitable for my business stage?",
      answer: "Yes, my coaching is designed for founders at various stages - from early-stage startups to established businesses. Whether you're looking to launch, scale, or transform your business, we can adapt the approach to your specific needs and challenges. The focus is always on helping you achieve your next level of success."
    }
  ];

  return (
    <div id="faq" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Header Content */}
          <div className="flex flex-col items-start">
            <p className="text-xs md:text-sm bg-blue-100 border border-blue-300 rounded-md pl-2 pr-3 md:pl-2 md:pr-4 py-1.5 md:py-2 text-black mb-4">
              <span className="inline-block w-6 h-6 bg-primary rounded-sm mr-4 align-middle"></span>
              <span className="text-black">FAQ</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about business coaching? Find quick answers to common questions about my approach and how we can work together.
            </p>
          </div>

          {/* Right Column - Questions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
                style={{
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-800 pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <Minus className="w-6 h-6 text-primary" />
                      ) : (
                        <Plus className="w-6 h-6 text-primary" />
                      )}
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 