import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            Finding the right business
            <br />
            to build something lasting.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            I'm seeking to acquire and grow a single, profitable business
            where I can add real value over the long term.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
