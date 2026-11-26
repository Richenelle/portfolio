import { Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="#" className="font-display font-bold text-2xl tracking-tight">
                Richenelle<span className="text-accent">.</span>
              </a>
              <p className="text-sm text-primary-foreground/70">
                Mobile Developer • QA Tester • Product Manager
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/richenelle-nagnonhou-44a4bb226"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nagnonhourichenelle@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/cv-richenelle-nagnonhou.pdf"
                download="cv-richenelle-nagnonhou.pdf"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="CV"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>

            <nav className="flex items-center gap-6">
              {["Projets", "À propos", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("à ", "")}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Richenelle NAGNONHOU. Tous droits réservés.
            </p>
            <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
              Passionnée par le Produit et la Qualité
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
