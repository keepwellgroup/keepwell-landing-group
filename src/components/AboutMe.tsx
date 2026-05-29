import andresPhoto from "@/assets/andres-photo.jpg";
import stanfordLogo from "@/assets/stanford-logo.png";
import nyuSternLogo from "@/assets/nyu-stern-logo.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono-label text-accent mb-4">● About</div>
          <h2 className="font-display text-foreground text-4xl md:text-6xl leading-[0.95] mb-16 max-w-3xl">
            An operator with a{" "}
            <span className="font-serif-italic text-accent">long-term</span> mindset.
          </h2>

          <div className="grid md:grid-cols-[320px_1fr] gap-12 md:gap-16 items-start">
            <div className="md:sticky md:top-28">
              <img
                src={andresPhoto}
                alt="Andres Marcos"
                className="rounded-2xl shadow-lg w-full max-w-[320px]"
              />
              <div className="mt-6">
                <div className="font-display text-xl text-foreground">Andres Marcos</div>
                <div className="text-sm text-muted-foreground mt-1">Founder, Keepwell Group</div>
              </div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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

              <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-border">
                <a
                  href="/andres-marcos-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors font-semibold text-base"
                >
                  View Resume ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/amarcosb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors flex items-center gap-2 font-semibold text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn ↗
                </a>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <img src={stanfordLogo} alt="Stanford University" className="w-28 h-auto opacity-80" />
                <img src={nyuSternLogo} alt="NYU Stern School of Business" className="w-28 h-auto opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
