import { motion } from "framer-motion";
import { Check, Flame, Truck } from "lucide-react";
import produtoImg from "../../assets/produto/IMG_6269-Photoroom.png";
import PromoBanner from "./PromoBanner";

const plans = [
  {
    name: "Creatina Big Boom Pink Lemonade - 3 Potes",
    flavor: "Pink Lemonade",
    oldPrice: "R$ 380,25",
    price: "R$ 133,08",
    link: "https://pv.b4you.com.br/api/product/c/OEpnO2ZHFO/HDDZT8KtcO",
    badges: ["3 Potes", "Mais vendido"],
    image: produtoImg,
    featured: true,
  },
  {
    name: "Creatina Melancia Big Boom - 3 Potes",
    flavor: "Melancia",
    oldPrice: "R$ 380,25",
    price: "R$ 133,08",
    link: "https://pv.b4you.com.br/api/product/c/qWZQ-XKhzJ/HDDZT8KtcO",
    badges: ["3 Potes", "Mais vendido"],
    image: produtoImg,
    featured: true,
  },
  {
    name: "Creatina Frutas Amarelas Big Boom - 3 Potes",
    flavor: "Frutas Amarelas",
    oldPrice: "R$ 350,10",
    price: "R$ 122,52",
    link: "https://pv.b4you.com.br/api/product/c/r7waNbsxx8/HDDZT8KtcO",
    badges: ["3 Potes", "Mais vendido"],
    image: produtoImg,
    featured: true,
  },
  {
    name: "Creatina Big Boom Pink Lemonade - 2 Potes",
    flavor: "Pink Lemonade",
    oldPrice: "R$ 270,40",
    price: "R$ 94,63",
    link: "https://pv.b4you.com.br/api/product/c/Qc7V-U4ceo/HDDZT8KtcO",
    badges: ["2 Potes"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "Creatina Melancia Big Boom - 2 Potes",
    flavor: "Melancia",
    oldPrice: "R$ 270,40",
    price: "R$ 94,63",
    link: "https://pv.b4you.com.br/api/product/c/qPrubJwtNA/HDDZT8KtcO",
    badges: ["2 Potes"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "Creatina Melancia + Creatina Pink Lemonade",
    flavor: "Melancia + Pink Lemonade",
    oldPrice: "R$ 270,40",
    price: "R$ 94,63",
    link: "https://pv.b4you.com.br/api/product/c/mqUSldR0Ts/HDDZT8KtcO",
    badges: ["Combo"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "Creatina Frutas Amarelas Big Boom - 2 Potes",
    flavor: "Frutas Amarelas",
    oldPrice: "R$ 269,10",
    price: "R$ 94,18",
    link: "https://pv.b4you.com.br/api/product/c/3_HBzrWUhx/HDDZT8KtcO",
    badges: ["2 Potes"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "3x Termogênico Smart Burnboom",
    flavor: "Smart Burnboom",
    oldPrice: "R$ 197,70",
    price: "R$ 69,18",
    link: "https://pv.b4you.com.br/api/product/c/5cpNzu15jR/HDDZT8KtcO",
    badges: ["3 Unidades"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "Creatina Big Boom Pink Lemonade - 1 Pote",
    flavor: "Pink Lemonade",
    oldPrice: "R$ 169,00",
    price: "R$ 59,14",
    link: "https://pv.b4you.com.br/api/product/c/2TPIqPIyqx/HDDZT8KtcO",
    badges: ["1 Pote"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "Creatina Melancia Big Boom - 1 Pote",
    flavor: "Melancia",
    oldPrice: "R$ 169,00",
    price: "R$ 59,14",
    link: "https://pv.b4you.com.br/api/product/c/Fuqyn803tT/HDDZT8KtcO",
    badges: ["1 Pote"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "Creatina Frutas Amarelas Big Boom - 1 Pote",
    flavor: "Frutas Amarelas",
    oldPrice: "R$ 169,00",
    price: "R$ 59,14",
    link: "https://pv.b4you.com.br/api/product/c/8fSF13QFSG/HDDZT8KtcO",
    badges: ["1 Pote"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "2x Termogênico Smart Burnboom",
    flavor: "Smart Burnboom",
    oldPrice: "R$ 139,80",
    price: "R$ 48,92",
    link: "https://pv.b4you.com.br/api/product/c/ZTwxBuafh_/HDDZT8KtcO",
    badges: ["2 Unidades"],
    image: produtoImg,
    featured: false,
  },
  {
    name: "Termogênico Smart Burnboom",
    flavor: "Smart Burnboom",
    oldPrice: "R$ 79,90",
    price: "R$ 27,96",
    link: "https://pv.b4you.com.br/api/product/c/rP9zw8Q_7L/HDDZT8KtcO",
    badges: ["1 Unidade"],
    image: produtoImg,
    featured: false,
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-16 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu <span className="gradient-text">produto</span>
          </h2>
          <p className="text-lg text-muted-foreground">Aproveite nossos descontos e escolha a melhor opção para você.</p>
        </motion.div>

        <PromoBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`flex flex-col rounded-3xl p-6 md:p-8 relative ${
                plan.featured
                  ? "plan-highlight bg-card border-2 border-primary scale-[1.02] hover:scale-[1.05]"
                  : "glass-card hover:scale-[1.03]"
              } transition-transform`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              {/* Flavor - Elegant and striking */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-full text-center px-4">
                <span 
                  className="text-lg sm:text-2xl md:text-3xl font-bold px-4 sm:px-6 py-1 rounded-full bg-accent text-accent-foreground shadow-xl inline-block"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {plan.flavor}
                </span>
              </div>

              {/* Image */}
              <div className="w-full h-64 mb-6 relative rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center p-4 mt-4">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-500 drop-shadow-2xl" 
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
                {plan.badges.map((b) => (
                  <span key={b} className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {b}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2 min-h-[56px] flex items-start">{plan.name}</h3>
              
              <div className="mt-auto">
                {plan.oldPrice && (
                  <div className="text-sm font-semibold text-muted-foreground/80 line-through mb-[-4px]">
                    {plan.oldPrice}
                  </div>
                )}
                <div className="text-3xl font-bold my-2 gradient-text">{plan.price}</div>
                
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-4 mt-6 rounded-xl font-bold text-lg transition-all hover:opacity-90 ${
                    plan.featured
                      ? "bg-accent text-accent-foreground pulse-glow"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Garantir Agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
