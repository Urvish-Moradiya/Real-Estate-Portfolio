
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-estate-beige">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-estate-charcoal/80 max-w-3xl">
              Comprehensive solutions tailored to meet your unique vision and requirements.
            </p>
          </div>
        </div>
        
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-xl text-center mb-8">
              This page is under construction. Soon you will be able to explore our full range of services 
              including Architecture, Interior Design, Project Management, and Turnkey Solutions.
            </p>
          </div>
        </div>
        
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Services;
