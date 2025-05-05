
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/use-in-view";

// Create a simple counter animation component
const AnimatedCounter = ({ end, duration = 2000, className = "" }: { end: number; duration?: number; className?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return (
    <span ref={nodeRef} className={className}>
      {count}
    </span>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 bg-estate-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Legacy of <span className="text-gradient">Excellence</span></h2>
            
            <p className="text-lg mb-6 text-estate-charcoal/80">
              For over two decades, SereneEstate has been crafting exceptional living spaces that balance aesthetic beauty with practical functionality. Our commitment to quality and attention to detail has established us as leaders in luxury real estate development.
            </p>
            
            <p className="mb-8 text-estate-charcoal/80">
              From conceptualization to completion, we partner with our clients to transform their vision into reality, creating spaces that reflect their unique lifestyle and aspirations.
            </p>
            
            <Link to="/about">
              <Button className="bg-estate hover:bg-estate-dark text-white btn-hover-slide">
                Discover Our Story
              </Button>
            </Link>
          </div>
          
          <div className={`grid grid-cols-2 gap-8 transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-estate mb-2">
                <AnimatedCounter end={20} className="animate-count-up" />+
              </div>
              <p className="text-estate-charcoal/70 font-medium">Years of Experience</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-estate mb-2">
                <AnimatedCounter end={100} className="animate-count-up" />+
              </div>
              <p className="text-estate-charcoal/70 font-medium">Projects Completed</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-estate mb-2">
                <AnimatedCounter end={75} className="animate-count-up" />+
              </div>
              <p className="text-estate-charcoal/70 font-medium">Happy Clients</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-estate mb-2">
                <AnimatedCounter end={40} className="animate-count-up" />+
              </div>
              <p className="text-estate-charcoal/70 font-medium">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
