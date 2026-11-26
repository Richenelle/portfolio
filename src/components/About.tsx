import { CheckCircle, Award, Target, Zap, BarChart3, Layers } from "lucide-react";

const skills = [
  { name: "Flutter / Dart", level: 90, category: "Mobile" },
  { name: "Tests Fonctionnels", level: 85, category: "QA" },
  { name: "Product Management", level: 75, category: "Strategy" },
  { name: "Data Analysis", level: 60, category: "Analytics" },
  { name: "PHP Laravel", level: 75, category: "Backend" },
  { name: "Méthodologie Scrum", level: 88, category: "Agile" },
  { name: "UI/UX Design", level: 70, category: "Design" },
  { name: "Reporting & Documentation", level: 85, category: "QA" },
];

const highlights = [
  {
    icon: Zap,
    title: "Développement Mobile",
    description: "Applications Flutter cross-platform avec un design intuitif centré sur l'expérience utilisateur.",
  },
  {
    icon: CheckCircle,
    title: "Assurance Qualité",
    description: "Tests fonctionnels rigoureux sur mobile et web, reporting détaillé via Google Sheets et documentation complète.",
  },
  {
    icon: Target,
    title: "Product Management",
    description: "Certifiée en PM, je travaille sur l'atteinte des objectifs produit et les améliorations basées sur les données.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "En formation pour maîtriser l'analyse de données et prédire le comportement utilisateur.",
  },
  {
    icon: Layers,
    title: "Vision Produit Complète",
    description: "De la conception à la livraison, en passant par le contrôle qualité et l'analyse des performances.",
  },
  {
    icon: Award,
    title: "Formation Continue",
    description: "Apprentissage des outils d'automatisation des tests et approfondissement de mes compétences data.",
  },
];

const About = () => {
  return (
    <section id="propos" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
                  À propos
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Richenelle NAGNONHOU
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">Développeuse Mobile</span>, <span className="text-foreground font-medium">QA Tester</span> et <span className="text-foreground font-medium">Product Manager</span>, 
                    je suis passionnée par la création de produits digitaux qui allient qualité, performance et expérience utilisateur optimale.
                  </p>
                  <p>
                    Mon approche holistique du produit me permet de maîtriser tout le cycle de vie : de la conception d'<span className="text-accent font-medium">interfaces intuitives</span> au <span className="text-accent font-medium">contrôle qualité</span> rigoureux, 
                    en passant par la <span className="text-accent font-medium">gestion produit</span> pour atteindre les objectifs business.
                  </p>
                  <p>
                    Actuellement orientée vers les <span className="text-foreground font-medium">tests fonctionnels</span> sur applications mobiles et web, 
                    je documente mes tests et bilans d'intégration via Google Sheets. Je me forme aux outils d'automatisation pour compléter mon expertise QA.
                  </p>
                  <p>
                    En parallèle, je développe mes compétences en <span className="text-foreground font-medium">Data Analysis</span> pour prendre des décisions éclairées en product management 
                    et mieux comprendre le comportement des utilisateurs.
                  </p>
                  <p className="text-foreground font-medium italic border-l-2 border-accent pl-4">
                    Je recherche activement des opportunités pour mettre en pratique mes compétences en Product Management et acquérir de l'expérience concrète.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div 
                    key={item.title}
                    className="p-5 bg-background rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 group opacity-0 animate-fade-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
              <div className="bg-background p-8 rounded-3xl border border-border">
                <h3 className="font-display text-xl font-semibold mb-8">Compétences Techniques</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="space-y-2 opacity-0 animate-fade-up"
                      style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="px-2 py-0.5 text-xs bg-muted rounded-full text-muted-foreground">
                            {skill.category}
                          </span>
                        </div>
                        <span className="text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-border">
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-accent">6+</p>
                    <p className="text-sm text-muted-foreground">Apps Mobile</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-accent">QA</p>
                    <p className="text-sm text-muted-foreground">Tester Fonctionnel</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-accent">PM</p>
                    <p className="text-sm text-muted-foreground">Certifiée</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-accent">Data</p>
                    <p className="text-sm text-muted-foreground">Analyst en formation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;