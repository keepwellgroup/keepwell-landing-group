import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Connect</p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-8">
            Let's <span className="italic">talk</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-14 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            If you're a business owner thinking about your next chapter, or a broker 
            with a company that might be a fit, I'd love to hear from you. All 
            conversations are confidential and there's no obligation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.location.href = "mailto:andres@keepwellgroup.com"}
              className="tracking-[0.15em] uppercase text-xs bg-primary text-accent-foreground hover:bg-primary/90 px-8 h-12"
            >
              <Mail className="mr-2 h-4 w-4" />
              andres@keepwellgroup.com
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "tel:+17867458315"}
              className="tracking-[0.15em] uppercase text-xs border-border text-foreground hover:border-primary hover:text-primary px-8 h-12"
            >
              <Phone className="mr-2 h-4 w-4" />
              +1 (786) 745-8315
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
