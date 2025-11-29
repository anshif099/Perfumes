import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import modelImage from "@/assets/model.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-white py-16 md:py-24 flex justify-center"
    >
      <div className="w-full max-w-6xl xl:max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
          {/* TEXT BOX */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="
              bg-cream
              flex flex-col items-center justify-center
              px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-16
              rounded-sm
              text-center
              w-full h-full
            "
          >
            {/* HEADING */}
            <h2
              className="
                text-3xl md:text-4xl lg:text-5xl
                leading-tight text-black font-semibold mb-6
                flex flex-col
                max-w-[580px]
              "
            >
              Born from a passion for
              <span className="text-gold">
                Scent <span className="text-black">and</span> Elegance.
              </span>
            </h2>

            {/* PARAGRAPH */}
            <p
              className="
                text-base md:text-lg
                text-foreground/80 leading-relaxed mb-10
                max-w-[580px]
                text-center mx-auto
              "
            >
              At Beek Perfumes UAE, we believe fragrance is a quiet form of art
              — a way to express elegance without excess. Each scent is crafted
              with thoughtful refinement, blending timeless botanicals with
              modern sophistication. Our philosophy is rooted in purity, balance,
              and meaningful simplicity, inviting you to experience beauty
              through subtlety and depth.
            </p>

            {/* BUTTON */}
            <Link to="/Shop">
           <button>
            <a
              
              className="
                px-10 md:px-12 py-3
                bg-gold hover:bg-gold-dark
                text-white font-semibold
                transition-colors
                text-base md:text-lg
                inline-flex items-center justify-center
              "
            >
              Know More
            </a>
            </button>
            </Link>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center lg:justify-end order-first lg:order-none"
          >
            <div className="w-full max-w-[493px] aspect-[493/683]">
              <img
                src={modelImage}
                alt="Perfume Model"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
