import { Phone, Users, FileText, Search, Flag } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Initial call",
      description: "It all starts with a phone call to meet each other, answer any questions and understand your plans and your business."
    },
    {
      icon: Users,
      number: "02",
      title: "In-depth discussion",
      description: "Meetings for in-depth discussion and sharing financial statements under an NDA."
    },
    {
      icon: FileText,
      number: "03",
      title: "Non-binding offer",
      description: "Initial non-binding offer is made, including valuation, terms and timeline."
    },
    {
      icon: Search,
      number: "04",
      title: "Due diligence",
      description: "Begin confirmatory diligence, work towards a definitive agreement."
    },
    {
      icon: Flag,
      number: "05",
      title: "Close & transition",
      description: "The deal is signed and closed. After a brief transition period I'll take it from there."
    }
  ];

  return (
    <section id="approach" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Process</p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-8 text-center">
            My <span className="italic">approach</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-20 text-center max-w-3xl mx-auto italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            I believe the best outcomes happen when everyone's incentives align. 
            That means being transparent, respectful, and realistic from day one.
          </p>
          
          <div className="grid md:grid-cols-5 gap-0">
            {steps.map((step, index) => (
              <div key={index} className="text-center px-6 py-8 border-l border-border first:border-l-0">
                <span className="text-primary text-2xl font-bold mb-4 block" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-foreground mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
