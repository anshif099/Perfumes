import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
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
        <div
  className="relative w-full min-h-[460px] md:min-h-[520px] bg-cover bg-center"
  style={{ backgroundImage: `url(${newsletterImage})` }}
>

          {/* 🟨 Yellow box – positioned like your screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute right-6 md:right-40 top-1/2 -translate-y-[45%] bg-gold px-8 py-10 md:px-12 md:py-12 rounded-md shadow-2xl w-[320px] md:w-[380px]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3 text-center md:text-left">
              Subscribe Our Newsletter
            </h3>
            <p className="text-xs md:text-sm text-dark/90 mb-8 leading-relaxed text-center md:text-left">
              Get the latest news about Perfume tips and new products.
            </p>

            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-dark/30 text-dark placeholder:text-dark/60 mb-8"
              />

              <div className="flex flex-col items-center md:items-start gap-2">
                <Button
                  type="submit"
                  size="icon"
                  className="w-14 h-14 bg-dark hover:bg-dark-overlay text-gold rounded-md shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <span className="text-[11px] tracking-[0.18em] uppercase text-dark">
                  Subscribe
                </span>
              </div>

              <div className="mt-8 h-px w-full bg-dark/35" />

              <p className="mt-3 text-[10px] md:text-xs text-dark/75 leading-relaxed text-center md:text-left">
                No Spam, only quality articles to help you be more radiant. You
                can opt out anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
