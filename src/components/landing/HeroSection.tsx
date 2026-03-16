import { motion } from "framer-motion";
import { Star, Shield, Award } from "lucide-react";
import heroProduct from "@/assets/bigboom-hero.png";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
}));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/20 particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">+25.000 clientes</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Creatina 3 em 1 que{" "}
            <span className="gradient-text">transforma seu corpo</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Creatina + Colágeno + BCAA. Energia, recuperação e definição em um único suplemento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#planos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg pulse-glow hover:scale-105 transition-transform"
            >
              Comprar agora
            </a>
            <a
              href="#beneficios"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full glass-card font-semibold text-foreground hover:scale-105 transition-transform"
            >
              Ver benefícios
            </a>
          </div>

          <div className="flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Aprovado ANVISA</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-4 h-4 text-primary" />
              <span>Garantia 30 dias</span>
            </div>
          </div>
        </motion.div>

        {/* Product */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />
            <img
              src={heroProduct}
              alt="BigBoom Creatina 3 em 1"
              className="relative z-10 w-72 md:w-96 floating drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
