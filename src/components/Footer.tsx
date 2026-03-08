const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Alessandro Guglielmo — Tutti i diritti riservati
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Torna su ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
