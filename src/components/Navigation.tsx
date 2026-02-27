import { Button } from "@/components/ui/button";
import keepwellLogo from "@/assets/keepwell-logo.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={keepwellLogo} alt="Keepwell Group Logo" className="h-7 w-auto" />
          <h2 className="text-lg font-bold text-foreground tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            Keepwell Group
          </h2>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("about-me")}
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors tracking-[0.2em] uppercase"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("approach")}
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors tracking-[0.2em] uppercase"
          >
            Approach
          </button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="tracking-[0.2em] uppercase text-xs border-primary text-primary hover:bg-primary hover:text-accent-foreground"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
