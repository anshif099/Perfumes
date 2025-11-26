import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import newsletterImage from "@/assets/newsletter.jpg";

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section ref={ref} className="w-full">
      <div className="pt-10 pb-0">
        {/* Background container */}
        <div
          className="relative w-full min-h-[80vh] md:min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center md:block"
          style={{ backgroundImage: `url(${newsletterImage})` }}
        >
          {/* Yellow card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="
              bg-gold rounded-md shadow-2xl box-border text-center
              px-6 py-8 w-[90%] max-w-[360px] 
              md:px-14 md:py-12 md:w-[400px]
              md:absolute md:right-40 md:top-1/2 md:-translate-y-1/2
            "
          >
            <h3 className="text-xl md:text-3xl font-bold text-dark mb-3 text-center">
              Subscribe Our Newsletter
            </h3>

            <p className="text-xs md:text-sm text-dark/90 mb-8 leading-relaxed text-center">
              Be the first to know about exclusive offers, new arrivals, and
              fragrance tips delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="text-center">
              {/* Input field */}
              <Input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-dark text-dark
                           placeholder:text-dark
                           px-4 py-3 text-sm mb-6"
              />

              {/* Button */}
              <Button
                type="submit"
                className="w-full py-3 bg-black text-white text-xs md:text-sm tracking-wide rounded-none hover:bg-black/90"
              >
                SUBSCRIBE
              </Button>

              {/* Bottom note */}
              <p className="mt-4 text-[10px] md:text-[11px] text-dark/80 leading-relaxed max-w-xs mx-auto">
                *By submitting, I agree to receive marketing emails and
                understand I can unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
