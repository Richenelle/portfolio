import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { getProjectById } from "@/data/projects";
import PhoneMockup from "@/components/PhoneMockup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Link to="/" className="text-accent hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/#projets"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Retour aux projets
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className={`px-4 py-1.5 text-sm font-medium rounded-full ${
                    project.status === "En ligne" 
                      ? "bg-green-500/10 text-green-600 dark:text-green-400" 
                      : project.status === "Terminé"
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : "bg-accent/10 text-accent"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {project.title}
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-muted text-sm font-medium rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <PhoneMockup
                  imageSrc={project.image}
                  alt={project.title}
                  className="w-64 md:w-72"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Screenshots Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
              Aperçu de l'application
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <PhoneMockup
                    imageSrc={screenshot}
                    alt={`${project.title} - Écran ${index + 1}`}
                    className="w-48 md:w-56"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Highlights */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold flex items-center gap-3">
                  <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    ✨
                  </span>
                  Points forts
                </h3>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground/90">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Challenges */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    🎯
                  </span>
                  Défis surmontés
                </h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground/90">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Intéressé par ce projet ?
            </h3>
            <p className="text-muted-foreground">
              N'hésitez pas à me contacter pour en savoir plus sur mon travail et mes compétences.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Me contacter
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
