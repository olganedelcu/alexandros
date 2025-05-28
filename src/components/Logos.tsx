import React from 'react';
import jobstiesLogo from '@/assets/logojobsties.png';
import rolandLogo from '@/assets/arbol.png';
import anotherLogo from '@/assets/anotherlogo.jpeg';
import harvestHarmonicsLogo from '@/assets/harvest.png';
import hegemonicLogo from '@/assets/hegemonic_logo.jpeg';
import masterMillerLogo from '@/assets/mastermiller.png';

const Logos = () => {
  return (
    <section className="py-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            <div className="flex items-center justify-center gap-1">
            <div className="relative w-40 md:w-48 h-10 md:h-12 group">
                <img
                  src={anotherLogo}
                  alt="Another Logo"
                  className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
             <div className="relative w-40 md:w-48 h-10 md:h-12 group">
                <img
                  src={jobstiesLogo}
                  alt="Jobsties Logo"
                  className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="relative w-40 md:w-48 h-10 md:h-12 group">
                <img
                  src={rolandLogo}
                  alt="Roland Logo"
                  className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>

             

              <div className="relative w-40 md:w-48 h-10 md:h-12 group">
                <img
                  src={harvestHarmonicsLogo}
                  alt="Harvest Harmonics Logo"
                  className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="relative w-40 md:w-48 h-10 md:h-12 group">
                <img
                  src={hegemonicLogo}
                  alt="Hegemonic Logo"
                  className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="relative w-40 md:w-48 h-10 md:h-12 group">
                <img
                  src={masterMillerLogo}
                  alt="The Master Miller Logo"
                  className="object-contain w-full h-full filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos; 