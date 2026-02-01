"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // In a real app, unwrap params if needed or use directly. Next.js 14 params are objects.
  const { slug } = params;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-24 relative overflow-hidden">
         <Link href="/" className="fixed top-8 left-8 z-50 mix-blend-difference text-white flex items-center gap-2 group hover:opacity-70 transition-opacity">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
         </Link>
         
         <motion.h1 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-8 break-words"
         >
           {slug.replace(/-/g, " ")}
         </motion.h1>
         
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="flex gap-12 text-lg md:text-xl text-secondary"
         >
           <div>
             <span className="block text-sm text-secondary/50 uppercase tracking-widest mb-2">Role</span>
             Design & Development
           </div>
           <div>
             <span className="block text-sm text-secondary/50 uppercase tracking-widest mb-2">Year</span>
             2024
           </div>
         </motion.div>
      </section>

      {/* Case Study Content */}
      <section className="px-6 md:px-12 pb-32 max-w-5xl mx-auto">
        <p className="text-2xl md:text-4xl leading-relaxed text-secondary mb-24 font-medium">
          A deep dive into the process behind {slug}. We focused on creating a seamless user experience that balances aesthetics with performance.
        </p>
        
        <div className="space-y-16">
           <div className="aspect-video bg-neutral-900 rounded-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
             <div className="aspect-square bg-neutral-900 rounded-sm relative overflow-hidden">
                 <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
             </div>
             <div className="aspect-square bg-neutral-900 rounded-sm relative overflow-hidden">
                 <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
             </div>
           </div>
           
           <div className="max-w-2xl">
               <h3 className="text-3xl font-bold mb-6">The Challenge</h3>
               <p className="text-xl text-secondary leading-relaxed">
                   The main challenge was to create a navigation system that feels intuitive yet unique. We experimented with various motion primitives before settling on the magnetic interaction.
               </p>
           </div>
        </div>
      </section>
      
      {/* Footer / Next Project */}
      <section className="h-[50vh] bg-neutral-900 flex items-center justify-center flex-col gap-4">
         <div className="text-secondary uppercase tracking-widest text-sm">Next Project</div>
         <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Coming Soon</h2>
      </section>
    </main>
  );
}
