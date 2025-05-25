import React from 'react';
import { Rocket, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <section id="packages" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
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
          className="absolute -left-10 top-1/3 w-20 md:w-40 h-20 md:h-40 rounded-full bg-violet-300 opacity-10 blur-2xl"
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
          className="absolute -right-10 top-2/3 w-20 md:w-40 h-20 md:h-40 rounded-full bg-indigo-300 opacity-10 blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-6 md:mb-8 border border-blue-200 min-w-[160px] md:min-w-[200px]"
            >
              <span className="mr-2">✨</span>Packages
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-3 md:mb-4">
              My <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Offer</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              No off-the-shelf programs. Fully customized for you and your case coaching, based on my 35+ years business experience and MMPM methodology™.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Tier 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex flex-col flex-grow">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <Rocket className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  The Tactical Hit
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Perfect for: Founders who are stuck, scaling, or spiraling and need a direct hit of clarity and options.</p>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">€450</span>
                  <span className="text-gray-500 ml-2 text-sm">/ session</span>
                </div>
                <ul className="text-xs md:text-sm text-gray-600 space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>A focused 90-minute deep dive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Bring the chaos, get options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Rapid-fire insight, reframing, and direction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Immediate action points and clarity</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 md:py-6 text-sm md:text-base font-medium shadow-sm relative overflow-hidden group mb-3 md:mb-4"
                    onClick={() => window.open('https://calendly.com/aktbusinesscoaching/', '_blank')}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                  </Button>
                  <p className="text-[10px] md:text-xs italic text-center">Optional: Recording + written summary</p>
                </div>
              </div>
            </motion.div>

            {/* Tier 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex flex-col flex-grow">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <Zap className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  The Founder Sprint
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Perfect for: Founders ready to make serious moves, quickly.</p>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">€1,500</span>
                  <span className="text-gray-500 ml-2 text-sm">/ month</span>
                </div>
                <ul className="text-xs md:text-sm text-gray-600 space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>4 x 60-min weekly strategy & clarity sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Personalized integration of the MMPM method</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Voice/Chat support between calls for momentum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Clear roadmap, creative options, and sharp decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Identify blind spots. Build confidence. Move forward.</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 md:py-6 text-sm md:text-base font-medium shadow-sm relative overflow-hidden group mb-3 md:mb-4"
                    onClick={() => window.open('https://calendly.com/aktbusinesscoaching/', '_blank')}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                  </Button>
                  <p className="text-[10px] md:text-xs italic text-center">Optional: Includes diagnostic assessment + custom founder map.</p>
                </div>
              </div>
            </motion.div>

            {/* Tier 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group flex flex-col md:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex flex-col flex-grow">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <Trophy className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  The Full Partner
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Perfect for: Founders who want a thinking partner and strategic guide in their corner for long-term.</p>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">€5,000</span>
                  <span className="text-gray-500 ml-2 text-sm">/ month</span>
                </div>
                <ul className="text-xs md:text-sm text-gray-600 space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Bi-weekly 90-min sessions (custom cadence available)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Personalized voice & chat support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Participation in high-level negotiations or team strategy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Revenue, brand, and positioning insight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Ongoing transformation, execution & recalibration</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 md:py-6 text-sm md:text-base font-medium shadow-sm relative overflow-hidden group mb-3 md:mb-4"
                    onClick={() => window.open('https://calendly.com/aktbusinesscoaching/', '_blank')}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                  </Button>
                  <p className="text-[10px] md:text-xs italic text-center">Bonus: Includes full access to proprietary tools, deck/offer reviews, and on-demand perspective when stakes are high.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="text-lg md:text-xl font-medium text-blue-600">
              Just raw clarity, fast shifts, and high-impact results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packages; 