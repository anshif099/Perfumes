import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import packagingImage from "@/assets/packaging.jpg";

const Packaging = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-cream py-12 md:py-20 flex justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: White Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-20 rounded-sm shadow-lg text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
              Experience the Art of <br />
              Presentation
            </h2>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-10 max-w-3xl mx-auto">
              At Beek, every package is designed with elegance and intention—crafted
              to elevate your fragrance experience from the very first glance.
            </p>

            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white px-12"
            >
              Know More
            </Button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, rotate: -10 }
                : { opacity: 0, x: 50, rotate: 0 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <img
              src={packagingImage}
              alt="Perfume Packaging"
              className="w-full max-w-md h-auto object-contain shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
