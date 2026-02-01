"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/ui/TextReveal";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="min-h-[80vh] flex items-center justify-center py-24 bg-background px-6 md:px-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div className="md:pt-12">
           <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
             About me
           </h2>
           <div className="text-xl md:text-2xl text-secondary leading-relaxed mb-6">
             <TextReveal text="I am a creative developer who bridges the gap between design and technology. I build websites that are not only functional but also immersive and memorable." delay={0} />
           </div>
           <p className="text-lg text-secondary/80">
             With a background in minimal design and performance engineering, I help brands stand out in the digital noise. My approach is rooted in precision, aesthetics, and user-centric interactions.
           </p>
        </div>

        {/* Image / Visual */}
        <div ref={ref} className="relative aspect-square md:aspect-[4/5] bg-neutral-900 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
           <motion.div style={{ y }} className="absolute inset-0 bg-neutral-800">
             {/* Simple Gradient Placeholder for now */}
             <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black" />
           </motion.div>
           <div className="absolute bottom-4 left-4 text-white/50 text-sm font-mono">
             [ SCROLL TO REVEAL ]
           </div>
        </div>
      </div>
    </section>
  );
}
