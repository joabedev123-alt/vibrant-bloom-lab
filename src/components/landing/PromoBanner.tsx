import { motion } from "framer-motion";
import produtoImg from "../../assets/produto/IMG_6269-Photoroom.png";

const PromoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative w-full max-w-5xl mx-auto bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl mb-16 flex flex-col md:flex-row border-l-8 border-primary group"
    >
      {/* Top Right Tag */}
      <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs md:text-sm font-bold px-4 py-2 rounded-bl-xl z-20 shadow-lg">
        OFERTA POR TEMPO LIMITADO
      </div>

      {/* Left Side: Images */}
      <div className="w-full md:w-2/5 relative flex items-center justify-center p-6 md:p-8 bg-gradient-to-br from-black/20 to-transparent min-h-[250px] md:min-h-[300px] overflow-hidden">
        {/* Glow behind images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[80px] rounded-full"></div>
        
        {/* Back jar */}
        <motion.img
          src={produtoImg}
          alt="Creatina BigBoom - Pote esquerdo"
          className="absolute max-h-[140px] md:max-h-[200px] object-contain drop-shadow-2xl z-0 transform -rotate-12 blur-[1px] opacity-70"
          style={{ left: "20%", top: "30%" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Front jar */}
        <motion.img
          src={produtoImg}
          alt="Creatina BigBoom - Pote principal"
          className="relative max-h-[200px] md:max-h-[260px] object-contain drop-shadow-2xl z-10"
          style={{ right: "-10%", top: "5%" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <div className="h-[2px] w-6 md:w-8 bg-primary"></div>
          <span className="text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase">
            Semana do Consumidor Bigboom
          </span>
        </div>

        <h3 className="text-2xl md:text-5xl font-black text-white leading-tight mb-1">
          CREATINA 3 EM 1
        </h3>
        <h4 className="text-3xl md:text-6xl font-black text-primary leading-none mb-3 md:mb-4">
          ATÉ 25% OFF
        </h4>

        <p className="text-gray-400 text-sm md:text-base mb-8">
          Shape Explosivo • Sabor Melancia • Fórmula 3 em 1 com Creatina, Colágeno e mais.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
          <a
            href="#planos"
            className="w-full sm:w-auto bg-primary text-primary-foreground font-black text-lg py-4 px-8 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50 text-center"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('planos');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            COMPRAR AGORA
          </a>
          
          <div className="flex items-center gap-4 text-center">
            <div className="flex flex-col">
              <span className="text-primary font-black text-xl">10%</span>
              <span className="text-gray-500 text-xs font-bold">1 POTE</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-black text-xl">20%</span>
              <span className="text-gray-500 text-xs font-bold">2 POTES</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-black text-xl">25%</span>
              <span className="text-gray-500 text-xs font-bold">3 POTES</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-600 italic">
          *Promoção válida enquanto durarem os estoques.
        </p>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
