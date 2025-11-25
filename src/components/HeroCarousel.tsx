import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "A Fragrance Made\nTo Leave A Mark.",
    description: "Its balanced composition enhances your individuality.",
    textColor: "text-white",
    position: "right",
  },
  {
    image: hero2,
    title: "A Scent That Lingers\nWith Elegance.",
    description: "For those who love the art of fine perfume.",
    textColor: "text-black",
    position: "left",
  },
  {
    image: hero3,
    title: "Where Elegance\nBreathes in Every Note",
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[850px] mt-20 overflow-hidden">
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
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/20" />

            <div
              className={`absolute top-1/2 -translate-y-1/2 max-w-xl px-6 md:px-12 ${
                slides[currentSlide].position === "right"
                  ? "right-8 md:right-16 text-right"
                  : "left-8 md:left-16 text-left"
              }`}
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 whitespace-pre-line ${slides[currentSlide].textColor} drop-shadow-2xl`}
                style={{ textShadow: "0 6px 16px rgba(0,0,0,0.45)" }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={`text-lg md:text-xl mb-8 ${slides[currentSlide].textColor} opacity-95`}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className={`${
                    slides[currentSlide].textColor === "text-white"
                      ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                      : "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
                  } transition-all duration-300`}
                >
                  Shop Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
