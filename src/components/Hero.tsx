import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToApproach = () => {
    const element = document.getElementById("approach");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/92" />
      </div>
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12 flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Acquisition Entrepreneurship
            <span className="text-primary/40">·</span>
            Lower Middle Market
            <span className="text-primary/40">·</span>
            Miami
          </p>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            <span className="italic font-normal text-primary">Finding the right</span>
            <br />
            <span className="font-bold text-foreground">business.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            I'm seeking to acquire and grow a single, profitable business
            where I can add real value over the long term.
          </p>
          
          <div className="flex items-center gap-6 mt-14">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="tracking-[0.2em] uppercase text-xs bg-primary text-accent-foreground hover:bg-primary/90 px-8 h-12"
            >
              Get in Touch
            </Button>
            <button
              onClick={scrollToApproach}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
            >
              <span className="w-8 h-px bg-muted-foreground inline-block" />
              My Approach
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
