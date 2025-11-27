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
      <div className="relative w-full h-[634px] overflow-hidden">

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

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center flex flex-col items-center">

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
                        className={`w-6 h-6 ${
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
                    className="text-4xl font-bold text-white leading-tight mb-8"
                    style={{
                      width: "866px",
                      height: "144px",
                      textShadow: "0 8px 24px rgba(0,0,0,0.5)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    "{testimonials[currentSlide].quote}"
                  </motion.blockquote>

                  {/* Author */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-white font-bold tracking-wider"
                    style={{
                      width: "139px",
                      height: "24px",
                      fontFamily: "'Inter', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {testimonials[currentSlide].author}
                  </motion.p>

                  {/* Country */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 }}
                    className="text-white/90"
                    style={{
                      width: "139px",
                      height: "19px",
                      fontFamily: "'Inter', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {testimonials[currentSlide].country}
                  </motion.p>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <Button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 hover:bg-black/60 text-white rounded-full z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <Button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 hover:bg-black/60 text-white rounded-full z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
