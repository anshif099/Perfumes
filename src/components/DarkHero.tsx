import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import darkHeroImage from "@/assets/dark-hero.jpg";
import { Link } from "react-router-dom";

const DarkHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="
        relative w-full
        flex items-center justify-center
        bg-no-repeat bg-center bg-cover
        min-h-[480px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[720px] xl:min-h-[820px]
        py-16 sm:py-20 lg:py-24
      "
      style={{
        backgroundImage: `url(${darkHeroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6"
      >
        <h2
          className="
            text-white leading-tight mb-8 mx-auto
            font-['Playfair_Display']
            text-2xl sm:text-3xl md:text-4xl lg:text-[36px]
            max-w-[760px]
          "
        >
          Our rich fragrance collections ensure you make
          <br className="hidden md:block" />
          a memorable and distinctive impact.
        </h2>
        <Link to="/Shop">
        <Button
          size="lg"
          className="
            bg-gold hover:bg-gold-dark text-white
            px-10 sm:px-12
            shadow-2xl
            w-[290px] 
          "
        >
          Shop Now
        </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default DarkHero;
