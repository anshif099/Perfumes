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
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center md:block"
          style={{
            backgroundImage: `url(${newsletterImage})`,
          }}
        >
          {/* Desktop frame size 1440 x 855 */}
          <div className="w-full max-w-[1440px] mx-auto md:h-[855px] md:min-h-[855px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="
                bg-gold shadow-2xl box-border text-center
                px-8 py-9 w-[90%] max-w-[360px] mx-auto
                md:px-16 md:py-16 md:w-[596px] md:h-[621px] md:max-w-none
                md:absolute md:right-40 md:top-1/2 md:-translate-y-1/2
                flex flex-col items-center
              "
            >
              {/* H3: Playfair Bold 36px, 443 x 48, single line */}
              <h3
                className="
                  font-playfair font-bold
                  text-[28px] md:text-[36px]
                  leading-[1.3]
                  text-dark mb-1
                  max-w-[443px] h-[48px]
                  mx-auto text-center
                "
              >
                Subscribe Our Newsletter
              </h3>

              {/* Paragraph: Inter Regular 16px, 281 x 38 */}
              <p
                className="
                  font-inter
                  text-[16px] md:text-[16px]
                  leading-[1.2]
                  text-dark/90 mb-20
                  max-w-[281px] h-[38px]
                  mx-auto text-center
                "
              >
                Get the latest news about Perfume tips and new products.
              </p>

              <form onSubmit={handleSubmit} className="w-full text-center flex flex-col items-center ">
                <Input
  type="email"
  placeholder="Enter your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="
    w-full max-w-[360px]
    bg-transparent border border-dark text-dark
    [&::placeholder]:text-[20px]
    [&::placeholder]:text-dark
    px-4 py-3 text-sm mb-10
  "
/>
<div className="flex flex-col items-center">
                  <Button
                    type="submit"
                    size="icon"
                    className="
                      w-16 h-16 bg-dark hover:bg-dark-overlay text-gold
                      rounded-2xl shadow-lg
                      flex items-center justify-center
                      transition-transform duration-200
                      hover:scale-105
                    "
                  >
                    <svg
                      viewBox="-2 -2 28 28"
                      className="w-11 h-11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="-1" y1="25" x2="25" y2="-1" />
                      <polyline points="14 -1 25 -1 25 10" />
                    </svg>
                  </Button>

                  <span className="mt-3 text-[12px] tracking-[0.22em] uppercase text-dark">
                    Subscribe
                  </span>
                </div>

                <div className="mt-10 h-px w-full max-w-[360px] bg-dark" />
                <br></br>

                <p
                className="
                  font-inter
                  text-[14px] md:text-[14px]
                  leading-[1.2]
                  text-dark/90 mb-20
                  max-w-[281px] h-[38px]
                  mx-auto text-center
                "
              >
                  No Spam, only quality articles to help you be more radiant. You
                  can opt out anytime.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
