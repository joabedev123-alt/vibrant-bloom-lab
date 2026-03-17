import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Benefícios", href: "#beneficios" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Planos", href: "#planos" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 px-6 py-4 border border-border/40 bg-background/60 backdrop-blur-md rounded-2xl lg:mx-auto lg:max-w-6xl"
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">BigBoom</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#planos"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Comprar Agora
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 glass-card bg-background/95 backdrop-blur-xl border border-border/40 rounded-2xl flex flex-col gap-4 text-center shadow-lg md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground py-2 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#planos"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg mt-2"
          >
            Comprar Agora
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
