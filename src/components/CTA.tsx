import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ana from "../assets/ana.jpeg";
import donald from "../assets/donald.jpg";
import katerian from "../assets/katerian.jpg";
import ailyn from "../assets/ailyn.jpeg";
import savvas from "../assets/savvas.jpg";
import miruna from "../assets/miruna.jpeg";


const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 rounded-2xl p-12 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  opacity: [0.1, 0.2, 0.1] 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "easeInOut"
                }}
                className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl"
              />
              
              <motion.div 
                animate={{ 
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                  opacity: [0.1, 0.15, 0.1] 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  delay: 2,
                  ease: "easeInOut"
                }}
                className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-300 opacity-20 blur-3xl"
              />

              <motion.div 
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -30, 0],
                  opacity: [0.1, 0.15, 0.1] 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 22,
                  delay: 1,
                  ease: "easeInOut"
                }}
                className="absolute left-1/3 top-1/3 w-60 h-60 rounded-full bg-violet-300 opacity-20 blur-3xl"
              />
            </div>

            <div className="relative z-10 text-center text-white">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-8 border border-blue-200 min-w-[200px]"
              >
                <span className="mr-2">⚡</span>Limited Time Opportunity
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">
                Ready for the next step in your journey?
              </h2>
              
              <p className="text-xl mb-6 opacity-90">
                Join our exclusive beta program today and be among the first coaches to leverage AI.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <img src={donald} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={ana} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={savvas} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={katerian} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={ailyn} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={miruna} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1 rounded-full text-xs sm:text-sm">
                  <span className="sm:hidden">Trusted by 60+ Founders</span>
                  <span className="hidden sm:inline">Trusted by 60+ Founders</span>
                </div>
              </div>
              
              <div className="space-y-8 mb-12">
                <Button 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg group"
                  onClick={() => window.open('https://calendly.com/aktbusinesscoaching/', '_blank')}
                >
                  Request A Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-white/80">
                  Limited spots available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
