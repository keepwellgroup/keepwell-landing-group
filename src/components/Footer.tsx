const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Keepwell Group. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60">
            Based in North America
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
