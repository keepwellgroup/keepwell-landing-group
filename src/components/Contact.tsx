import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's talk
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8">
            If you're a business owner thinking about your next chapter, or a broker 
            with a company that might be a fit, I'd love to hear from you. All 
            conversations are confidential and there's no obligation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="accent"
              onClick={() => window.location.href = "mailto:andres@keepwellgroup.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              andres@keepwellgroup.com
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "tel:+16098312051"}
            >
              <Phone className="mr-2 h-5 w-5" />
              609-831-2051
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
