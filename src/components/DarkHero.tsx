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
      className="relative w-full flex items-center justify-center bg-no-repeat"
      style={{
        backgroundImage: `url(${darkHeroImage})`,
        backgroundSize: "1440px 1074px",
        minHeight: "1074px",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
        style={{ width: "787px" }}
      >
        <h2
          className="text-white leading-tight mb-8 mx-auto"
          style={{
            fontFamily: "'Playfair Display'",
            fontSize: "36px",
            height: "96px",
            width: "787px",
          }}
        >
          Our rich fragrance collections ensure you make
          <br className="hidden md:block" />
          a memorable and distinctive impact.
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
