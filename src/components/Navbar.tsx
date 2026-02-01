"use client";
import Link from "next/link";
import { useState } from "react";
import MagneticButton from "./ui/MagneticButton";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full p-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference text-white">
      <Link href="/" className="text-xl font-bold tracking-tighter uppercase relative z-50">
        Folio
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <MagneticButton key={link.name}>
             <Link href={link.href} className="text-sm uppercase font-medium tracking-widest hover:text-gray-300 transition-colors">
               {link.name}
             </Link>
          </MagneticButton>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden relative z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
           <motion.div 
             initial={{ opacity: 0, y: "-100%" }} 
             animate={{ opacity: 1, y: 0 }} 
             exit={{ opacity: 0, y: "-100%" }}
             transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
             className="fixed inset-0 bg-[#0a0a0a] flex flex-col justify-center items-center gap-8 md:hidden z-40"
           >
             {navLinks.map((link) => (
               <Link 
                 key={link.name} 
                 href={link.href} 
                 className="text-5xl font-bold uppercase tracking-tighter" 
                 onClick={() => setIsOpen(false)}
               >
                 {link.name}
               </Link>
             ))}
           </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
