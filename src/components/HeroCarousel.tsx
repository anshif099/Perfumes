import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "A Fragrance\nMade To Mark",
    description: "Its balanced composition enhances your individuality.",
    textColor: "text-white",
    position: "right",
  },
  {
    image: hero2,
    title: "A Scent That\nLingers Elegantly",
    description: "For those who love the art of fine perfume.",
    textColor: "text-white",
    position: "left",
  },
  {
    image: hero3,
    title: "Elegance Breathes\nIn Every Note",
    description: "A scent as unique as you.",
    textColor: "text-white",
    position: "left",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[520px] md:min-h-[650px] lg:min-h-[800px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className={`
              w-full h-full bg-center relative
              bg-cover
              /* If you want ZERO cropping (no zoom at all), replace 'bg-cover' with:
                 'bg-contain bg-no-repeat bg-black' */
            `}
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* CONTENT */}
            <div
              className={`absolute inset-x-4 sm:inset-x-8 md:inset-x-16 
                          top-1/2 -translate-y-1/2 
                          flex ${
                            slides[currentSlide].position === "right"
                              ? "justify-end"
                              : "justify-start"
                          }`}
            >
              <div
                className={`
                  max-w-full sm:max-w-xl md:max-w-2xl
                  ${slides[currentSlide].position === "right" ? "text-right" : "text-left"}
                `}
              >
                {/* TITLE */}
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className={`
                    font-semibold whitespace-pre-line mb-4 sm:mb-6
                    ${slides[currentSlide].textColor} drop-shadow-2xl
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                    leading-tight
                    font-['Playfair_Display']
                  `}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={`
                    ${slides[currentSlide].textColor}
                    font-['Inter'] opacity-95
                    text-sm sm:text-base md:text-lg
                    max-w-md sm:max-w-lg md:max-w-xl
                  `}
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* BUTTON */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className={`mt-6 sm:mt-8 ${
                    slides[currentSlide].position === "right"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }`}
                >
                  <Button
                    size="lg"
                    className={`${
                      slides[currentSlide].textColor === "text-white"
                        ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                        : "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
                    } transition-all duration-300 px-6 sm:px-8 py-3 text-sm sm:text-base`}
                  >
                    Shop Now
                  </Button>
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
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
