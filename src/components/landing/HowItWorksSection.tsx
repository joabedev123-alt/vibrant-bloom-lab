import { motion } from "framer-motion";
import { FlaskConical, Droplets, Atom } from "lucide-react";

const ingredients = [
  {
    icon: FlaskConical,
    name: "Creatina Monohidratada",
    dosage: "5g por dose",
    description: "Aumenta força, potência e volume muscular. Comprovada por mais de 500 estudos científicos.",
    stat: "+15% performance",
  },
  {
    icon: Droplets,
    name: "Colágeno Hidrolisado",
    dosage: "10g por dose",
    description: "Melhora firmeza da pele, fortalece unhas e cabelos. Absorção 90% superior ao colágeno comum.",
    stat: "+30% elasticidade",
  },
  {
    icon: Atom,
    name: "BCAA 2:1:1",
    dosage: "3g por dose",
    description: "Leucina, isoleucina e valina na proporção ideal para recuperação muscular acelerada.",
    stat: "-40% dor muscular",
  },
];

const HowItWorksSection = () => {
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
            A ciência por trás do <span className="gradient-text">BigBoom</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada ingrediente selecionado com base em evidência científica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((item, i) => (
            <motion.div
              key={item.name}
              className="glass-card p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="absolute top-0 right-0 bg-primary/5 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <item.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-1">{item.name}</h3>
              <span className="text-sm text-primary font-semibold">{item.dosage}</span>
              <p className="text-muted-foreground mt-3 mb-4">{item.description}</p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-bold">
                {item.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
