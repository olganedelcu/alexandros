
import { ArrowDown } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Journey connector element */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative">
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
            <ArrowDown className="text-blue-600" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Ready to transform your <span className="text-blue-600">business journey</span>?
          </h2>
          
          <div className="text-lg text-gray-600 space-y-6 mb-12">
            <p className="relative">
              With 30+ years of entrepreneurial experience leading 12+ successful businesses, 
              I offer personalized coaching to entrepreneurs seeking growth.
            </p>
            
            <p>
              My approach, based on the Multi-Modal Perspective Matrix model, simplifies 
              complexities, drives impactful changes, and crafts strategies that lead to business success.
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Whatever brought you here… you did good.
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold text-blue-600 text-lg">You're safe. There is hope. And I'm here to help.</p>
                
                <p>
                  I know what it's like to feel lost, to question yourself, to consider giving up. 
                  But I also know that you are meant for greatness. Sometimes, all it takes is the 
                  right guidance, the right mindset, and a fresh perspective to unlock what's already within you.
                </p>
                
                <p>
                  I've been fortunate to achieve plenty along my path—degrees in engineering, finance, 
                  and psychology, building businesses in multiple industries, and working with founders, 
                  creators, and leaders across the globe.
                </p>
                
                <p>
                  But none of that came easy. My journey was shaped by challenges, and the lessons 
                  I learned along the way gave me a unique ability to help others navigate their own.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-6 bg-white rounded-full shadow-lg">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse opacity-50"></div>
                    <img 
                      src="/lovable-uploads/2f91ecf5-0509-425f-8412-80cb318ab6c8.png" 
                      alt="AKT Logo" 
                      className="h-28 w-28 relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
