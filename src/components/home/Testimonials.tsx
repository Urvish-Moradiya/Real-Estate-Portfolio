
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "SereneEstate transformed our vision into a dream home beyond our expectations. Their attention to detail and commitment to quality are unmatched. The team's communication throughout the process was exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As a business owner, I needed a space that reflected our brand identity while being functional. The commercial property designed by SereneEstate has become our company's pride and significantly enhanced our work environment.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Interior Design Client",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "The interior design team has an incredible eye for detail. They listened to my preferences and created a space that feels uniquely mine while being stylish and practical. I couldn't be happier with the results.",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Real Estate Developer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    content: "Having worked with many construction firms over the years, SereneEstate stands out for their professionalism and quality. Their project management is flawless, and they consistently deliver on time and within budget.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const visibleTestimonials = 3;
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - visibleTestimonials 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 
        ? testimonials.length - visibleTestimonials 
        : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-estate-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-estate-charcoal/70">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div 
            className={`transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {testimonials.slice(activeIndex, activeIndex + visibleTestimonials).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col transition-all duration-500 hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-estate-charcoal/60">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-estate-charcoal/80 mb-4 flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Testimonial Slider */}
            <div className="md:hidden">
              {testimonials.slice(activeIndex, activeIndex + 1).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col transition-all duration-500"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-estate-charcoal/60">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-estate-charcoal/80 mb-4 flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full border-estate text-estate hover:bg-estate hover:text-white"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full border-estate text-estate hover:bg-estate hover:text-white"
                disabled={isAnimating}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
