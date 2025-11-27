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
      className="w-full bg-[#feefdc] py-12 md:py-20 flex justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: White Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-sm shadow-lg text-center flex flex-col items-center justify-center w-[659px] h-[561px] mx-auto"
          >
            <h2
              className="
                text-5xl
                font-semibold
                leading-tight
                text-foreground
                mb-6
                w-[582px]
                h-[128px]
                mx-auto
                font-['Playfair_Display']
              "
            >
              Experience the Art of <br />
              Presentation
            </h2>

            <p
              className="
                text-[16px]
                text-foreground/70
                leading-relaxed
                mb-10
                w-[582px]
                h-[70px]
                mx-auto
                font-['Inter']
              "
            >
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
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <img
              src={packagingImage}
              alt="Perfume Packaging"
              className="w-[734px] h-[624px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
