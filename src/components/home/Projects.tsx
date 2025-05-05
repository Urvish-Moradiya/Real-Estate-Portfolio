
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";

const categories = [
  { id: "all", name: "All" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "interior", name: "Interiors" },
  { id: "ongoing", name: "Ongoing" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  
  // Get only 6 featured projects for the homepage
  const featuredProjects = activeFilter === "all" 
    ? projects.slice(0, 6) 
    : projects.filter(project => 
        activeFilter === "ongoing" || activeFilter === "upcoming" 
          ? project.status === activeFilter 
          : project.category === activeFilter
      ).slice(0, 6);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-estate-charcoal/70">
            Discover our portfolio of exceptional properties designed with innovation and built with precision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={cn(
                  "rounded-full px-5",
                  activeFilter === category.id 
                    ? "bg-estate text-white" 
                    : "text-estate-charcoal hover:bg-estate hover:text-white"
                )}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
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
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button className="bg-estate hover:bg-estate-dark text-white btn-hover-slide">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
