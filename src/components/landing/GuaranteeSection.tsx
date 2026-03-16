import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container max-w-3xl">
        <motion.div
          className="glass-card p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Garantia de 30 dias</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Se você não sentir diferença nos seus treinos em 30 dias, devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
