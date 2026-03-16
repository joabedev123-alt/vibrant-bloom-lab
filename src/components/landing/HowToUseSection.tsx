import { motion } from "framer-motion";
import { GlassWater, Dumbbell, Flame } from "lucide-react";

const steps = [
  {
    icon: GlassWater,
    step: "01",
    title: "Misture",
    description: "Adicione 1 scoop em 200ml de água gelada e misture bem.",
  },
  {
    icon: Flame,
    step: "02",
    title: "Consuma",
    description: "Tome 30 minutos antes do treino para máxima absorção.",
  },
  {
    icon: Dumbbell,
    step: "03",
    title: "Treine",
    description: "Sinta a diferença na energia, força e recuperação.",
  },
];

const HowToUseSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="gradient-text">usar</span>
          </h2>
          <p className="text-lg text-muted-foreground">Simples, prático e delicioso.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                <s.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
