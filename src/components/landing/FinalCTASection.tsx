import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden hero-gradient">
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Seu novo corpo{" "}
            <span className="gradient-text">começa hoje</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Não espere mais para sentir a transformação. Milhares de mulheres já começaram.
          </p>
          <a
            href="#planos"
            className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-accent text-accent-foreground font-bold text-xl pulse-glow hover:scale-105 transition-transform"
          >
            Comprar BigBoom agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
