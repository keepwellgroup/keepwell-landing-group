import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative bg-aurora pt-32 pb-28 md:pt-44 md:pb-40 overflow-hidden">
      {/* Subtle hero image as atmospheric backdrop */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h1 className="font-display text-navy-foreground text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tight">
            Finding the{" "}
            <span className="text-gradient-warm font-serif-italic">right</span>{" "}
            business to build something lasting.
          </h1>

          <p className="text-lg md:text-xl text-navy-muted max-w-2xl mx-auto leading-relaxed">
            I'm seeking to acquire and grow a single, profitable business
            where I can add real value over the long term.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-white text-navy hover:bg-white/90 rounded-full px-8 h-14 text-base font-semibold shadow-pill"
            >
              Get in touch ↗
            </Button>
            <Button
              size="lg"
              onClick={() => scrollTo("approach")}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-navy-foreground hover:bg-white/15 rounded-full px-8 h-14 text-base font-semibold"
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
