import Hero from "@/modules/Hero";
import About from "@/modules/About";
import Works from "@/modules/Works";
import Services from "@/modules/Services";
import Testimonials from "@/modules/Testimonials";
import Contact from "@/modules/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
    </main>
  );
}
