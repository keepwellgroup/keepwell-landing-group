import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

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
            with a company that might be a fit, we'd love to hear from you. All 
            conversations are confidential and there's no obligation.
          </p>
          
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => window.location.href = "mailto:contact@keepwellgroup.com"}
          >
            <Mail className="mr-2 h-5 w-5" />
            contact@keepwellgroup.com
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
