
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  status: ProjectStatus;
  image: string;
  completionDate?: string;
  description: string;
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile/touch device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // For mobile: show overlay by default, for desktop: show on hover
  const showOverlay = isMobile || isHovered;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700",
            showOverlay ? "scale-110" : "scale-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 transition-opacity duration-300",
            showOverlay ? "opacity-100" : isMobile ? "opacity-80" : "opacity-0"
          )}
        >
          <Badge
            variant="outline"
            className={cn(
              "mb-2 w-fit capitalize text-white border-white/30",
              project.status === "completed" && "bg-green-600/90",
              project.status === "ongoing" && "bg-blue-600/90",
              project.status === "upcoming" && "bg-amber-600/90"
            )}
          >
            {project.status}
          </Badge>
          <h3 className="mb-1 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mb-1 md:mb-3 text-sm text-white/80">{project.location}</p>
          <div
            className={cn(
              "flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full w-fit transition-transform duration-300",
              showOverlay ? "translate-y-0" : "translate-y-10",
              isMobile
                ? "text-estate bg-transparent font-bold"
                : "text-white bg-estate"
            )}
          >
            Explore <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
