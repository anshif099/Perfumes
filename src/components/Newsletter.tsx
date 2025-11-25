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
    <section ref={ref} className="w-full bg-black py-0">
      <div className="container mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto py-12 md:py-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-[520px] bg-cover bg-center rounded-md shadow-2xl order-2 lg:order-1"
            style={{ backgroundImage: `url(${newsletterImage})` }}
          />

          {/* Right: Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gold p-8 md:p-10 rounded-md shadow-2xl min-h-[340px] flex flex-col justify-between order-1 lg:order-2"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Subscribe Our Newsletter
              </h3>
              <p className="text-sm md:text-base text-dark/90 mb-6 leading-relaxed">
                Get the latest news about Perfume tips and new products.
              </p>

              <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/95 border-dark/20 text-dark placeholder:text-dark/60"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="w-14 h-14 bg-dark hover:bg-dark-overlay text-white rounded-lg shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            <p className="text-xs md:text-sm text-dark/75 leading-relaxed">
              No Spam, only quality articles to help you be more radiant. You
              can opt out anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
