const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Keepwell Group. All rights reserved.
          </p>
          
          <div className="flex flex-col items-start md:items-end gap-3 text-sm text-foreground/60">
            <a href="mailto:andres@keepwellgroup.com" className="hover:text-foreground transition-colors">
              andres@keepwellgroup.com
            </a>
            <a href="tel:+13053961474" className="hover:text-foreground transition-colors">
              +1 (305) 396-1474
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
