import { Rocket, Zap, Trophy, Heart } from 'lucide-react';
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
            className="text-center mb-12 md:mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-sm shadow-sm mb-6 border border-blue-200 min-w-[200px]"
            >
              <span className="mr-2">✨</span>Choose Your Path
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-4">
              My <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">Offer</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              No off-the-shelf programs. Fully customized for you and your case coaching, based on my 35+ years business experience and MMPM methodology™.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Package Card Template */}
            {[
              {
                icon: Rocket,
                title: "The Tactical Hit",
                description: "Perfect for: Founders who are stuck, scaling, or spiraling and need a direct hit of clarity and options.",
                features: [
                  "A focused 90-minute deep dive",
                  "Bring the chaos, get options",
                  "Rapid-fire insight, reframing, and direction",
                  "Immediate action points and clarity"
                ],
                price: "€450",
                priceText: "/ session",
                buttonText: "Get Started",
                subtext: "Optional: Recording + written summary"
              },
              {
                icon: Zap,
                title: "The Founder Sprint",
                description: "Perfect for: Founders ready to make serious moves, quickly.",
                features: [
                  "4 x 60-min weekly strategy & clarity sessions",
                  "Personalized integration of the MMPM method",
                  "Voice/Chat support between calls for momentum",
                  "Clear roadmap, creative options, and sharp decisions",
                  "Identify blind spots. Build confidence. Move forward."
                ],
                price: "€1,500",
                priceText: "/ month",
                buttonText: "Get Started",
                subtext: "Optional: Includes diagnostic assessment + custom founder map."
              },
              {
                icon: Trophy,
                title: "The Full Partner",
                description: "Perfect for: Founders who want a thinking partner and strategic guide in their corner for long-term.",
                features: [
                  "Bi-weekly 90-min sessions (custom cadence available)",
                  "Personalized voice & chat support",
                  "Participation in high-level negotiations or team strategy sessions",
                  "Revenue, brand, and positioning insight",
                  "Ongoing transformation, execution & recalibration"
                ],
                price: "€5,000",
                priceText: "/ month",
                buttonText: "Get Started",
                subtext: "Bonus: Includes full access to proprietary tools, deck/offer reviews, and on-demand perspective when stakes are high."
              },
              {
                icon: Heart,
                title: "Flexible Arrangement",
                description: "For founders with exceptional potential but limited resources.",
                features: [
                  "Custom arrangement based on your needs",
                  "Focus on high-impact outcomes",
                  "Money is not the goal here, transformation is"
                ],
                price: null,
                priceText: null,
                buttonText: "Make an Offer",
                subtext: "Tell me your story and vision"
              }
            ].map((package_, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-10 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group flex flex-col h-full"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                
                <div className="relative flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6">
                    <package_.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {package_.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-6">
                    {package_.description}
                  </p>

                  {/* Features */}
                  <ul className="text-sm text-gray-600 space-y-3 mb-8">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="mt-auto">
                    {package_.price && (
                      <div className="text-center mb-4">
                        <span className="text-xl font-bold text-gray-900">{package_.price}</span>
                        <span className="text-gray-500 ml-2 text-sm">{package_.priceText}</span>
                      </div>
                    )}
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-base font-medium shadow-sm relative overflow-hidden group mb-4"
                      onClick={() => window.open('https://calendly.com/aktbusinesscoaching/', '_blank')}
                    >
                      <span className="relative z-10">{package_.buttonText}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                    </Button>
                    <p className="text-[10px] text-gray-400 italic text-center">{package_.subtext}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl font-medium text-blue-600">
              Just raw clarity, fast shifts, and high-impact results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packages; 