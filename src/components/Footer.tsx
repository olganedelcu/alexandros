const Footer = () => {
  return (
    <footer className="py-8 bg-muted">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Business Coach. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
