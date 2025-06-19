
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const LuxuryShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] sm:min-h-[70vh] flex items-center justify-center py-16 sm:py-20"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-full">
        <div
          className={`transform transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight px-2">
            Crafting Landmark Spaces for Modern Living
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Explore premium homes designed with elegance, quality, and sustainability in mind.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-2">
            <Link to="/projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto hover:bg-estate-dark text-white btn-hover-slide">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/30"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-16 max-w-4xl mx-auto px-2">
            <div className="backdrop-blur-sm bg-black/30 py-4 sm:py-6 px-4 sm:px-6 md:px-8 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">25+</p>
              <p className="text-sm sm:text-base text-white/80">Years of Excellence</p>
            </div>
            <div className="backdrop-blur-sm bg-black/30 py-4 sm:py-6 px-4 sm:px-6 md:px-8 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</p>
              <p className="text-sm sm:text-base text-white/80">Happy Families</p>
            </div>
            <div className="backdrop-blur-sm bg-black/30 py-4 sm:py-6 px-4 sm:px-6 md:px-8 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-sm sm:text-base text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryShowcase;
