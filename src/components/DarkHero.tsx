import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import darkHeroImage from "@/assets/dark-hero.jpg";

const DarkHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full h-[500px] md:h-[620px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${darkHeroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
          Our rich fragrance collections ensure you make
          <br className="hidden md:block" />a memorable and distinctive impact.
        </h2>

        <Button
          size="lg"
          className="bg-gold hover:bg-gold-dark text-white px-12 shadow-2xl"
        >
          Shop Now
        </Button>
      </motion.div>
    </section>
  );
};

export default DarkHero;
