import { Button } from "@/components/ui/button";
import keepwellLogo from "@/assets/keepwell-logo.svg";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={keepwellLogo} alt="Keepwell Group" className="h-8" />
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about-me")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            The Search
          </button>
          <button
            onClick={() => scrollToSection("approach")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            My Approach
          </button>
          <Button
            variant="outline"
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
