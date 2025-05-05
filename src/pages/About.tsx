
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, Building2, Check, Users, Layers, Phone, Mail } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Company Overview */}
        <CompanyOverview />
        
        {/* Mission and Vision */}
        <MissionVision />
        
        {/* Our Expertise */}
        <Expertise />
        
        {/* Our Process */}
        <Process />
        
        {/* Leadership Team */}
        <Leadership />
        
        {/* Quick Contact */}
        <QuickContact />
        
      </main>
      <Footer />
    </>
  );
};

const HeroSection = () => {
  return (
    <section 
      className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")' }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            Building Excellence <br />Since 2005
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            We are SereneEstate, a premier construction company specializing in creating spaces that inspire, endure, and exceed expectations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="hover:bg-estate-300 text-white btn-hover-slide">
                Contact Us
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/30">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompanyOverview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Crafting Excellence in <span className="text-gradient">Construction</span>
            </h2>
            
            <p className="text-lg mb-6 text-estate-charcoal/80">
              Since our founding in 2005, SereneEstate has established itself as a leader in the construction industry, delivering exceptional projects across the commercial and residential sectors.
            </p>
            
            <p className="mb-8 text-estate-charcoal/80">
              Our team of dedicated professionals brings decades of combined experience to every project, ensuring the highest standards of quality, safety, and innovation. We pride ourselves on our attention to detail, commitment to sustainable practices, and ability to transform our clients' visions into reality.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-estate mb-2">20+</div>
                <p className="text-sm text-estate-charcoal/70">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-estate mb-2">200+</div>
                <p className="text-sm text-estate-charcoal/70">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-estate mb-2">85+</div>
                <p className="text-sm text-estate-charcoal/70">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-estate mb-2">40+</div>
                <p className="text-sm text-estate-charcoal/70">Industry Awards</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Commercial project" 
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Residential project" 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1613553497126-a44624272634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Interior design" 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern building" 
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-estate-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-estate-charcoal/80">
            Guided by our core values, we strive to transform the construction industry and build a better future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div 
            className={`bg-white p-10 rounded-lg shadow-md transform transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-playfair font-bold mb-4 text-estate">Our Mission</h3>
            <p className="mb-6 text-estate-charcoal/80">
              To deliver exceptional construction and development services that exceed client expectations, while maintaining the highest standards of quality, safety, and sustainability.
            </p>
            <ul className="space-y-3">
              {["Quality Excellence", "Client Satisfaction", "Innovation", "Sustainability"].map((value, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-estate mr-2 h-5 w-5" />
                  <span className="text-estate-charcoal">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div 
            className={`bg-white p-10 rounded-lg shadow-md transform transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-playfair font-bold mb-4 text-estate">Our Vision</h3>
            <p className="mb-6 text-estate-charcoal/80">
              To be recognized as the premier construction company known for integrity, innovation, and transformative projects that positively impact communities and the built environment.
            </p>
            <p className="text-estate-charcoal/80">
              We envision a future where sustainable construction practices are the standard, where spaces are designed with both functionality and human experience in mind, and where we continue to push the boundaries of what's possible in the industry.
            </p>
          </div>
        </div>
        
        <div 
          className={`mt-16 p-10 bg-estate text-white rounded-lg shadow-md transform transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <h3 className="text-2xl font-playfair font-bold mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Integrity</h4>
              <p className="text-sm text-white/80">We conduct business with honesty, transparency, and ethical standards.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Excellence</h4>
              <p className="text-sm text-white/80">We pursue excellence in every aspect of our work, exceeding expectations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Innovation</h4>
              <p className="text-sm text-white/80">We embrace new ideas, technologies, and methods to improve continuously.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Collaboration</h4>
              <p className="text-sm text-white/80">We value partnerships with clients, communities, and team members.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Expertise</h2>
          <p className="text-estate-charcoal/80">
            With specialized teams and extensive experience, we deliver exceptional results across various construction sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Commercial Construction */}
          <div 
            className={`transform transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-72 overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Commercial Construction" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-playfair font-bold text-white">Commercial Construction</h3>
              </div>
            </div>
            
            <p className="mb-6 text-estate-charcoal/80">
              We specialize in developing sophisticated commercial spaces that combine functionality with striking design. From corporate headquarters to retail complexes, our commercial construction services cover:
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                "Office Buildings & Corporate Campuses",
                "Retail & Shopping Centers",
                "Hospitality & Restaurants",
                "Medical Facilities & Healthcare Centers",
                "Mixed-Use Developments",
                "Industrial & Manufacturing Facilities"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-estate mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-estate-charcoal/90">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/services" className="text-estate font-medium flex items-center hover:text-estate-dark transition-colors">
              Learn More About Commercial Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          {/* Residential Construction */}
          <div 
            className={`transform transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative h-72 overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1613553497126-a44624272634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Residential Construction" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-playfair font-bold text-white">Residential Construction</h3>
              </div>
            </div>
            
            <p className="mb-6 text-estate-charcoal/80">
              Our residential projects range from luxurious single-family homes to multi-unit developments, all built with attention to detail and a focus on creating spaces where people love to live. Our residential services include:
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                "Custom Luxury Homes",
                "Multi-Family Residences",
                "Residential Complexes",
                "Home Renovations & Additions",
                "Sustainable Home Building",
                "Interior Design & Finishing"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-estate mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-estate-charcoal/90">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/services" className="text-estate font-medium flex items-center hover:text-estate-dark transition-colors">
              Learn More About Residential Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Additional Services */}
        <div 
          className={`mt-16 p-8 border border-estate-light rounded-lg bg-estate-beige/30 transform transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <h3 className="text-xl font-playfair font-bold mb-4">Additional Specialized Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-estate">Sustainable Building</h4>
              <p className="text-sm text-estate-charcoal/80">
                Environmentally conscious construction methods and LEED-certified sustainable building practices that reduce environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-estate">Renovation & Restoration</h4>
              <p className="text-sm text-estate-charcoal/80">
                Breathing new life into existing structures while preserving historical elements and enhancing functionality and aesthetics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-estate">Design-Build Services</h4>
              <p className="text-sm text-estate-charcoal/80">
                Integrated approach combining design and construction services for streamlined project delivery and enhanced collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We begin with a thorough consultation to understand your vision, requirements, and objectives."
    },
    {
      number: "02",
      title: "Planning & Design",
      description: "Our team develops comprehensive plans, including 3D renderings, timelines, and budget estimates."
    },
    {
      number: "03",
      title: "Pre-Construction",
      description: "We handle permits, finalize contracts, and prepare the site for construction start."
    },
    {
      number: "04",
      title: "Construction",
      description: "Our skilled craftsmen execute the construction with precision, following strict quality standards."
    },
    {
      number: "05",
      title: "Quality Assurance",
      description: "Rigorous quality checks are performed throughout the construction process to ensure excellence."
    },
    {
      number: "06",
      title: "Project Completion",
      description: "Final inspections and handover of your completed project, with ongoing support and warranty."
    },
  ];
  
  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-estate-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Process</h2>
          <p className="text-white/80">
            A structured approach that transforms your vision into reality, ensuring a smooth and transparent journey from concept to completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg transform transition-all duration-700 hover:bg-white/10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-playfair font-bold text-estate mb-4 opacity-50">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/process">
            <Button className="bg-white text-estate-charcoal hover:bg-estate hover:text-white">
              Learn More About Our Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  const team = [
    {
      name: "Jonathan Reynolds",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "With over 30 years in construction, Jonathan founded SereneEstate with a vision to transform the industry through innovation and excellence."
    },
    {
      name: "Sarah Chen",
      role: "Chief Architect",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Award-winning architect with expertise in sustainable design and a passion for creating spaces that blend functionality with aesthetic beauty."
    },
    {
      name: "Michael Thompson",
      role: "Construction Director",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      description: "Oversees all construction operations, ensuring projects are delivered on time, within budget, and to the highest quality standards."
    },
    {
      name: "Emily Rodriguez",
      role: "Client Relations Manager",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      description: "Dedicated to ensuring exceptional client experiences throughout the construction journey from initial concept to project completion."
    },
  ];
  
  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Leadership Team</h2>
          <p className="text-estate-charcoal/80">
            Meet the experienced professionals who guide our company with vision, expertise, and a commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className={`bg-estate-light-gray rounded-lg overflow-hidden shadow-md transform transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-estate font-medium mb-3">{member.role}</p>
                <p className="text-sm text-estate-charcoal/80">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-estate-charcoal/80 max-w-2xl mx-auto mb-6">
            Our leadership team is supported by a talented staff of project managers, designers, engineers, and craftsmen who share our commitment to quality and client satisfaction.
          </p>
          <Link to="/careers">
            <Button className="bg-estate text-white hover:bg-estate-dark">
              Join Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const QuickContact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-16 bg-estate-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={`max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-playfair font-bold mb-6">Get In Touch</h2>
              <p className="mb-6 text-estate-charcoal/80">
                Have a project in mind or questions about our services? We'd love to hear from you. Reach out to our team today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-estate mr-4 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold text-estate-charcoal">Phone</h4>
                    <p className="text-estate-charcoal/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-estate mr-4 h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold text-estate-charcoal">Email</h4>
                    <p className="text-estate-charcoal/70">info@sereneestate.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-estate text-white hover:bg-estate-dark w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
