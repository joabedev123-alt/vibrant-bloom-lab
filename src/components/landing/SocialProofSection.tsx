import { motion } from "framer-motion";
import { Star, Users, MessageCircle, TrendingUp } from "lucide-react";
import socialProofImg from "@/assets/social-proof-group.jpg";

const stats = [
  { icon: Users, value: "37.000+", label: "Clientes satisfeitas" },
  { icon: MessageCircle, value: "9.800+", label: "Avaliações 5 estrelas" },
  { icon: Star, value: "4.9", label: "Nota média" },
  { icon: TrendingUp, value: "92%", label: "Taxa de recompra" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 md:py-32">
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

        <motion.div
          className="rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={socialProofImg}
            alt="Comunidade BigBoom - milhares de mulheres transformando seus corpos"
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
            <p className="text-primary-foreground text-xl md:text-2xl font-bold">
              Junte-se à comunidade BigBoom 💪
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
