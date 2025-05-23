
import { ArrowDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 relative">
      {/* Journey connector element */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-indigo-700 rounded-full relative">
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full shadow-md">
            <ArrowDown className="text-blue-400" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
              <img 
                src="/lovable-uploads/2f91ecf5-0509-425f-8412-80cb318ab6c8.png" 
                alt="AKT Logo" 
                className="h-20 w-20 mx-auto mb-4 filter invert relative z-10"
              />
            </div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Alexandros Tziranis</h3>
            <p className="text-blue-300">Growing at the Speed of Trust</p>
          </div>
          
          <div className="border-t border-blue-800/50 pt-8">
            <p className="text-gray-300 mb-4">
              Ready to unlock your greatness? Book your consultation today.
            </p>
            <a 
              href="https://intro.co/AlexandrosTziranis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline transition-colors"
            >
              https://intro.co/AlexandrosTziranis
            </a>
          </div>
          
          <div className="mt-10 pt-8 border-t border-blue-800/50 text-gray-400 text-sm">
            <p>&copy; 2024 Alexandros Tziranis. All rights reserved.</p>
            <p className="mt-2 text-xs">Your journey to greatness begins here</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
