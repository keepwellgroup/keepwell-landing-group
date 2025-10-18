import { Button } from "@/components/ui/button";

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
          <h2 className="text-2xl font-semibold text-primary">Keepwell Group</h2>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("approach")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Our Approach
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
