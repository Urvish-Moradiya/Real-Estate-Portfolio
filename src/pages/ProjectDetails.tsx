import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useInView } from "@/hooks/use-in-view";
import { 
  Download, 
  Map, 
  Calendar, 
  Building, 
  MapPin, 
  Shield, 
  Home, 
  Leaf,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import projects from "@/data/projects";
import AmenitiesSection from "@/components/projects/AmenitiesSection";
import FloorPlansSection from "@/components/projects/FloorPlansSection";
import DeveloperInfoSection from "@/components/projects/DeveloperInfoSection";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  
  const overviewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(overviewRef, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 min-h-[60vh]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
            <Link to="/projects">
              <Button>
                <ChevronLeft size={16} className="mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const galleryImages = [
    project.image,
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ];

  // Project stats (these would normally come from the project data)
  const projectStats = [
    { label: "Total Area", value: "125,000", unit: "sq ft" },
    { label: "Floors", value: "18", unit: "" },
    { label: "Units", value: "64", unit: "" },
    { label: "Price Range", value: "$1.2M", unit: "- $4.8M" },
  ];

  // Project features (these would normally come from the project data)
  const projectFeatures = [
    { icon: Shield, label: "24/7 Security" },
    { icon: Home, label: "Smart Home" },
    { icon: Leaf, label: "Eco-Friendly" },
  ];

  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero Image Section */}
        <div className="relative h-[60vh] md:h-[80vh] bg-estate-beige overflow-hidden w-full">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12">
            <div className="container mx-auto px-4 sm:px-6">
              <Badge
                className={`mb-3 py-1 px-3 text-sm ${
                  project.status === "completed" ? "bg-green-600" :
                  project.status === "ongoing" ? "bg-blue-600" :
                  "bg-amber-600"
                } text-white border-0`}
              >
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">{project.title}</h1>
              <p className="text-white/90 text-lg sm:text-xl">{project.location}</p>
            </div>
          </div>
        </div>
        
        {/* Overview Section */}
        <section ref={overviewRef} className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Project Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Project Overview</h2>
                <p className="text-base sm:text-lg text-estate-charcoal/80 mb-6 sm:mb-8">{project.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Project Highlights</h3>
                  <ul className="space-y-2 text-estate-charcoal/80">
                    <li className="flex items-start">
                      <span className="text-estate mr-2">•</span>
                      <span>Sustainable design with LEED Gold certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-estate mr-2">•</span>
                      <span>Floor-to-ceiling windows providing panoramic city views</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-estate mr-2">•</span>
                      <span>Custom interior finishes with premium natural materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-estate mr-2">•</span>
                      <span>Architect-designed common spaces and landscaping</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8 flex flex-wrap gap-6">
                  {projectFeatures.map((feature, index) => (
                    <HoverCard key={index}>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-2 bg-estate-beige/40 px-4 py-2 rounded-full cursor-help">
                          <feature.icon className="text-estate" size={18} />
                          <span className="font-medium">{feature.label}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">{feature.label}</h4>
                          <p className="text-sm">
                            {feature.label === "24/7 Security" && "Round-the-clock security personnel, advanced surveillance systems, and secure access controls for resident peace of mind."}
                            {feature.label === "Smart Home" && "Integrated home automation systems with remote controls for lighting, temperature, security, and entertainment."}
                            {feature.label === "Eco-Friendly" && "Energy-efficient design, solar panels, rainwater harvesting, and sustainable building materials to minimize environmental impact."}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </div>
              
              {/* Project Stats */}
              <div>
                <Card className="bg-estate-beige/30 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar size={20} className="text-estate" />
                        <div>
                          <p className="text-sm text-estate-charcoal/70">Completion</p>
                          <p className="font-medium">{project.completionDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building size={20} className="text-estate" />
                        <div>
                          <p className="text-sm text-estate-charcoal/70">Category</p>
                          <p className="font-medium capitalize">{project.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-estate" />
                        <div>
                          <p className="text-sm text-estate-charcoal/70">Location</p>
                          <p className="font-medium">{project.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-estate-charcoal/10">
                      <h4 className="font-semibold mb-4">Project Statistics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {projectStats.map((stat, index) => (
                          <div 
                            key={index} 
                            className={`p-3 rounded-lg bg-white/70 ${
                              isInView ? "animate-fade-in" : "opacity-0"
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <p className="text-sm text-estate-charcoal/70">{stat.label}</p>
                            <p className="text-xl font-semibold flex items-end">
                              {stat.value}
                              <span className="text-sm ml-1">{stat.unit}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <Button className="w-full hover:bg-estate-300 text-white btn-hover-slide" size="lg">
                        <Download size={16} className="mr-2" />
                        Project Brochure (PDF)
                      </Button>
                      <Button className="w-full" variant="outline" size="lg">
                        <Download size={16} className="mr-2" />
                        Floor Plans (PDF)
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Section: Amenities & Features */}
        <AmenitiesSection />
        
        {/* New Section: Floor Plans & Master Plan */}
        <FloorPlansSection />
        
        {/* Location Map Section */}
        <section className="py-16 bg-estate-beige/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-3xl font-bold">Project Location</h2>
              <div className="flex items-center text-estate mt-2 md:mt-0">
                <Map size={20} className="mr-2" />
                <span>{project.location}</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <Map size={48} className="mx-auto mb-4 text-estate-charcoal/70" />
                <p className="text-estate-charcoal/70">Interactive map will be displayed here</p>
                <p className="text-sm text-estate-charcoal/50 mt-2">Showing location at {project.location}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>

            <div className="relative sm:px-8 md:px-12">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4">
                      <div className="flex justify-center">
                        <div className="overflow-hidden rounded-lg h-[50vh] sm:h-[60vh] w-full max-w-4xl">
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8" />
                <CarouselNext className="hidden sm:flex -right-4 md:-right-8" />
              </Carousel>
            </div>

            {/* Mobile navigation dots - could be added here if needed */}
            <div className="flex justify-center gap-2 mt-4 sm:hidden">
              {galleryImages.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-estate-charcoal/30"></div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {galleryImages.slice(0, 4).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={image} 
                    alt={`${project.title} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            {galleryImages.length > 4 && (
              <div className="text-center mt-6">
                <Button variant="outline">
                  View All {galleryImages.length} Images
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* New Section: Developer Info */}
        <DeveloperInfoSection />

        {/* Contact CTA Section */}
        <section className="py-12 bg-estate-beige">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in This Project?</h2>
            <p className="text-lg text-estate-charcoal/80 mb-8 max-w-2xl mx-auto">
              Schedule a site visit or speak with one of our representatives to learn more about this property.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="hover:bg-estate-dark text-white btn-hover-slide">
                Book a Site Visit
              </Button>
              <Button size="lg" variant="outline" className="border-estate text-estate hover:bg-estate hover:text-white">
                Request More Information
              </Button>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
