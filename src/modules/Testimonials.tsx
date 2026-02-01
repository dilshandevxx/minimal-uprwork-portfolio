"use client";
import { motion } from "framer-motion";

const testimonials = [
  "Exceptional attention to detail.",
  "Seamless communication and delivery.",
  "The animations are simply next level.",
  "Transformed our digital presence completely.",
  "A true creative partner.",
  "Highly recommended for premium web work."
];

export default function Testimonials() {
  return (
    <section className="py-32 overflow-hidden bg-neutral-900/50">
       <div className="mb-16 px-6 md:px-12 text-center">
         <span className="text-secondary uppercase tracking-widest text-sm">What they say</span>
       </div>
       
       <div className="relative flex w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
             {[...testimonials, ...testimonials, ...testimonials].map((text, i) => (
                <div key={i} className="text-4xl md:text-6xl font-bold tracking-tighter text-white/20 hover:text-white/80 transition-colors cursor-default">
                   {text}
                </div>
             ))}
          </motion.div>
       </div>
    </section>
  );
}
