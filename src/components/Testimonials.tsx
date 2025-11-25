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
    <section className="w-full bg-black py-0">
      <div className="container mx-auto px-0 md:px-4">
        <div className="relative h-[420px] md:h-[520px] overflow-hidden rounded-none md:rounded-lg max-w-7xl mx-auto">
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
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${testimonials[currentSlide].image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20">
                  <div className="text-center max-w-4xl">
                    {/* Stars */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center gap-2 mb-6"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 md:w-6 md:h-6 ${
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
                      className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
                      style={{ textShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
                    >
                      "{testimonials[currentSlide].quote}"
                    </motion.blockquote>

                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-lg md:text-xl font-bold text-white tracking-wider mb-2">
                        {testimonials[currentSlide].author}
                      </p>
                      <p className="text-sm md:text-base text-white/90">
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
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-14 h-14 md:w-18 md:h-18 rounded-full bg-black/40 hover:bg-black/60 text-white z-10"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-14 h-14 md:w-18 md:h-18 rounded-full bg-black/40 hover:bg-black/60 text-white z-10"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
