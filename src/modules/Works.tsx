"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ParallaxImage from "@/components/ui/ParallaxImage";

const projects = [
  {
    id: 1,
    title: "Lumina",
    category: "Design / Dev",
    slug: "lumina",
    src: "https://images.unsplash.com/photo-1481487484168-9b930d5b20f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Apex",
    category: "Interaction",
    slug: "apex",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Vortex",
    category: "Branding",
    slug: "vortex",
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Novus",
    category: "Development",
    slug: "novus",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Works() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-12 md:px-24 items-center">
           {/* Intro Card */}
           <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px]">
             <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
               Selected <br/> <span className="text-secondary">Works</span>
             </h2>
             <p className="text-xl text-secondary max-w-sm">
               A collection of projects exploring the intersection of design and motion.
             </p>
           </div>
           


           {projects.map((project) => (
             <Link href={`/work/${project.slug}`} key={project.id} className="relative h-[50vh] w-[70vw] md:w-[60vh] flex flex-col gap-4 group">
               <div className="relative w-full h-full overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
                  <ParallaxImage alt={project.title} src={project.src} />
                  
                  {/* Overlay Button */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-white text-black p-3 rounded-full">
                          <ArrowUpRight strokeWidth={2} />
                      </div>
                  </div>
                  {/* Title Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10">
                      <span className="text-secondary/20 text-4xl font-bold uppercase tracking-widest">{project.title}</span>
                  </div>
               </div>
               <div className="flex justify-between items-center border-t border-white/10 pt-4">
                 <div>
                   <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
                   <span className="text-secondary text-sm uppercase tracking-widest">{project.category}</span>
                 </div>
                 <div className="text-sm font-mono opacity-50">0{project.id}</div>
               </div>
             </Link>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
