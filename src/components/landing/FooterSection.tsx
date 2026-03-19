import { Instagram, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border/20 glass-card mx-4 mb-4 rounded-3xl lg:max-w-7xl lg:mx-auto">
      <div className="container text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold gradient-text mb-4">BigBoom</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A revolução 3 em 1 (Creatina, Colágeno e BCAA) que faltava para a sua rotina de treinos e transformação do corpo.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Planos e Produtos</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>contato@bigboom.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Aviso Legal</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Este produto não substitui o acompanhamento de um profissional da saúde. Os resultados podem variar de pessoa para pessoa.
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                <ExternalLink className="w-3 h-3" /> Termos de Uso
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                <ExternalLink className="w-3 h-3" /> Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2026 BigBoom Suplementos. Todos os direitos reservados. CNPJ: 00.000.000/0001-00.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            Produzida com💚por <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">CAMALY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
