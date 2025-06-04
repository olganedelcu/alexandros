import { motion } from "framer-motion";
import about2 from "../assets/about2.webp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Alexandros() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <Navbar />
     
      <div className="container mx-auto px-4 pt-32 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 px-4 text-center italic text-muted-foreground"
        >
          A Message for{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Builders
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          </span>
          ,{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Dreamers
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          </span>
          , and{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Explorers
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          </span>
        </motion.h1>
        <div className="max-w-4xl mx-auto">
          <div className="mb-24">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 relative group"
              >
                <img
                  src={about2}
                  alt="Alexandros"
                  className="w-full h-auto rounded-lg shadow-2xl border border-primary/20 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg animate-shine"></div>
              </motion.div>

              {/* Text section */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:w-1/2 text-muted-foreground space-y-8"
              >
                <p className="text-xl leading-relaxed">
                  So you've made it this far. Thank you for visiting. I wonder what brought you here. You're probably an entrepreneur, a founder, a business owner, or a creator.
                </p>

                <p className="text-xl leading-relaxed">
                  You might be just starting out, full of excitement and possibility. Or perhaps you've been on this path for a while, pushing forward despite all the challenges. Maybe you've hit your limit.
                </p>

                <p className="text-xl leading-relaxed">
                  You might feel stuck. Afraid to move forward. You tell yourself you don't have the knowledge, expertise, or experience needed to take the next step. Or maybe you've never done anything like this before, and the uncertainty feels overwhelming.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 text-muted-foreground">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl leading-relaxed"
            >
              The stress keeps piling on, and some days it feels like too much. Maybe you're lonely. Alone with your thoughts, the weight of decisions, and the silence that comes when no one seems to understand your struggle. You wonder if you're ready to give up.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl leading-relaxed"
            >
              But here's the truth: Whatever brought you here... You did good. You're safe. There is hope. And I can help.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-xl leading-relaxed"
            >
              I understand because I've been there. I'm also a builder. And an explorer. A sailor, really. I'm a man of the sea — a firm believer in free will, individualism, and the idea that we're meant to help each other.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl leading-relaxed"
            >
              I got all of that from my father. My father was a builder too. He built the house my family calls home now. But his legacy was much bigger than bricks and mortar. After he passed away, strangers — people I'd never met before — would come to us, sharing stories about how much my father had helped them.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-xl leading-relaxed"
            >
              They were total strangers to me. But to him, they were people who needed a hand. And he gave it. No questions asked.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-xl leading-relaxed"
            >
              But that's not all I got from my father. He gave me guidance and support. He mentored me, coached me, and sponsored my ambitions — not with money, but with a mindset. He taught me to think critically, act boldly, and believe in myself.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-xl leading-relaxed"
            >
              And because of that, I've achieved plenty. I earned degrees from the best universities in engineering, finance, and psychology. I've built businesses in multiple industries. I've worked with small teams and large organizations.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="text-xl leading-relaxed"
            >
              But none of this was handed to me. I charted my own course — just like you're charting yours. Your path is unique. So is mine.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="text-xl leading-relaxed"
            >
              And along the way, I've developed something rare: a unique set of tools, or what some might call skills. But to me, they're more than that. They're a specific mindset — a framework that reconnects you with your greatness.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="text-xl leading-relaxed"
            >
              Because we all have greatness. But we all reach that point where it seems hopeless. Where we feel helpless. When we want to give up. I know how that feels.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="text-xl leading-relaxed"
            >
              But I also know that you're closer than you think. You're meant for greatness. There's no need to throw in the towel now.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="text-xl leading-relaxed"
            >
              That's why I created the Multi-Modal Perspective Matrix — a method to tap into your unknown resources. It reveals strengths you didn't realize you had and opens up options you never thought possible.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="text-xl leading-relaxed"
            >
              It's the advantage point you need to find clarity. To feel that glimmer of hope. To experience that moment right before dawn, when the darkness begins to lift.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="text-xl leading-relaxed"
            >
              Since my father passed away, I've spent years practicing the Multi-Modal Perspective Matrix with people like you. And I've seen what it does. I've measured the results.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.4 }}
              className="text-xl leading-relaxed"
            >
              But more importantly, I've listened to the people who've used it. Their testimonials are all over my social feeds. They describe the effects better than I ever could. Because I only offer the tool. They're the ones who use it.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.6 }}
              className="text-xl leading-relaxed"
            >
              Now, I'm taking this public. I'm opening the doors. I'm inviting everyone who's searching for hope, for clarity, for a way forward.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="text-xl leading-relaxed"
            >
              I've done my part. Now, you're free to do yours. There's no obligation. Getting to know each other and growing as a community will always be free.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.0 }}
              className="text-center mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 italic">
                Because you're meant for greatness.
              </h2>
              <div className="h-0.5 w-64 mx-auto bg-gradient-to-r from-primary/30 via-primary to-primary/30"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 