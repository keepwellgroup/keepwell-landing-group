const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            What I'm looking for
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Keepwell Group is focused on acquiring a single, profitable business in 
              the lower middle market. I'm not looking to flip or scale aggressively - 
              I want to find the right company where I can be a thoughtful, hands-on 
              operator for years to come.
            </p>
            
            <p>
              I'm drawn to businesses with strong fundamentals, loyal customers, and 
              a reputation worth protecting. The kind of company where quality matters 
              more than shortcuts, and where the team takes pride in what they've built.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  My ideal business
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• $750K - $2M in EBITDA</li>
                  <li>• Stable, recurring revenue</li>
                  <li>• Strong customer relationships</li>
                  <li>• Room for operational improvement</li>
                  <li>• Based in the Miami Dade area</li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  What I bring
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
