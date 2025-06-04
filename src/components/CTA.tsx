import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ana from "../assets/ana.jpeg";
import donald from "../assets/donald.jpg";
import katerian from "../assets/katerian.jpg";
import ailyn from "../assets/ailyn.jpeg";
import savvas from "../assets/savvas.jpg";
import miruna from "../assets/miruna.jpeg";
import { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xqabapor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus("success");
      setEmail("");
      toast.success("Thanks for subscribing! We'll keep you updated.");
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus("error");
      setErrorMessage("Failed to subscribe. Please try again later.");
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-2xl p-12 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  opacity: [0.1, 0.2, 0.1] 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "easeInOut"
                }}
                className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl"
              />
              
              <motion.div 
                animate={{ 
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                  opacity: [0.1, 0.15, 0.1] 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  delay: 2,
                  ease: "easeInOut"
                }}
                className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400 opacity-20 blur-3xl"
              />

              <motion.div 
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -30, 0],
                  opacity: [0.1, 0.15, 0.1] 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 22,
                  delay: 1,
                  ease: "easeInOut"
                }}
                className="absolute left-1/3 top-1/3 w-60 h-60 rounded-full bg-indigo-300 opacity-20 blur-3xl"
              />
            </div>

            <div className="relative z-10 text-center text-white">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2.5 bg-gradient-to-r from-blue-100/90 to-indigo-100/90 rounded-full text-blue-600 font-medium text-xs shadow-sm mb-8 border border-blue-200/50 min-w-[200px]"
              >
                <span className="mr-2">📚</span>Stay Connected
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">
                Join Our Community
              </h2>
              
              <p className="text-xl mb-3 opacity-90">
                Get early access to upcoming workshops, courses, and exclusive content.
              </p>
              <p className="text-xl mb-6 opacity-90">
                Be the first to know about new opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <img src={donald} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={ana} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={savvas} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={katerian} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={ailyn} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                  <img src={miruna} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-blue-400" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1 rounded-full text-xs sm:text-sm">
                  <span className="sm:hidden">Join 60+ Founders</span>
                  <span className="hidden sm:inline">Join 60+ Founders</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-1 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    disabled={status === "loading"}
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-400/90 to-blue-600/90 hover:from-blue-500/90 hover:to-blue-700/90 text-white px-8 py-3 text-base font-semibold shadow-lg relative overflow-hidden group whitespace-nowrap"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      "Subscribing..."
                    ) : status === "success" ? (
                      "Subscribed!"
                    ) : (
                      <>
                        Stay Alert
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                      </>
                    )}
                  </Button>
                </div>
                {errorMessage && (
                  <p className="text-red-300 text-sm mt-2">{errorMessage}</p>
                )}
                {status === "success" && (
                  <p className="text-green-300 text-sm mt-2">Thanks for subscribing! We'll keep you updated.</p>
                )}
              </form>

              <p className="text-sm text-white/80">
                Get exclusive updates on upcoming workshops, courses, and events
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
