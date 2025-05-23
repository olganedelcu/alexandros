
import { ArrowDown } from "lucide-react";

const Approach = () => {
  return (
    <section className="py-20 bg-blue-50 relative">
      {/* Journey connector element */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative">
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full shadow-md">
            <ArrowDown className="text-blue-600" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Your Journey Through The 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Multi-Modal Perspective Matrix</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
            <div className="absolute -right-8 top-8 w-24 h-24 rounded-full bg-blue-100 opacity-50"></div>
            <div className="absolute -left-8 bottom-8 w-32 h-32 rounded-full bg-indigo-100 opacity-50"></div>
            
            <p className="text-lg text-gray-600 mb-10">
              That's why I developed the Multi-Modal Perspective Matrix (MMPM)—a method that 
              helps you tap into unknown resources, unlock hidden strengths, and see opportunities 
              you didn't know were possible.
            </p>
            
            <div className="relative">
              {/* Connecting line for journey steps */}
              <div className="absolute top-16 left-1/2 h-2 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block"></div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center relative">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md relative z-10">
                    <span className="text-3xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3">Simplify Complexities</h3>
                  <p className="text-gray-600">
                    Break down overwhelming challenges into manageable, actionable steps that create clarity and direction.
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md relative z-10">
                    <span className="text-3xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3">Drive Impact</h3>
                  <p className="text-gray-600">
                    Create meaningful changes that transform your business and mindset, leading to tangible outcomes.
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md relative z-10">
                    <span className="text-3xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3">Craft Success</h3>
                  <p className="text-gray-600">
                    Develop strategies that lead to sustainable business success and personal fulfillment.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mt-10 italic">
              It's a tool I've spent years refining, working with people like you: builders, 
              dreamers, and explorers who want more out of life and business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
