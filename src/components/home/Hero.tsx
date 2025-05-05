import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight text-balance overflow-hidden ${isVisible ? '' : 'opacity-0'}`}
        >
          <span className="block overflow-hidden">
            <span 
              className="inline-block transform transition-transform duration-1000" 
              style={{ 
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                transitionDelay: '0.3s'
              }}
            >
              Designing Dreams,
            </span>
          </span>
          <span className="block overflow-hidden mt-2">
            <span 
              className="inline-block transform transition-transform duration-1000" 
              style={{ 
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                transitionDelay: '0.6s'
              }}
            >
              Building Reality
            </span>
          </span>
        </h1>
        
        <p 
          className="text-lg text-white/90 max-w-2xl mx-auto mb-8 transform transition-all duration-1000"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.9s'
          }}
        >
          Premium real estate developments crafted with precision, designed with passion, and built to stand the test of time.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 transform transition-all duration-1000"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1.2s'
          }}
        >
          <Link to="/projects">
            <Button size="lg" className="hover:bg-estate-300 text-white btn-hover-slide">
              Explore Projects
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white text-white hover:bg-white/30"
            onClick={() => window.location.href = "#contact"}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Hero;
