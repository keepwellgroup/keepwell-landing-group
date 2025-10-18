import { Ear, Search, Handshake, TrendingUp, Heart } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      icon: Ear,
      title: "Listen first",
      description: "I start by understanding your business, your goals, and what matters most to you in a transition."
    },
    {
      icon: Search,
      title: "Do my homework",
      description: "I thoroughly evaluate the business to understand its strengths, opportunities, and what it needs to succeed."
    },
    {
      icon: Handshake,
      title: "Move thoughtfully",
      description: "I take time to ensure the fit is right. This is a long-term decision for both sides, and I don't rush it."
    },
    {
      icon: TrendingUp,
      title: "Transition smoothly",
      description: "I work with you to create a transition plan that honors your timeline and keeps the business stable."
    },
    {
      icon: Heart,
      title: "Build for the long term",
      description: "Post-acquisition, I'm a hands-on operator focused on sustainable growth and preserving what made your business successful."
    }
  ];

  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            My approach
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
            I believe the best outcomes happen when everyone's incentives align. 
            That means being transparent, respectful, and realistic from day one.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
