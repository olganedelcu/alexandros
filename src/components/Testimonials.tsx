
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            What My Clients Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-lg text-gray-700 mb-4 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
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
