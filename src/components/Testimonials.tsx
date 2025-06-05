import { Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ana from "../assets/ana.jpeg";
import donald from "../assets/donald.jpg";
import katerian from "../assets/katerian.jpg";
import roland from "../assets/rolandlo.jpeg";
import savvas from "../assets/savvas.jpg";
import whatsapp1 from "../assets/whatsapp1.jpg";
import jobsties from "../assets/jobsties.png";
import ailyn from "../assets/ailyn.jpeg";
import olga from "../assets/olga.png";
import ana2 from "../assets/ana.png";
import whatolgitis from "../assets/whatolgitis.png";
import olvie from "../assets/olvie.jpeg";
import oliveguy from "../assets/oliveguy.png";
import sub from "../assets/sub.jpeg";
import talento_hub_logo from "../assets/talento_hub_logo.jpeg";
import random from "../assets/randon.jpg";
import anundi from "../assets/anundi.jpeg";
import nuture from "../assets/nuture.jpeg";
import dg from "../assets/dg.jpeg";


interface TestimonialProps {
  name?: string;
  role?: string;
  company?: string;
  quote?: string;
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
          className="h-4 w-4 fill-amber-400 text-amber-400"
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
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowReadMore = quote && quote.split('\n').length > 2;

  if (type === "whatsapp") {
    return (
      <motion.div 
        className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-[0_0_20px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {name && (
          <>
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
                <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-blue-200 shadow-md bg-white">
                  <img
                    src={companyLogo}
                    alt={`${company} logo`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )}
            </div>
            
            <div className="text-center mb-4">
              <p className="font-bold text-gray-800 text-lg">{name}</p>
              {role && <p className="text-blue-600 text-sm mb-2">{role}</p>}
            </div>
          </>
        )}

        <img
          src={whatsappScreenshot}
          alt="WhatsApp testimonial"
          className={`w-full h-auto rounded-lg shadow-md mb-4 ${name === "Olga" ? "max-w-[280px] mx-auto" : ""}`}
        />

        <div className="h-[1px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 opacity-50 mb-4"></div>

        <div className="flex justify-center mb-4">
          <StarRating />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 opacity-70"></div>
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
        {imageUrl ? (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 shadow-md">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 shadow-md bg-blue-50 flex items-center justify-center">
            <User className="w-8 h-8 text-blue-400" />
          </div>
        )}
        {companyLogo && (
          <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-blue-200 shadow-md bg-white">
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
      </div>
      
      <div className="text-center mb-4">
        <p className="font-bold text-gray-800 text-lg">{name}</p>
        <p className="text-blue-600 text-sm mb-2">{role}</p>
      </div>

      <div className="relative">
        <p className={`text-lg text-gray-700 mb-6 italic ${!isExpanded && shouldShowReadMore ? 'line-clamp-3' : ''}`}>
          {quote}
        </p>
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>

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
      name: "Mazen A.",
      role: "Founder & Head Sommelier",
      quote: "Alexandros is so knowledgeable, patient, and kind. A highly experienced business leader, who has very kindly guided me when I needed help most. Thank you Alex for all that you do.",
      imageUrl: olvie,
      companyLogo: oliveguy
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
      role: "CEO / Founder",
      quote: "All I can say about Alexandros is that he is brilliant. He has taken great interest in the project I have taken on. I highly recommend him for any coaching.",
      imageUrl: savvas,
    },
    {
      name: "Ailyn",
      role: "Director Investor Relations",
      quote: "I love the methodology in your process. Trully brilliant!",
      imageUrl: ailyn
    }, {
      name: "Malang J.",
      role: "Founder",
      quote: "It was such a success and amazing to learn from him.. one thing from him is he wants to see everyone happy and successful in life such a kind and patient person.. much love to him",
      imageUrl: random
    },
    {
      name: "Ana N.",
      role: "Founder & Career Coach",
      type: "whatsapp",
      whatsappScreenshot: ana2,
      imageUrl: ana,
      companyLogo: jobsties
    },
    {
      name: "Aachal W.",
      role: "Founder",
      quote: "Exceptional at marketing. I gained insights into new trends and interpersonal skills. He was a delight to converse with. His deep knowledge of the food industry made the session incredibly valuable.",
      imageUrl: anundi,
      companyLogo: nuture
    },
    {
      name: "Pete A.",
      role: "Vice President Real Estate & Development",
      quote: "Exceeded my ecxpectations! Alexandros is a very good listener, uplifts my confidence and has gives valuable advice to action immediately. He was so knowledgeable about my industry and I value his input highly. Extremely helpful and agreed to stay connected with me. 10/10 I would highly recommended him!",
      companyLogo: dg
    },
    {
      name: "Alla",
      role: "Food Industry Owner",
      quote: "Your out-of-the-box thinking provided a fresh perspective on my challenges."
    }, {
      name: "Shubham P.",
      role: "Founder",
      quote: "We have been working with Alexandros for a few months now, and unlike other coaches he doesn't only comes in the meetings to answer your questions, he comes with the intention of actually helping you and even if you come in with the least preparation, you get the most out of it. He genuinely cares about you and your growth.\n\nBesides that, he has knowledge in many sectors of business i.e. strategies, legal consultation, lead generation, market expansion and many more.\n\nAs a young entrepreneur, sometimes I got stuck in many aspects and found Alexandros' guidance very insightful and motivating in those times.\n\nI highly recommend Alexandros as a business coach.",
      imageUrl: sub,
      companyLogo: talento_hub_logo
    },
    {
      name: "Jilian",
      role: "Trade Exporter",
      quote: "You are a magician!"
    },
    {
      name: "Peter A.",
      role: "Business Owner",
      quote: "Totally exceeded my ecxpectations! Alexandros is a very good listener, uplifts my confidence and has gives valuable advice to action immediately. He was so knowledgeable about my industry and I value his input highly. Extremely helpful. 10/10!"    
    },
    {
      quote: "",
      type: "whatsapp",
      whatsappScreenshot: whatsapp1,
      name: "Gouri P.",
      role: "Founder",
    },
    
    {
      name: "Olga",
      role: "Co-Founder & Operations",
      type: "whatsapp",
      whatsappScreenshot: whatolgitis,
      imageUrl: olga,
      companyLogo: jobsties
    },
  ];

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
              className="inline-block px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-8 border border-blue-200 min-w-[200px]"
            >
              <span className="mr-2">💫</span>Your Stories
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-8">
               <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent filter blur-[0.3px]">60+ International Founders</span>
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
