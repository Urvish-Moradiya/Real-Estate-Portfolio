
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { useEffect } from "react";
import bg from "../assets/contact.jpg";


const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
      <div>
          <div
            className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
            }}
          >
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-white/90 max-w-3xl">
                Have a project in mind? We'd love to hear about it. Get in touch with our team. 
                </p>
              </div>
            </div>
          </div>
        </div>
       
        
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
