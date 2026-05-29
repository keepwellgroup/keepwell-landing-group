import keepwellLogo from "@/assets/keepwell-logo.png";

const Footer = () => {
  return (
    <footer className="py-14 bg-navy border-t border-navy-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <img src={keepwellLogo} alt="Keepwell Group" className="h-7 w-auto" />
            <span className="text-base font-semibold text-navy-foreground">Keepwell Group</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8 text-sm text-navy-muted">
            <a href="mailto:andres@keepwellgroup.com" className="hover:text-navy-foreground transition-colors">
              andres@keepwellgroup.com
            </a>
            <a href="tel:+13053961474" className="hover:text-navy-foreground transition-colors">
              +1 (305) 396-1474
            </a>
          </div>

          <p className="text-sm text-navy-muted">
            © {new Date().getFullYear()} Keepwell Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
