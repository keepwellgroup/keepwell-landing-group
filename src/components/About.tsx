const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            What we're looking for
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Keepwell Group is a self-funded search focused on acquiring a single, 
              profitable business in the lower middle market. We're not looking to flip 
              or scale aggressively—we want to find the right company where we can be 
              thoughtful, hands-on operators for years to come.
            </p>
            
            <p>
              We're drawn to businesses with strong fundamentals, loyal customers, and 
              a reputation worth protecting. The kind of company where quality matters 
              more than shortcuts, and where the team takes pride in what they've built.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Our ideal business
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• $1M - $5M in EBITDA</li>
                  <li>• Stable, recurring revenue</li>
                  <li>• Strong customer relationships</li>
                  <li>• Room for operational improvement</li>
                  <li>• Based in North America</li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  What we bring
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Patient, aligned capital</li>
                  <li>• Operational experience</li>
                  <li>• Respect for your legacy</li>
                  <li>• Long-term commitment</li>
                  <li>• No outside pressure to sell</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
