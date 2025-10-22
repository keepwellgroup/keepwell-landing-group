import andresPhoto from "@/assets/andres-photo.jpg";
import stanfordLogo from "@/assets/stanford-logo.png";
import nyuSternLogo from "@/assets/nyu-stern-logo.png";

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
                I'm a hands-on operator with a track record of building resilient supply chains and scaling consumer products from concept to national distribution.
              </p>
              
              <p>
                Most recently, I served as Chief Operating Officer at Biom, a sustainable wipes company, where I led product development, manufacturing, and logistics, transforming a young startup into a nationally distributed brand. Throughout my career, I've built and optimized operations across every stage of growth: from designing supply chains and improving vendor performance to implementing systems that drive efficiency and accountability. I take pride in turning complex, fast-moving environments into disciplined, sustainable operations.
              </p>
              
              <p>
                My family has owned and operated a fourth-generation business founded by my great-grandfather. Growing up around that legacy taught me the value of stewardship, of taking care of something someone has spent a lifetime building. That same sense of respect and responsibility is what now drives my search: to acquire, operate, and grow a great small business with the same long-term care that I would my own family's.
              </p>
              
              <p>
                Born in Mexico and now based in Miami, I'm a husband and father of three, guided by the principles that shaped my upbringing: work hard, be kind, and build things that last.
              </p>
              
              <p>
                I earned a bachelor's and a master's degree in engineering from Stanford University as well as an MBA from NYU.
              </p>
              
              <div className="flex items-center gap-8 mt-8 pt-6 border-t border-border">
                <img 
                  src={stanfordLogo} 
                  alt="Stanford University" 
                  className="w-32 h-auto opacity-60"
                />
                <img 
                  src={nyuSternLogo} 
                  alt="NYU Stern School of Business" 
                  className="w-32 h-auto opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
