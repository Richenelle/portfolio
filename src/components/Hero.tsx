import { ArrowDown, Smartphone, TestTube, Briefcase, Download, Linkedin, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Floating icons */}
      <div className="absolute top-32 right-1/4 opacity-20 animate-bounce" style={{ animationDuration: "3s" }}>
        <Smartphone className="w-12 h-12 text-accent" />
      </div>
      <div className="absolute bottom-32 right-1/3 opacity-20 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
        <TestTube className="w-10 h-10 text-primary" />
      </div>
      <div className="absolute top-1/3 left-16 opacity-20 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
        <Briefcase className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-20 animate-bounce" style={{ animationDuration: "3.2s", animationDelay: "1.5s" }}>
        <BarChart3 className="w-9 h-9 text-primary" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <div 
              className="flex flex-wrap gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                Mobile Developer
              </span>
              <span className="px-4 py-1.5 bg-primary/10 text-foreground text-xs font-semibold rounded-full">
                QA Tester
              </span>
              <span className="px-4 py-1.5 bg-secondary text-foreground text-xs font-semibold rounded-full border border-accent/30">
                Product Manager
              </span>
              <span className="px-4 py-1.5 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                Data Analyst en formation
              </span>
            </div>
            
            <h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Richenelle
              <br />
              <span className="text-muted-foreground">NAGNONHOU</span>
              <span className="text-accent">.</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Passionnée par la <span className="text-accent font-semibold">création de produits digitaux</span>, 
              je conçois des applications mobiles intuitives, assure leur qualité et contribue à leur succès grâce à une vision produit orientée données.
            </p>
            
            <div 
              className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#projets"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:gap-4"
              >
                Voir mes projets
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="/cv-richenelle-nagnonhou.pdf"
                download="cv-richenelle-nagnonhou.pdf"
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </a>
              <a
                href="https://www.linkedin.com/in/richenelle-nagnonhou-44a4bb226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-muted transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Tech stack preview */}
            <div 
              className="flex flex-wrap items-center gap-6 pt-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="text-sm text-muted-foreground font-medium">Expertise :</span>
              {["Flutter", "QA Fonctionnel", "Product Management", "Data Analysis", "Scrum"].map((tech, index) => (
                <span 
                  key={tech} 
                  className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors cursor-default"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
