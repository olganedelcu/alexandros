
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white relative">
      {/* Journey connector element */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative">
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full shadow-md">
            <ArrowDown className="text-white" />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white opacity-10"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white opacity-10"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-white opacity-10"></div>
        
        <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-blue-400 opacity-10"></div>
        <div className="absolute -right-20 top-2/3 w-60 h-60 rounded-full bg-indigo-400 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready for the next step in your journey?
          </h2>
          
          <p className="text-xl mb-10 opacity-90">
            Whether you're stuck, uncertain, or just looking for a way forward,
            you don't have to do it alone. I invite you to connect, explore, and rediscover 
            the greatness that's already inside you.
          </p>
          
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm mb-10">
            <p className="text-lg font-medium mb-6">Here's what you can do next:</p>
            <ul className="text-left max-w-2xl mx-auto space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <span>Book a call with me if you're ready to explore your path together.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <span>Check my featured posts to see how I work with people like you.</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg font-semibold">I'm here to help you take that next step.</p>
            <p className="text-2xl font-bold">
              Because you are so close.<br />
              And you are meant for <span className="text-yellow-300">greatness</span>.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg group"
              onClick={() => window.open('https://intro.co/AlexandrosTziranis', '_blank')}
            >
              Begin Your Journey Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => window.open('https://intro.co/AlexandrosTziranis', '_blank')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
