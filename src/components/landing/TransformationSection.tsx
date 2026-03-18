import { motion } from "framer-motion";
import { Zap, Dumbbell, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Energia explosiva",
    description: "Creatina monohidratada aumenta a força e performance nos treinos em até 15%.",
  },
  {
    icon: Dumbbell,
    title: "Recuperação muscular",
    description: "BCAA acelera a recuperação muscular e reduz dores pós-treino significativamente.",
  },
  {
    icon: Sparkles,
    title: "Pele e firmeza",
    description: "Colágeno hidrolisado melhora elasticidade da pele e combate a flacidez.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TransformationSection = () => {
  return (
    <section id="beneficios" className="py-16 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O suplemento que está{" "}
            <span className="gradient-text">revolucionando</span> o shape feminino
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fórmula exclusiva com 3 ingredientes cientificamente comprovados para resultados reais.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={itemVariants}
              className="glass-card p-8 text-center hover:scale-[1.02] transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <b.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-muted-foreground">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
