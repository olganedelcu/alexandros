import React from 'react';
import { Clock, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <section id="packages" className="relative min-h-screen flex items-start justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
          className="absolute top-[85%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My Offer
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            No off-the-shelf programs. Fully customized for you and your case coaching, based on my 35+ years business experience and MMPM methodology™.
          </p>
          <p className="text-xl font-medium text-blue-600 mb-16">
            Just raw clarity, fast shifts, and high-impact results.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-12">
            Choose the depth you're ready for:
          </h3>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Tier 1 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tier 1 — The Tactical Hit
              </h3>
              <div className="space-y-4 text-left">
                <p className="text-gray-600 font-medium">1:1 Power Session (90 min)</p>
                <p className="text-gray-500 text-sm">Perfect for: Founders who are stuck, scaling, or spiraling and need a direct hit of clarity and options.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• A focused 90-minute deep dive</li>
                  <li>• Bring the chaos, get options</li>
                  <li>• Rapid-fire insight, reframing, and direction</li>
                  <li>• Immediate action points and clarity</li>
                  <li>• Optional: Recording + written summary</li>
                </ul>
                <p className="text-blue-600 font-bold text-xl mt-6">€450 / session</p>
              </div>
            </motion.div>

            {/* Tier 2 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tier 2 — The Founder Sprint
              </h3>
              <div className="space-y-4 text-left">
                <p className="text-gray-600 font-medium">1-Month Intensive (4 sessions + chat support)</p>
                <p className="text-gray-500 text-sm">Perfect for: Founders ready to make serious moves, quickly.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• 4 x 60-min weekly strategy & clarity sessions</li>
                  <li>• Personalized integration of the MMPM method</li>
                  <li>• Voice/Chat support between calls for momentum</li>
                  <li>• Clear roadmap, creative options, and sharp decisions</li>
                  <li>• Identify blind spots. Build confidence. Move forward.</li>
                </ul>
                <p className="text-blue-600 font-bold text-xl mt-6">€1,500 / month</p>
                <p className="text-gray-500 text-sm italic">Optional: Includes diagnostic assessment + custom founder map.</p>
              </div>
            </motion.div>

            {/* Tier 3 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tier 3 — The Full Partner
              </h3>
              <div className="space-y-4 text-left">
                <p className="text-gray-600 font-medium">High-Stakes Advisory Retainer (3–6 months)</p>
                <p className="text-gray-500 text-sm">Perfect for: Founders who want a thinking partner and strategic guide in their corner for long-term.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Bi-weekly 90-min sessions (custom cadence available)</li>
                  <li>• Personalized voice & chat support</li>
                  <li>• Participation in high-level negotiations or team strategy sessions</li>
                  <li>• Revenue, brand, and positioning insight</li>
                  <li>• Ongoing transformation, execution & recalibration</li>
                </ul>
                <p className="text-blue-600 font-bold text-xl mt-6">Starting at €5,000 / month</p>
                <p className="text-gray-500 text-sm italic">Bonus: Includes full access to proprietary tools, deck/offer reviews, and on-demand perspective when stakes are high.</p>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-lg relative overflow-hidden"
              onClick={() => window.open('https://calendly.com/aktbusinesscoaching/', '_blank')}
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages; 