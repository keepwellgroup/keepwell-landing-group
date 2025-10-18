import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
      </div>
      
      <div className="relative container mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Finding the right business
          <br />
          to build something lasting
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          We're seeking to acquire and grow a single, profitable business
          where we can add real value over the long term.
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 animate-fade-in"
        >
          Start a Conversation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
