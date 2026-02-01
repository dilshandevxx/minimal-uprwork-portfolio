import Hero from "@/modules/Hero";
import About from "@/modules/About";
import Works from "@/modules/Works";
import Services from "@/modules/Services";
import Testimonials from "@/modules/Testimonials";
import Footer from "@/modules/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
