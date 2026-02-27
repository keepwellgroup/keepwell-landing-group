import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Let's talk
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            If you're a business owner thinking about your next chapter, or a broker 
            with a company that might be a fit, I'd love to hear from you. All 
            conversations are confidential and there's no obligation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              onClick={() => window.location.href = "mailto:andres@keepwellgroup.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              andres@keepwellgroup.com
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "tel:+17867458315"}
            >
              <Phone className="mr-2 h-5 w-5" />
              +1 (786) 745-8315
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
