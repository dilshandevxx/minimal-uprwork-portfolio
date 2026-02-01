"use client";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white pt-32 pb-12 px-6 md:px-12 flex flex-col justify-between">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-4 flex-grow">
        
        {/* Top Left: Name/Branding */}
        <div className="col-span-1 md:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl font-bold uppercase tracking-wider mb-4 leading-tight">
              Adam<br/>Roberts
            </h1>
            <div className="flex items-start gap-2 text-xs text-neutral-500 max-w-[200px] font-mono">
              <span className="mt-1">↳</span>
              <p>
                Grilled Pixels is my personal brand - I came up with it in 2004 based on &quot;cooking up ideas&quot;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Top Center-Right: Header */}
        <div className="col-span-1 md:col-span-3 md:col-start-9 md:text-right">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="text-xl font-bold uppercase tracking-wider leading-tight"
           >
             Design &<br/>Engineering
           </motion.h2>
        </div>

        {/* Middle Row: Content */}
        
        {/* "What I Do" */}
        <div className="col-span-1 md:col-span-2 md:col-start-4 flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
           >
             <h3 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-widest">What I Do</h3>
             <p className="text-sm font-medium leading-relaxed text-neutral-300">
               I create the top 1% of experiences for brands and digital products
             </p>
           </motion.div>
        </div>

        {/* Centerpiece: The "G" / Showreel */}
        <div className="col-span-1 md:col-span-2 md:col-start-6 relative h-[300px] md:h-auto flex items-center justify-center">
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="relative w-full aspect-square bg-neutral-900 overflow-hidden group cursor-pointer"
           >
             {/* Abstract Monogram Placeholder - Replace with actual Image/Video */}
             <div className="absolute inset-0 flex items-center justify-center text-[10rem] font-bold text-neutral-800 font-pixel">
               G
             </div>
             
             {/* Play Button Overlay */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <div className="border border-white/20 bg-black/50 px-6 py-3 flex items-center gap-3 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-colors">
                   <Play size={12} fill="currentColor" /> Play Showreel
                </div>
             </div>
           </motion.div>
        </div>

        {/* Services List */}
        <div className="col-span-1 md:col-span-2 md:col-start-9 flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.3 }}
           >
             <h3 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-widest">Services</h3>
             <ul className="text-sm space-y-2 text-neutral-300">
               <li>Branding</li>
               <li>Creative Direction & Strategy</li>
               <li>UX/UI Design</li>
               <li>Web Development (React/NextJS)</li>
               <li>3D, WebGL / Photography</li>
               <li>Video & Animation</li>
             </ul>
           </motion.div>
        </div>

      </div>

      {/* Bottom Section: Headline */}
      <div className="mt-20 md:mt-0">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter">
            I Bring The<br/>
            <span className="italic text-neutral-300">Unexpected</span> To<br/>
            Brand & Digital<br/>
            <span className="italic text-neutral-300">Experiences</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase text-neutral-500"
      >
        <div className="flex items-center gap-2">
           <span>Open to freelance, contract or full-time.</span>
           <a href="#contact" className="text-white underline hover:no-underline">Schedule a call</a>
        </div>
        
        <div className="flex items-center gap-6 mt-4 md:mt-0">
           <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded">
              <span className="font-bold text-white">FWA</span> x1
           </div>
           <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded">
              <span className="font-bold text-white">W.</span> x7
           </div>
           <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded">
              <span className="font-bold text-white">CSSDesignAwards</span> x22
           </div>
        </div>
      </motion.div>

    </section>
  );
}
