import { motion } from "framer-motion";
import { Star, Users, MessageCircle, TrendingUp } from "lucide-react";

import videoFeedback1 from "../../assets/IMG_6902.MOV";
import videoFeedback2 from "../../assets/IMG_7763.MOV";
import posterVideo1 from "../../assets/b28cdc82-80a6-4efc-80af-93d00b29fcc5.jpg";

import proof1 from "../../assets/provas sociais/PROVA SOCIAL 1.jpeg";
import proof2 from "../../assets/provas sociais/prova social 2.jpeg";
import proof4 from "../../assets/provas sociais/PROVA SOCIAL 4.jpeg";
import proof5 from "../../assets/provas sociais/PROVA SOCIAL 5.jpeg";
import proof6 from "../../assets/provas sociais/PROVA SOCIAL 6.jpeg";
import proofBB1 from "../../assets/provas sociais/prova big boom 01.jpg";
import proofBfAf2 from "../../assets/provas sociais/antes x depois 2.png";
import proofBfAf3 from "../../assets/provas sociais/antes x depois 3.png";

const stats = [
  { icon: Users, value: "37.000+", label: "Clientes satisfeitas" },
  { icon: MessageCircle, value: "9.800+", label: "Avaliações 5 estrelas" },
  { icon: Star, value: "4.9", label: "Nota média" },
  { icon: TrendingUp, value: "92%", label: "Taxa de recompra" },
];

const printImages = [
  proof1,
  proof2,
  proof4,
  proof5,
  proof6,
  proofBB1,
  proofBfAf2,
  proofBfAf3,
];

const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que milhares de mulheres{" "}
            <span className="gradient-text">escolhem BigBoom</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Veja os resultados reais de quem já experimentou.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Vídeos de Feedback */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="rounded-3xl overflow-hidden relative glass-card aspect-[9/16] max-h-[600px] mx-auto w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <video
              src={videoFeedback1}
              className="w-full h-full object-cover"
              controls
              playsInline
              muted
              poster={posterVideo1}
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
              <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Resultado Real</span>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden relative glass-card aspect-[9/16] max-h-[600px] mx-auto w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <video
              src={videoFeedback2}
              className="w-full h-full object-cover"
              controls
              playsInline
              muted
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
              <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Feedback de Cliente</span>
            </div>
          </motion.div>
        </div>

        {/* Galeria de Provas Sociais (Imagens) */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-2">Comunidade <span className="text-primary">#BigBoom</span></h3>
          <p className="text-muted-foreground">Arraste ou acompanhe as dezenas de relatos e transformações reais</p>
        </motion.div>
        
        {/* Carrossel Automático */}
        <div className="relative w-full overflow-hidden pb-8">
          {/* Fading nas bordas para suavizar */}
          <div className="absolute top-0 bottom-8 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-8 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-6 px-4">
            {/* Array duplicado para criar o efeito infinito sem quebra */}
            {[...printImages, ...printImages].map((imgSrc, i) => (
              <div
                key={i}
                className="w-72 h-[450px] shrink-0 rounded-3xl overflow-hidden glass-card border-2 border-border/50 hover:border-primary/50 transition-colors"
                style={{
                  transform: "translateZ(0)",
                }}
              >
                <img
                  src={imgSrc}
                  alt={`Prova Social BigBoom ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
