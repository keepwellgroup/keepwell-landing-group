import { Phone, Users, FileText, Search, Flag } from "lucide-react";

const Approach = () => {
  const steps = [
    { icon: Phone, title: "Initial call", description: "It all starts with a phone call to meet each other, answer any questions and understand your plans and your business." },
    { icon: Users, title: "In-depth discussion", description: "Meetings for in-depth discussion and sharing financial statements under an NDA." },
    { icon: FileText, title: "Non-binding offer", description: "Initial non-binding offer is made, including valuation, terms and timeline." },
    { icon: Search, title: "Due diligence", description: "Begin confirmatory diligence, work towards a definitive agreement." },
    { icon: Flag, title: "Close and transition", description: "The deal is signed and closed. After a brief transition period I'll take it from there." },
  ];

  return (
    <section id="approach" className="py-28 md:py-36 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono-label text-accent mb-4">● The Process</div>
          <h2 className="font-display text-foreground text-4xl md:text-6xl leading-[0.95] mb-6 max-w-3xl">
            A clear path from{" "}
            <span className="font-serif-italic text-accent">first call</span> to close.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl">
            I believe the best outcomes happen when everyone's incentives align. That means being transparent, respectful, and realistic from day one.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-background p-7 flex flex-col gap-4 min-h-[240px]">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-full bg-navy text-navy-foreground flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-label text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
