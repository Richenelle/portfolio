import { ArrowUpRight, Smartphone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projets" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">
                Portfolio
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Applications Mobile
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Une sélection de projets Flutter/Dart sur lesquels j'ai travaillé, mêlant design soigné et qualité technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                to={`/projet/${project.id}`}
                key={project.id}
                className="group cursor-pointer opacity-0 animate-fade-up block"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <article>
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`} />
                    
                    {/* Mobile icon indicator */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-background/90 backdrop-blur rounded-full flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-accent" />
                    </div>
                    
                    {/* Status badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "En ligne" 
                        ? "bg-green-500/90 text-white" 
                        : project.status === "Terminé"
                        ? "bg-blue-500/90 text-white"
                        : "bg-accent/90 text-accent-foreground"
                    }`}>
                      {project.status}
                    </div>
                    
                    {/* Arrow */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-accent font-semibold">{project.category}</p>
                    <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-muted rounded-full transition-colors group-hover:bg-accent/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
