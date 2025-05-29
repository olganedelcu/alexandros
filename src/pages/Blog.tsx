import { motion } from "framer-motion";
import { Feed } from "../components/Feed";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-8 border border-blue-200 min-w-[200px]"
          >
            <span className="mr-2">📚</span>Latest Insights
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6">
            Building {" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent filter blur-[0.3px]">
              Digital Stories
            </span>
          </h1>

          <p className="text-lg text-gray-600">
            Thoughts on Software Engineering, Documentation, and Community
          </p>
        </motion.div>

        <Feed />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Blog; 