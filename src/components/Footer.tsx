const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Keepwell Group. All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-foreground/60">
            <a href="mailto:andres@keepwellgroup.com" className="hover:text-foreground transition-colors">
              andres@keepwellgroup.com
            </a>
            <a href="tel:+16099312051" className="hover:text-foreground transition-colors">
              609-931-2051
            </a>
            <p className="text-center md:text-left">
              727 Crandon Blvd, Apt 202<br className="md:hidden" /> Key Biscayne, FL 33149
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
