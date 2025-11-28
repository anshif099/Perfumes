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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: White Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="
              bg-white rounded-sm shadow-lg
              text-center
              flex flex-col items-center justify-center
              w-full max-w-[660px]
              mx-auto
              px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14
            "
          >
            <h2
              className="
                font-['Playfair_Display']
                font-semibold
                text-3xl md:text-4xl lg:text-5xl
                leading-tight
                text-foreground
                mb-6
                max-w-[582px]
              "
            >
              Experience the Art of <br />
              Presentation
            </h2>

            <p
              className="
                font-['Inter']
                text-sm md:text-base
                text-foreground/70
                leading-relaxed
                mb-10
                max-w-[582px]
              "
            >
              At Beek, every package is designed with elegance and intention—
              crafted to elevate your fragrance experience from the very first
              glance.
            </p>

            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white px-10 md:px-12"
            >
              Know More
            </Button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center w-full"
          >
            <div
  className="
    w-full
    lg:w-[734px]
    lg:h-[561px]
    mx-auto
    overflow-hidden
  "
>
  <img
    src={packagingImage}
    alt="Perfume Packaging"
    className="w-full h-full object-cover"
  />
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
