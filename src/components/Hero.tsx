
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="absolute top-8 left-8">
        <img 
          src="/lovable-uploads/2f91ecf5-0509-425f-8412-80cb318ab6c8.png" 
          alt="AKT Logo - Growing at the Speed of Trust" 
          className="h-16 w-16"
        />
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            I help founders reconnect with{" "}
            <span className="relative">
              their greatness
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded"></div>
            </span>
          </h1>
          
          <div className="bg-blue-600 text-white py-4 px-8 rounded-lg mb-8 inline-block">
            <p className="text-xl font-medium">
              Embrace your best self and unlock peak performance
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://intro.co/AlexandrosTziranis', '_blank')}
            >
              Book a Call
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
