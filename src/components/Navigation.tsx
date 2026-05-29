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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2.5">
          <img src={keepwellLogo} alt="Keepwell Group Logo" className="h-7 w-auto" />
          <h2 className="text-base font-semibold tracking-tight text-foreground">Keepwell Group</h2>
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("about-me")}
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("approach")}
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Approach
          </button>
          <Button variant="navy" size="sm" onClick={() => scrollToSection("contact")}>
            Get in touch ↗
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
