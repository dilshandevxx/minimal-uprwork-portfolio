"use client";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDownRight } from "lucide-react";
import { GridPattern } from "@/components/ui/GridPattern";
import { motion, useMotionValue } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  return (
    <section 
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a]"
      onMouseMove={handleMouseMove}
    >

      
      {/* Background Grid */}
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={
          "absolute inset-0 h-[200%] w-[200%] skew-y-12 fill-white/5 stroke-white/5 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        }
      />
      
        {/* Content */}
      <div className="z-10 relative flex flex-col items-center text-center px-4 pt-24 md:pt-32">
        <div className="mb-4 md:mb-8">
           <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary tracking-widest uppercase mb-4">
              Portfolio 2024
           </span>
        </div>

        <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-6 mb-2 md:mb-0">
          <TextReveal 
            text="Digital" 
            className="text-5xl md:text-8xl lg:text-[6rem] xl:text-[7rem] font-bold tracking-tighter text-white leading-[0.9] uppercase"
            delay={0.1}
          />
          <TextReveal 
            text="Reality" 
            className="text-5xl md:text-8xl lg:text-[6rem] xl:text-[7rem] font-serif italic tracking-tighter text-white leading-[0.9] uppercase"
            delay={0.2} 
          />
        </div>
        <TextReveal 
          text="Architect" 
          className="text-5xl md:text-8xl lg:text-[6rem] xl:text-[7rem] font-bold tracking-tighter text-white/50 leading-[0.9] uppercase"
          delay={0.3} 
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-base md:text-lg text-secondary max-w-lg leading-relaxed font-light"
        >
          I craft immersive digital experiences that blur the line between design and technology.
        </motion.p>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1, duration: 0.5 }}
           className="mt-12"
        >
           <MagneticButton className="px-10 py-5 rounded-full bg-white text-black font-semibold text-lg flex items-center gap-3 group hover:scale-105 transition-transform">
              Explore Work
              <ArrowDownRight className="group-hover:rotate-45 transition-transform duration-300" />
           </MagneticButton>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
