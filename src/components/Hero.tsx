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
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Left: headline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-navy-muted">
              <span className="font-mono-label text-accent">● Acquiring Quality Businesses</span>
              <span className="hidden sm:inline font-mono-label text-navy-muted">· Long-term capital</span>
            </div>

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

          {/* Right: stat card */}
          <div className="bg-white/[0.03] border border-navy-border rounded-3xl p-8 backdrop-blur-sm">
            <div className="font-mono-label text-navy-muted mb-6">Acquisition Profile</div>
            <div className="space-y-6">
              <div className="flex justify-between items-baseline border-b border-navy-border pb-4">
                <span className="text-navy-muted text-sm">Target size</span>
                <span className="font-display text-2xl text-navy-foreground">$1M – $10M</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-navy-border pb-4">
                <span className="text-navy-muted text-sm">Hold period</span>
                <span className="font-display text-2xl text-navy-foreground">Indefinite</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-navy-border pb-4">
                <span className="text-navy-muted text-sm">Role</span>
                <span className="font-display text-2xl text-navy-foreground">Owner-Operator</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-navy-muted text-sm">Geography</span>
                <span className="font-display text-2xl text-navy-foreground">US</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 pt-12 border-t border-navy-border grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-4xl md:text-5xl text-navy-foreground">15+</div>
            <div className="text-navy-muted text-sm mt-2">Years operating consumer businesses</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl text-navy-foreground">4th</div>
            <div className="text-navy-muted text-sm mt-2">Generation family-business stewardship</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl text-navy-foreground">1</div>
            <div className="text-navy-muted text-sm mt-2">Business I'll acquire, operate, and grow</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
