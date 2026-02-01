"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src, alt }: { src?: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center normalized (-1 to 1)
    const moveX = (e.clientX - centerX) / (width / 2);
    const moveY = (e.clientY - centerY) / (height / 2);
    
    x.set(moveX * 20); // Move image 20px
    y.set(moveY * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={ref} 
      className="w-full h-full overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="w-[110%] h-[110%] absolute -left-[5%] -top-[5%] bg-neutral-800"
        style={{ x: springX, y: springY }}
      >


         {/* Placeholder gradient or actual image */}
         <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black absolute inset-0" />
         {src && (
           <Image 
             src={src} 
             alt={alt} 
             fill
             className="object-cover opacity-80 hover:opacity-100 transition-opacity"
           />
         )}
      </motion.div>
    </div>
  );
}
