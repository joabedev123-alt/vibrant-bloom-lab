import { motion } from "framer-motion";
import { Check, Flame, Truck } from "lucide-react";

const plans = [
  {
    name: "Starter",
    potes: 1,
    priceOriginal: "R$ 197",
    price: "R$ 147",
    parcela: "3x de R$ 49,00",
    discount: "25% OFF",
    badges: [],
    featured: false,
  },
  {
    name: "Mais vendido",
    potes: 2,
    priceOriginal: "R$ 394",
    price: "R$ 247",
    parcela: "6x de R$ 41,17",
    discount: "37% OFF",
    badges: ["🔥 Mais vendido", "🚚 Frete grátis"],
    featured: true,
  },
  {
    name: "Melhor custo",
    potes: 3,
    priceOriginal: "R$ 591",
    price: "R$ 327",
    parcela: "6x de R$ 54,50",
    discount: "45% OFF",
    badges: ["💰 Maior desconto", "🚚 Frete grátis"],
    featured: false,
  },
];

const includes = ["Creatina Monohidratada 5g", "Colágeno Hidrolisado 10g", "BCAA 2:1:1 3g", "Garantia 30 dias"];

const PlansSection = () => {
  return (
    <section id="planos" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu <span className="gradient-text">plano</span>
          </h2>
          <p className="text-lg text-muted-foreground">Quanto mais potes, maior o desconto.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.potes}
              className={`rounded-3xl p-8 relative ${
                plan.featured
                  ? "plan-highlight bg-card border-2 border-primary scale-105"
                  : "glass-card"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Badges */}
              {plan.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.badges.map((b) => (
                    <span key={b} className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <div className="text-sm font-semibold text-primary mb-1">{plan.discount}</div>
              <h3 className="text-2xl font-bold mb-1">{plan.potes} {plan.potes === 1 ? "pote" : "potes"}</h3>
              <div className="text-muted-foreground line-through text-sm">{plan.priceOriginal}</div>
              <div className="text-4xl font-bold my-2 gradient-text">{plan.price}</div>
              <div className="text-sm text-muted-foreground mb-6">ou {plan.parcela}</div>

              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold text-lg transition-all hover:scale-105 ${
                  plan.featured
                    ? "bg-accent text-accent-foreground pulse-glow"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Comprar agora
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
