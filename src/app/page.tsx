import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
    </main>
  );
}