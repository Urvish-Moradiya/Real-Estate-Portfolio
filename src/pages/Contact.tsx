
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-estate-beige">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-estate-charcoal/80 max-w-3xl">
              Have a project in mind? We'd love to hear about it. Get in touch with our team.
            </p>
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
