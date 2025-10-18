import andresPhoto from "@/assets/andres-photo.jpg";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            About me
          </h2>
          
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            <div className="mx-auto md:mx-0">
              <img 
                src={andresPhoto} 
                alt="Andres Marcos" 
                className="rounded-lg shadow-lg w-full max-w-[300px]"
              />
            </div>
            
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                I'm Andres Marcos, and I'm conducting a self-funded search to acquire 
                and operate a single business. After years working in various industries, 
                I've learned that the most rewarding work happens when you're deeply 
                invested in something—not just financially, but personally.
              </p>
              
              <p>
                This search is about finding the right fit. I'm looking for a company 
                where I can apply what I've learned, work alongside the existing team, 
                and build something meaningful over the long haul. I'm not interested 
                in quick exits or financial engineering—I want to run a business I'm 
                proud of.
              </p>
              
              <p>
                I bring operational experience, a willingness to learn, and patient 
                capital that isn't beholden to external timelines or pressures. Most 
                importantly, I understand that buying a business is about more than 
                numbers—it's about respecting what's been built and carrying it forward 
                responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
