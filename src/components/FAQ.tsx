import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What makes your business coaching different?",
      answer: "I don't do fluff. I don't sell you frameworks from a textbook. I listen deep, challenge hard, and unlock what's already inside you, fast. My MMPM method is based on tested, real, and built for high-stakes clarity and bold results. This isn't about more information. It's about transformation."
    },
    {
      question: "How long does the coaching process take?",
      answer: "Long enough to break patterns. Short enough to make change real. Some founders get what they need in a few powerful sessions. Others stay for months because the growth doesn't stop. There's no one-size-fits-all. You come in when you're ready, you stay if it's working."
    },
    {
      question: "What results can I expect from coaching?",
      answer: "You'll get clarity. You'll get options you couldn't see before. You'll gain access to resources you thought you never had. You'll move faster, make bolder decisions, and break through blocks that held you back for years. You'll stop overthinking and start doing. And if we're a good fit, the shift will feel undeniable."
    },
    {
      question: "How do we work together?",
      answer: "We talk. We go deep. We don't waste time. You bring the truth, I bring the mirror. We meet online or in person, 1:1 or with your core team — and we work through your biggest questions and roadblocks. You get personalized, actionable guidance. And I follow up. I stay close. Because your results matter to me."
    },
    {
      question: "Is this coaching suitable for my business stage?",
      answer: "If you're just looking for tips, tricks, or someone to agree with you — probably not. But if you're building, scaling, stuck, or on the edge of something bigger, then this is the right time. I work with early-stage founders and seasoned entrepreneurs alike. Stage doesn't matter. Readiness does."
    }
  ];

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