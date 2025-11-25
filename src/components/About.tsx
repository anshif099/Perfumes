import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import modelImage from "@/assets/model.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-white py-12 md:py-20 flex justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-cream p-8 md:p-16 rounded-sm text-center order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Born from a passion for{" "}
              <span className="text-gold">Scent and Elegance.</span>
            </h2>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto">
              At Beek Perfumes UAE, we believe fragrance is a quiet form of art
              — a way to express elegance without excess. Each scent is crafted
              with thoughtful refinement, blending timeless botanicals with
              modern sophistication. Our philosophy is rooted in purity,
              balance, and meaningful simplicity, inviting you to experience
              beauty through subtlety and depth.
            </p>

            <a
              href="/ourstory.html"
              className="inline-block px-12 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded transition-colors"
            >
              Know More
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <img
              src={modelImage}
              alt="Perfume Model"
              className="w-full max-w-md h-auto object-cover rounded-sm shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
