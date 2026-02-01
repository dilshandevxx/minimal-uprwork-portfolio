"use client";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDownRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  function handleMouseMove({ clientX, clientY }: { clientX: number; clientY: number }) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }
  
  return (
    <section 
      className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-[#0a0a0a]"
      onMouseMove={handleMouseMove}
    >
      {/* Liquid Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute rounded-full bg-white opacity-[0.03] blur-[100px]"
            style={{ 
              top: ySpring, 
              left: xSpring, 
              width: 600, 
              height: 600, 
              translateX: "-50%", 
              translateY: "-50%" 
            }} 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen animate-spin-slow" />
      </div>

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-[1]"
        style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="z-10 max-w-[90vw]">
        <TextReveal 
          text="I design & build" 
          className="text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-foreground leading-[0.9]"
          delay={0.1}
        />
        <TextReveal 
          text="immersive digital" 
          className="text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-secondary leading-[0.9]" 
          delay={0.3}
        />
        <TextReveal 
          text="experiences." 
          className="text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-foreground leading-[0.9]"
          delay={0.5} 
        />
        
        <div className="flex gap-6 mt-16 ml-2">
           <MagneticButton className="px-8 py-4 rounded-full bg-foreground text-background font-medium text-lg flex items-center gap-3 group hover:bg-neutral-200 transition-colors">
              View Work
              <ArrowDownRight className="group-hover:rotate-45 transition-transform duration-300" />
           </MagneticButton>
        </div>
      </div>
    </section>
  );
}
