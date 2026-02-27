const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} Keepwell Group. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-xs text-muted-foreground tracking-[0.1em]">
            <a href="mailto:andres@keepwellgroup.com" className="hover:text-primary transition-colors">
              andres@keepwellgroup.com
            </a>
            <a href="tel:+17867458315" className="hover:text-primary transition-colors">
              +1 (786) 745-8315
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
