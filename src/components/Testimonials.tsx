
import { ArrowDown } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "You are a magician!",
      author: "Jilian",
      role: "Trade Exporter"
    },
    {
      quote: "Your out-of-the-box thinking provided a fresh perspective on my challenges.",
      author: "Alla",
      role: "Food Industry Owner"
    },
    {
      quote: "If I were a new entrepreneur and had this problem, with no idea how to solve it, I would contact you.",
      author: "Ana",
      role: "Career Coach"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Journey connector element */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
        <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative">
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
            <ArrowDown className="text-blue-600" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey Stories</span> From My Clients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative">
                <div className="text-5xl text-blue-600 mb-4 opacity-80">"</div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-70"></div>
                <div className="border-t border-blue-100 pt-4 mt-auto">
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
