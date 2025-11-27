import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import modelImage from "@/assets/model.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-white py-16 md:py-24 flex justify-center"
    >
      <div className="w-full max-w-6xl xl:max-w-7xl px-4 lg:px-8 flex justify-center">
        {/* exact layout similar to design: left box, right image, gap between */}
        <div className="grid grid-cols-1 lg:grid-cols-[738px_493px] gap-10 lg:gap-[56px] items-center justify-center">
          {/* TEXT BOX */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ width: "738px", height: "683px" }}
            className="bg-cream flex flex-col items-center justify-center p-10 md:p-12 lg:p-14 rounded-sm text-center order-2 lg:order-1"
          >
            {/* HEADING */}
            <h2
              style={{ width: "579px", height: "128px" }}
              className="text-3xl md:text-5xl lg:text-5xl leading-tight text-black font-semibold mb-6 flex flex-col justify-center text-center"
            >
              Born from a passion for
              <span className="text-gold">
                Scent <span className="text-black">and</span> Elegance.
              </span>
            </h2>

            {/* PARAGRAPH */}
            <p
              style={{ width: "579px", height: "175px" }}
              className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10 text-center"
            >
              At Beek Perfumes UAE, we believe fragrance is a quiet form of art
              — a way to express elegance without excess. Each scent is crafted
              with thoughtful refinement, blending timeless botanicals with
              modern sophistication. Our philosophy is rooted in purity,
              balance, and meaningful simplicity, inviting you to experience
              beauty through subtlety and depth.
            </p>

            {/* BUTTON */}
            <a
              href="/OurStory"
              className=" px-12 py-3 bg-gold hover:bg-gold-dark text-white font-semibold transition-colors text-center text-lg inline-flex items-center justify-center"
            >
              Know More
            </a>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: "493px", height: "683px" }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <img
              src={modelImage}
              alt="Perfume Model"
              style={{ width: "493px", height: "683px" }}
              className="object-cover rounded-sm shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
