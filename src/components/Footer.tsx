const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Keepwell Group. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/70">
            Based in North America
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
