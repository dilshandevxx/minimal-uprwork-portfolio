"use client";
import Link from "next/link";
import MagneticButton from "./ui/MagneticButton";

const socials = [
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h3 className="text-2xl font-bold tracking-tighter mb-4 uppercase">Socials</h3>
          <div className="flex flex-col gap-2">
            {socials.map((link) => (
              <MagneticButton key={link.name} className="w-fit">
                <Link href={link.href} className="text-lg text-secondary hover:text-white transition-colors">
                  {link.name}
                </Link>
              </MagneticButton>
            ))}
          </div>
        </div>
        
        <div className="text-secondary/40 text-sm">
           <p>&copy; 2024 Portfolio. All rights reserved.</p>
           <p>Designed & Built with Next.js 14</p>
        </div>
      </div>
      
      {/* Big Footer Title */}
      <div className="mt-24 text-[12vw] font-bold tracking-tighter leading-none text-center opacity-10 select-none">
        FOLIO 2024
      </div>
    </footer>
  );
}
