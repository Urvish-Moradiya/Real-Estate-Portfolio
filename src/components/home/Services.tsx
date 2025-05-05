
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Brush, BarChart3, Layers } from "lucide-react";

const services = [
  {
    id: "architecture",
    title: "Architecture",
    icon: Home,
    description: "Our team of expert architects blend innovation with functionality to create structures that stand as testaments to excellence. We combine cutting-edge techniques with timeless design principles to craft spaces that inspire.",
    features: ["Custom Architectural Design", "3D Visualization", "Sustainable Planning", "Blueprint Development"]
  },
  {
    id: "interior",
    title: "Interior Design",
    icon: Brush,
    description: "Transform your space with our bespoke interior design services. Our designers work closely with you to create interiors that reflect your personal style while maximizing functionality and comfort.",
    features: ["Space Planning", "Material Selection", "Color Consultation", "Custom Furnishings"]
  },
  {
    id: "management",
    title: "Project Management",
    icon: BarChart3,
    description: "From initial concept to final execution, our project management team ensures every detail is handled with precision. We coordinate all aspects of your build to deliver on time and within budget.",
    features: ["Timeline Development", "Contractor Coordination", "Budget Management", "Quality Assurance"]
  },
  {
    id: "turnkey",
    title: "Turnkey Solutions",
    icon: Layers,
    description: "Experience the simplicity of our end-to-end solutions. We handle every aspect of your project from conception to completion, allowing you to enjoy the creative process without the stress.",
    features: ["Full-Service Development", "Integrated Workflows", "Single Point of Contact", "Comprehensive Documentation"]
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-estate-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-estate-charcoal/70">
            Comprehensive solutions tailored to meet your unique vision and requirements.
          </p>
        </div>
        
        <Tabs defaultValue="architecture" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
            {services.map((service) => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className="py-4 data-[state=active]:shadow-md data-[state=active]:bg-white data-[state=active]:text-estate border"
              >
                <service.icon className="w-5 h-5 mr-2" />
                <span>{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service) => (
            <TabsContent 
              key={service.id} 
              value={service.id} 
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h3 className="text-2xl font-playfair font-bold text-estate-charcoal mb-4">{service.title}</h3>
                  <p className="text-estate-charcoal/70 mb-6">{service.description}</p>
                  
                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-estate-charcoal/90"
                      >
                        <span className="w-2 h-2 bg-estate rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/services">
                    <Button className=" hover:bg-estate-300 text-white btn-hover-slide">
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                <div className={`bg-estate-beige rounded-lg h-64 md:h-80 flex items-center justify-center transform transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <service.icon className="w-24 h-24 text-estate opacity-40" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
