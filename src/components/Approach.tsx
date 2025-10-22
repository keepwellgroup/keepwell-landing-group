import { Phone, Users, FileText, Search, Flag } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      icon: Phone,
      title: "Initial call",
      description: "It all starts with a phone call to meet each other, answer any questions and understand your plans and your business."
    },
    {
      icon: Users,
      title: "In-depth discussion",
      description: "Meetings for in-depth discussion and sharing financial statements under an NDA."
    },
    {
      icon: FileText,
      title: "Non-binding offer",
      description: "Initial non-binding offer is made, including valuation, terms and timeline."
    },
    {
      icon: Search,
      title: "Due diligence",
      description: "Begin confirmatory diligence, work towards a definitive agreement."
    },
    {
      icon: Flag,
      title: "Close and transition",
      description: "The deal is signed and closed. After a brief transition period I'll take it from there."
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
                  <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
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
