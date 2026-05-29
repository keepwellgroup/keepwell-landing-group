import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36 bg-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono-label text-accent mb-4">● Contact</div>
          <h2 className="font-display text-navy-foreground text-4xl md:text-7xl leading-[0.95] mb-8">
            Let's{" "}
            <span className="font-serif-italic text-accent">talk</span>.
          </h2>

          <p className="text-lg md:text-xl text-navy-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're a business owner thinking about your next chapter, or a broker with a company that might be a fit, I'd love to hear from you. All conversations are confidential and there's no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="cream"
              onClick={() => (window.location.href = "mailto:andres@keepwellgroup.com")}
            >
              <Mail className="mr-1 h-4 w-4" />
              andres@keepwellgroup.com
            </Button>
            <Button
              size="lg"
              onClick={() => (window.location.href = "tel:+13053961474")}
              className="bg-transparent border border-navy-border text-navy-foreground hover:bg-white/5"
            >
              <Phone className="mr-1 h-4 w-4" />
              +1 (305) 396-1474
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
