"use client";
import { motion } from "framer-motion";
import { Code, PenTool, Layout, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description: " crafting visually stunning and user-centric designs that tell your brand's story.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "Development",
    description: "Building robust, scalable, and performant web applications using modern technologies.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Interaction",
    description: "Adding life to interfaces with smooth animations and intuitive micro-interactions.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Mobile First",
    description: "Ensuring your experience looks and feels responsive and perfect on every device.",
    icon: <Smartphone className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="mb-24">
         <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"><span className="text-secondary">02.</span> Services</h2>
         <div className="w-full h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-6 border border-white/5 hover:border-white/20 transition-colors rounded-sm min-h-[300px] flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-secondary group-hover:text-white transition-colors duration-300">
               {service.icon}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-secondary/60 group-hover:text-secondary transition-colors duration-300 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
            
            {/* Animated bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
