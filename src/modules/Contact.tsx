"use client";
import MagneticButton from "@/components/ui/MagneticButton";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hello@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="min-h-[80vh] bg-background flex flex-col justify-center items-center px-6 relative overflow-hidden py-32">
       <motion.h2 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="text-6xl md:text-[10rem] font-bold tracking-tighter text-center mb-16 leading-[0.8]"
       >
         Let&apos;s work <br/>
         <span className="text-secondary">together.</span>
       </motion.h2>
       
       <MagneticButton className="group relative px-8 py-4 md:px-12 md:py-6 rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-all" onClick={handleCopy}>
          <span className="text-xl md:text-3xl font-medium flex items-center gap-4 text-white">
            {email}
            {copied ? <Check className="text-green-500" /> : <Copy className="group-hover:scale-110 transition-transform" />}
          </span>
          {copied && (
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-green-500 font-mono bg-neutral-900 py-1 px-3 rounded-full border border-green-900/50"
             >
               Copied!
             </motion.span>
          )}
       </MagneticButton>
    </section>
  );
}
