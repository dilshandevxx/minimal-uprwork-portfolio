"use client";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Copy, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "GitHub", icon: Github, href: "#" }
  ];

  return (
    <footer className="relative bg-[#050505] text-white py-20 px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
        
        {/* Left: Call to Action */}
        <div className="flex flex-col gap-8">
          <div className="mb-4">
             <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase text-white/90">
                Let&apos;s<br />Talk
             </h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
             <MagneticButton className="px-6 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 group hover:scale-105 transition-transform">
                <span>hello@example.com</span>
                <Copy className="w-4 h-4 group-hover:rotate-12 transition-transform" />
             </MagneticButton>
             <MagneticButton className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <span>Schedule Call</span>
                <ArrowUpRight className="w-4 h-4" />
             </MagneticButton>
          </div>
        </div>

        {/* Right: Info & Links */}
        <div className="flex flex-col gap-8 w-full md:w-auto">
           <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div className="flex flex-col gap-4">
                 <span className="text-sm text-neutral-500 font-mono uppercase tracking-widest">Socials</span>
                 <div className="flex flex-col gap-2">
                    {socialLinks.map((link, i) => (
                       <a key={i} href={link.href} className="text-lg text-neutral-300 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </a>
                    ))}
                 </div>
              </div>
              
              <div className="flex flex-col gap-4">
                 <span className="text-sm text-neutral-500 font-mono uppercase tracking-widest">Location</span>
                 <p className="text-lg text-neutral-300">
                    Montreal, QC<br/>
                    {time}
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-px bg-white/10 mt-20 mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-medium">
         <p>© 2024 Folio. All rights reserved.</p>
         <p>Designed & Built by You</p>
      </div>
    </footer>
  );
}
