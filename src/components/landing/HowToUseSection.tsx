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

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className="flex items-start gap-4 text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <s.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-3xl overflow-hidden glass-card relative aspect-[9/16] w-full max-w-sm mx-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <video
              src="/src/assets/IMG_7769.MOV"
              className="w-full h-full object-cover"
              controls
              playsInline
              muted
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
