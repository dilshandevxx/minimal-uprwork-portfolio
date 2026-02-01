"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  
  return (
    <div className={cn("flex flex-wrap py-2", className)}>
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + (index * 0.1),
            ease: "easeOut"
          }}
          className="inline-block pb-2 mr-[0.2em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
