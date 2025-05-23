
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
      {/* Animated path elements in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>
        
        <div className="absolute -left-10 top-1/3 w-20 h-20 rounded-full bg-blue-300 opacity-10 animate-pulse"></div>
        <div className="absolute right-1/4 top-1/2 w-32 h-32 rounded-full bg-indigo-300 opacity-10 animate-pulse delay-700"></div>
        <div className="absolute left-1/3 bottom-1/4 w-24 h-24 rounded-full bg-blue-400 opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/2f91ecf5-0509-425f-8412-80cb318ab6c8.png" 
          alt="AKT Logo - Growing at the Speed of Trust" 
          className="h-16 w-16"
        />
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-3 text-blue-600 font-medium px-4 py-1 bg-blue-50 rounded-full shadow-sm">
            Begin Your Transformational Journey
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            I help founders reconnect with{" "}
            <span className="relative inline-block">
              their greatness
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 rounded"></div>
            </span>
          </h1>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg mb-8 inline-block shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-xl font-medium">
              Embrace your best self and unlock peak performance
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-lg group"
              onClick={() => window.open('https://intro.co/AlexandrosTziranis', '_blank')}
            >
              Begin Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className="animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-8 h-12 border-2 border-blue-500 rounded-full p-1 flex items-center justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
