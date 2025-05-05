
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";
import CTA from "@/components/home/CTA";
import LuxuryShowcase from "@/components/home/LuxuryShowcase";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, scroll to the corresponding element
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If no hash, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <LuxuryShowcase />
        <Services />
        <Process />
        <Testimonials />
        <Blog />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
