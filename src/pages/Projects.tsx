
import { useState, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, threshold: 0.1 });
  
  const categories = [
    { id: "all", name: "All" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "interior", name: "Interiors" },
    { id: "ongoing", name: "Ongoing" },
    { id: "upcoming", name: "Upcoming" },
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => 
        activeFilter === "ongoing" || activeFilter === "upcoming" 
          ? project.status === activeFilter 
          : project.category === activeFilter
      );

  return (
    <>
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-estate-beige">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-lg text-estate-charcoal/80 max-w-3xl">
              Explore our portfolio of exceptional properties designed with innovation and built with precision.
              Each project reflects our commitment to quality, sustainability, and timeless design.
            </p>
          </div>
        </div>
        
        <div ref={projectsRef} className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={`rounded-full px-5 ${
                    activeFilter === category.id 
                      ? "bg-estate text-white" 
                      : "text-estate-charcoal hover:bg-estate hover:text-white"
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`transform transition-all duration-700 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-estate-charcoal/70">No projects found in this category.</p>
                <Button 
                  variant="outline"
                  className="mt-4"
                  onClick={() => setActiveFilter("all")}
                >
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default Projects;
