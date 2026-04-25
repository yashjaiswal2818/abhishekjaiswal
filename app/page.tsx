import MouseBackground from "@/components/MouseBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import ImpactNumbers from "@/components/ImpactNumbers";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MouseBackground />
      <Navbar />
      <main className="relative z-10">
        <div className="h-[104px] md:h-[96px]" />
        <Hero />
        <Works />
        <ImpactNumbers />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
