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
    <section 
      className="min-h-screen flex items-center pt-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight drop-shadow-lg">
              Finding the right business
              <br />
              <em className="font-light">to build something lasting</em>
            </h1>
            <Button
              size="lg"
              variant="accent"
              onClick={scrollToContact}
              className="text-base"
            >
              Get in touch
            </Button>
          </div>
          
          <div className="text-lg text-white/90 leading-relaxed drop-shadow-lg">
            <p>
              I'm seeking to acquire and grow a single, profitable business
              where I can add real value over the long term.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
