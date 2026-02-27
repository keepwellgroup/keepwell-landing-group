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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={keepwellLogo} alt="Keepwell Group Logo" className="h-7 w-auto" />
          <h2 className="text-xl font-semibold text-foreground">Keepwell Group</h2>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about-me")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("approach")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            My Approach
          </button>
          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
