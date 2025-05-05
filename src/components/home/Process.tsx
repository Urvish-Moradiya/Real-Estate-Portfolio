
import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { 
  CalendarCheck, 
  PenTool, 
  HardHat, 
  House, 
  CheckSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Consultation",
    icon: CalendarCheck,
    description: "We begin by understanding your unique vision and requirements through in-depth consultations with our expert team."
  },
  {
    id: 2,
    title: "Design & Planning",
    icon: PenTool,
    description: "Our architects and designers create detailed plans and visualizations, incorporating your ideas while optimizing for functionality."
  },
  {
    id: 3,
    title: "Construction",
    icon: HardHat,
    description: "Our skilled craftspeople bring your vision to life using premium materials and adhering to the highest quality standards."
  },
  {
    id: 4,
    title: "Quality Assurance",
    icon: CheckSquare,
    description: "Rigorous inspections at every phase ensure that your property exceeds industry standards and meets our exacting criteria."
  },
  {
    id: 5,
    title: "Handover",
    icon: House,
    description: "We deliver your completed property with comprehensive documentation and support to ensure a seamless transition."
  }
];

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section ref={sectionRef} id="process" className="py-24 bg-estate-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process: Built on Trust & Precision</h2>
          <p className="text-estate-charcoal/70">
            A transparent journey from concept to reality, where each step is executed with meticulous attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`transform transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-estate rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="relative mb-4">
                  <span className="text-3xl font-bold text-estate">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-estate-charcoal mb-2">{step.title}</h3>
                <p className="text-estate-charcoal/70 text-sm flex-grow">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/3 w-8 h-1 bg-estate-light transform translate-x-3"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/process">
            <Button className="bg-estate hover:bg-estate-dark text-white btn-hover-slide">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
