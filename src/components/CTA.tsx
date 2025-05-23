
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Whether you're stuck, uncertain, or just looking for a way forward
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            You don't have to do it alone. I invite you to connect, explore, and rediscover 
            the greatness that's already inside you.
          </p>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg">Here's what you can do:</p>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Book a call with me if you're ready to explore your path together.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Check my featured posts to see how I work with people like you.
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg font-semibold">I'm here to help you take that next step.</p>
            <p className="text-2xl font-bold">
              Because you are so close.<br />
              And you are meant for greatness.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://intro.co/AlexandrosTziranis', '_blank')}
            >
              Book Your Call Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
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
