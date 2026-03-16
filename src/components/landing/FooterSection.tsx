import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-1">BigBoom</h3>
            <p className="text-sm text-muted-foreground">Shape explosivo 3 em 1</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de privacidade</a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 BigBoom. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
