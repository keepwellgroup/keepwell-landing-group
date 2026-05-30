import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative bg-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle hero image as atmospheric backdrop */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy/70 via-navy/90 to-navy" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl space-y-8">

          <h1 className="font-display text-navy-foreground text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
            Finding the{" "}
            <span className="font-serif-italic text-accent">right</span>{" "}
            business to build something lasting.
          </h1>

          <p className="text-lg md:text-xl text-navy-muted max-w-xl leading-relaxed">
            I'm seeking to acquire and grow a single, profitable business
            where I can add real value over the long term.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button variant="cream" size="lg" onClick={() => scrollTo("contact")}>
              Get in touch ↗
            </Button>
            <Button
              size="lg"
              onClick={() => scrollTo("approach")}
              className="bg-transparent border border-navy-border text-navy-foreground hover:bg-white/5"
            >
              My approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
