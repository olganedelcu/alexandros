import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import ana from "../assets/ana.jpeg";
import donald from "../assets/donald.jpg";
import katerian from "../assets/katerian.jpg";
import roland from "../assets/rolandlo.jpeg";

interface TestimonialProps {
  name: string;
  role: string;
  company?: string;
  quote: string;
  imageUrl?: string;
  companyLogo?: string;
  whatsappScreenshot?: string;
  type?: "standard" | "whatsapp";
}

const StarRating = () => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-blue-400 text-blue-400"
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  name,
  role,
  company,
  quote,
  imageUrl,
  companyLogo,
  whatsappScreenshot,
  type = "standard"
}: TestimonialProps) => {
  if (type === "whatsapp") {
    return (
      <motion.div 
        className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-[0_0_20px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={whatsappScreenshot}
          alt="WhatsApp testimonial"
          className="w-full h-auto rounded-lg shadow-md"
        />
        {companyLogo && (
          <div className="mt-4 flex justify-center">
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className="h-8 w-auto object-contain"
            />
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-[0_0_20px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-6">
        {imageUrl && (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 shadow-md">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {companyLogo && (
          <div>
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className="h-8 w-auto object-contain"
            />
          </div>
        )}
      </div>
      
      <div className="text-center mb-4">
        <p className="font-bold text-gray-800 text-lg">{name}</p>
        <p className="text-blue-600 text-sm mb-2">{role}</p>
      </div>

      <p className="text-lg text-gray-700 mb-6 italic relative">
        {quote}
      </p>

      <div className="h-[1px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 opacity-50 mb-4"></div>

      <div className="flex justify-center mb-4">
        <StarRating />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 opacity-70"></div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Jilian",
      role: "Trade Exporter",
      quote: "You are a magician!",
      imageUrl: ana,
      companyLogo: ana
    },
    {
      name: "Alla",
      role: "Food Industry Owner",
      quote: "Your out-of-the-box thinking provided a fresh perspective on my challenges.",
      imageUrl: ana,
      companyLogo: ana
    },
    {
      name: "Ana N.",
      role: "Career Coach",
      quote: "If I were a new entrepreneur and had this problem, with no idea how to solve it, I would contact you.",
      imageUrl: ana,
      companyLogo: ana
    },
    {
      name: "Κaterina B.",
      role: "Founder",
      quote: "I am grateful I have the opportunity to collaborate with you, as you are such a strong spirit reinforcing humans to align with what is needed for  accomplishment, in natural and practical way.",
      imageUrl: katerian
    },
    {
      name: "Donald C.",
      role: "Real Estate Agent",
      quote: "The biggest lesson I learned was the power of simplicity—communicating clearly without overthinking, creating a more significant impact. His wealth of knowledge is unmatched, and I emerged a stronger business leader because of his guidance.",
      imageUrl: donald,
      companyLogo: roland
    },
    {
      name: "Savvas A.",
      role: "CEO/Founder",
      quote: "All I can say about Alexandros is that he is brilliant. He has taken great interest in the project I have taken on. I highly recommend him for any coaching.",
      imageUrl: savvas,
    },
    {
      name: "WhatsApp Client",
      role: "Tech Founder",
      quote: "",
      type: "whatsapp",
      whatsappScreenshot: ana,
      companyLogo: ana
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
          className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-violet-300 opacity-10 blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute -right-10 top-2/3 w-40 h-40 rounded-full bg-indigo-300 opacity-10 blur-2xl"
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2.5 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-full text-violet-600 font-medium text-xs shadow-sm mb-8 border border-violet-200 min-w-[200px]"
            >
              <span className="mr-2">💫</span>Client Stories
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-8">
              I've helped <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">60+ International Founders</span>
            </h2>
            <p className="text-base text-gray-600 mb-12">
              Hear from our successful founders! See how we've helped them transform their businesses, unlock hidden potential, and achieve growth they never thought possible.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
