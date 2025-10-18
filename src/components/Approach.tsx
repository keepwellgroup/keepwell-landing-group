const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Our approach
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
            We believe the best outcomes happen when everyone's incentives align. 
            That means being transparent, respectful, and realistic from day one.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Listen first</h3>
              <p className="text-foreground/70">
                We start by understanding your business, your goals, and what matters 
                most to you in a transition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Move thoughtfully</h3>
              <p className="text-foreground/70">
                We take time to ensure the fit is right. This is a long-term decision 
                for both sides, and we don't rush it.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Build together</h3>
              <p className="text-foreground/70">
                Post-acquisition, we're hands-on operators focused on sustainable 
                growth and preserving what made your business successful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
