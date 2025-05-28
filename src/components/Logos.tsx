import React from 'react';
import { motion } from 'framer-motion';
import jobstiesLogo from '@/assets/logojobsties.png';
import rolandLogo from '@/assets/arbol.png';
import anotherLogo from '@/assets/anotherlogo.jpeg';
import harvestHarmonicsLogo from '@/assets/harvest.png';
import hegemonicLogo from '@/assets/hegemonic_logo.jpeg';
import masterMillerLogo from '@/assets/mastermiller.png';
import oliveguyLogo from '@/assets/oliveguy.png';

const Logos = () => {
  return (
    <section className="py-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-80 relative overflow-hidden">
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

      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative overflow-hidden px-16 md:px-32">
            <motion.div 
              className="flex items-center gap-1"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              <div className="flex items-center gap-1">
                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={anotherLogo}
                    alt="Another Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={jobstiesLogo}
                    alt="Jobsties Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={rolandLogo}
                    alt="Roland Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={harvestHarmonicsLogo}
                    alt="Harvest Harmonics Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={hegemonicLogo}
                    alt="Hegemonic Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={masterMillerLogo}
                    alt="The Master Miller Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={oliveguyLogo}
                    alt="Olive Guy Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-1">
                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={anotherLogo}
                    alt="Another Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={jobstiesLogo}
                    alt="Jobsties Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={rolandLogo}
                    alt="Roland Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={harvestHarmonicsLogo}
                    alt="Harvest Harmonics Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={hegemonicLogo}
                    alt="Hegemonic Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={masterMillerLogo}
                    alt="The Master Miller Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-10 md:h-12 group">
                  <img
                    src={oliveguyLogo}
                    alt="Olive Guy Logo"
                    className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos; 