import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial1.jpg";
import testimonial2 from "@/assets/testimonial2.jpg";
import testimonial3 from "@/assets/testimonial3.jpg";

const testimonials = [
  {
    image: testimonial1,
    quote:
      "From ordering to delivery, everything was smooth. The perfume smelled exactly as described, and the longevity is amazing.",
    author: "SNEHA KAPOOR",
    country: "UAE",
    rating: 4,
  },
  {
    image: testimonial2,
    quote:
      "The team helped me choose a fragrance based on my style, and it was spot-on! The quality is top-notch and totally worth the price.",
    author: "ARJUN MEHTA",
    country: "UAE",
    rating: 4,
  },
  {
    image: testimonial3,
    quote:
      "I'm impressed by the wide range of fragrances. Each perfume feels premium, and the scent stays for hours. Perfect for gifting!",
    author: "RIYA SHARMA",
    country: "UAE",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    // Use w-screen so it ignores parent max-width and truly spans full viewport width
    <section className="w-screen bg-black py-0 overflow-hidden">
      <div className="w-full">
        {/* Height responsive for all screens */}
        <div className="relative h-[380px] sm:h-[460px] md:h-[550px] lg:h-[634px] overflow-hidden rounded-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url(${testimonials[currentSlide].image})`,
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-20">
                  <div className="text-center max-w-4xl">
                    {/* Stars */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center gap-2 mb-4 sm:mb-6"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${
                            i < testimonials[currentSlide].rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-none text-yellow-400"
                          }`}
                        />
                      ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-white leading-tight mb-4 sm:mb-6"
                      style={{
                        textShadow: "0 8px 24px rgba(0,0,0,0.5)",
                        fontFamily: "'Playfair Display'",
                      }}
                    >
                      "{testimonials[currentSlide].quote}"
                    </motion.blockquote>

                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      style={{ fontFamily: "'Inter'" }}
                    >
                      <p className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wider mb-1 sm:mb-2">
                        {testimonials[currentSlide].author}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-white/90">
                        {testimonials[currentSlide].country}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/60 text-white z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/60 text-white z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
