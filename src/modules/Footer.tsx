"use client";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "GitHub", href: "#" }
  ];

  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-4">
        
        {/* Call To Action - Huge Pixel Text */}
        <div className="col-span-1 md:col-span-12 flex flex-col items-center text-center">
            <h2 className="text-[10vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter text-white uppercase font-pixel mb-12">
              Get_In<br/>Touch
            </h2>
            <MagneticButton className="px-8 py-4 rounded-full bg-white text-black font-bold font-mono tracking-widest hover:scale-105 transition-transform">
               hello@grilledpixels.com
            </MagneticButton>
        </div>

        {/* Footer Info Grid */}
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
            
            {/* Col 1: Brand */}
            <div className="flex flex-col justify-between h-full">
               <span className="text-xl font-bold uppercase tracking-wider">Grilled<br/>Pixels</span>
               <span className="text-xs text-neutral-500 font-mono mt-4">© 2024</span>
            </div>

            {/* Col 2: Socials */}
            <div className="flex flex-col gap-4">
               <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-2">Socials</span>
               <div className="flex flex-col gap-2">
                  {socialLinks.map((link, i) => (
                     <a key={i} href={link.href} className="text-sm font-bold uppercase hover:text-neutral-400 transition-colors flex items-center gap-2 group">
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </a>
                  ))}
               </div>
            </div>

            {/* Col 3: Location/Time */}
            <div className="flex flex-col gap-4">
               <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-2">Location</span>
               <div className="flex flex-col">
                  <span className="text-sm font-bold uppercase">Montreal, QC</span>
                  <span className="text-sm text-neutral-500 font-mono mt-1">{time} EST</span>
               </div>
            </div>

            {/* Col 4: Back to Top */}
            <div className="flex flex-col justify-end items-start md:items-end">
               <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs font-mono uppercase text-neutral-500 hover:text-white transition-colors">
                  Back to Top
                  <div className="p-2 rounded-full border border-white/10 group-hover:border-white/50 group-hover:bg-white/5 transition-all">
                     <ArrowUp className="w-4 h-4" />
                  </div>
               </button>
            </div>

        </div>

      </div>
    </footer>
  );
}
