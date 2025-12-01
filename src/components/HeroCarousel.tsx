import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 👉 Import separate images for mobile & desktop (example)
import hero1Desktop from "@/assets/hero1-desktop.jpg";
import hero1Mobile from "@/assets/hero1-mobile.jpg";

import hero2Desktop from "@/assets/hero2-desktop.jpg";
import hero2Mobile from "@/assets/hero2-mobile.jpg";

import hero3Desktop from "@/assets/hero3-desktop.jpg";
import hero3Mobile from "@/assets/hero3-mobile.jpg";

const slides = [
  {
    imageDesktop: hero1Desktop,
    imageMobile: hero1Mobile,
    title: "Where Elegance \nBreathes in Every Note",
    description:
      "Each layer unfolds with grace, creating a scent as unique as you.",
    textColor: "text-white",
    position: "right", // text block on right, text inside is left-aligned
  },
  {
    imageDesktop: hero2Desktop,
    imageMobile: hero2Mobile,
    title: "A scent that lingers \n with  elegance.",
    description:
      "Created for those who appreciate the art of fine perfume, every layer \n unfolds with intention and emotion.",
    textColor: "text-white",
    position: "left",
  },
  {
    imageDesktop: hero3Desktop,
    imageMobile: hero3Mobile,
    title: "A fragrance made \n to leave a mark.",
    description:
      "Its balanced composition enhances your individuality, making every \n moment feel effortlessly elegant.",
    textColor: "text-white",
    position: "left",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const isRight = slides[currentSlide].position === "right";

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="
        relative w-full
        h-screen
        overflow-hidden
        bg-black
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE (desktop & mobile custom) */}
          <div className="w-full h-full relative">
            <picture>
              {/* Desktop / Tablet */}
              <source
                media="(min-width: 768px)"
                srcSet={activeSlide.imageDesktop}
              />
              {/* Mobile */}
              <img
                src={activeSlide.imageMobile}
                alt="Hero background"
                className="w-full h-full object-cover"
              />
            </picture>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* CONTENT */}
            <div
              className={`
                absolute inset-y-6 sm:inset-y-10 lg:inset-y-16
                inset-x-4 sm:inset-x-10 lg:inset-x-52
                flex items-center
                ${isRight ? "justify-end" : "justify-start"}
              `}
            >
              <div
                className="
                  max-w-full sm:max-w-xl lg:max-w-2xl
                  text-left
                  flex flex-col items-start
                "
              >
                {/* TITLE */}
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className={`
                    mb-4 sm:mb-6
                    ${activeSlide.textColor} drop-shadow-2xl
                    font-['Playfair_Display']
                    font-semibold  
                    leading-tight
                    text-[32px] sm:text-[44px] lg:text-[60px]
                    whitespace-pre-line
                  `}
                >
                  {activeSlide.title}
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={`
                    ${activeSlide.textColor}
                    font-Inter font-normal opacity-95
                    text-[14px] sm:text-[16px]
                    max-w-md sm:max-w-lg lg:max-w-xl
                    whitespace-pre-line
                  `}
                >
                  {activeSlide.description}
                </motion.p>

                {/* BUTTON */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-6 sm:mt-8 flex justify-start"
                >
                  <Link to="/Shop">
                    <Button
                      size="lg"
                      className={`
                        w-full sm:w-[240px] lg:w-[290px] h-[50px] lg:h-[54px]
                        font-Inter font-normal
                        text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px]
                        ${
                          activeSlide.textColor === "text-white"
                            ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                            : "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
                        }
                        transition-all duration-300
                      `}
                    >
                      Shop Now
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-2 h-2 sm:w-3 sm:h-3 rounded-full
              transition-all duration-300
              ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
