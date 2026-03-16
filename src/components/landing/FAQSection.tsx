import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é BigBoom e por que é 3 em 1?",
    a: "BigBoom combina Creatina Monohidratada, Colágeno Hidrolisado e BCAA em um único suplemento. Você economiza tempo e dinheiro ao invés de comprar 3 produtos separados.",
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "Os primeiros efeitos na energia e disposição são sentidos já na primeira semana. Resultados visíveis no shape e firmeza da pele surgem entre 30-60 dias de uso contínuo.",
  },
  {
    q: "Tem efeitos colaterais?",
    a: "BigBoom utiliza ingredientes com ampla comprovação científica de segurança. Creatina, colágeno e BCAA são suplementos considerados muito seguros quando usados nas dosagens recomendadas.",
  },
  {
    q: "Posso tomar se não treino?",
    a: "Sim! O colágeno e BCAA trazem benefícios independentemente do treino. Porém, os resultados são potencializados com a prática de exercícios.",
  },
  {
    q: "Como funciona o frete?",
    a: "Frete grátis para compras a partir de 2 potes. Para 1 pote, o frete é calculado pelo CEP. Entregamos para todo o Brasil.",
  },
  {
    q: "É aprovado pela ANVISA?",
    a: "Sim, BigBoom é fabricado em laboratório certificado pela ANVISA com controle rigoroso de qualidade e rastreabilidade.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
