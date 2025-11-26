import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import newsletterImage from "@/assets/newsletter.jpg";
import { ArrowUpRight } from "lucide-react";


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
  className="relative w-full md:min-h-[100vh] bg-cover bg-center"
  style={{ backgroundImage: `url(${newsletterImage})` }}
>

          {/* 🟨 Yellow box – positioned like your screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
           className="absolute right-6 md:right-40 top-[60%] -translate-y-[45%]
bg-gold
px-12 md:px-14 py-10 md:py-12
rounded-md shadow-2xl
w-[340px] md:w-[400px]
box-border text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3 text-center whitespace-nowrap -translate-x-4">
  Subscribe Our Newsletter
</h3>

<p className="text-xs md:text-sm text-dark/90 mb-8 leading-relaxed text-center">
  Get the latest news about Perfume tips and new products.
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
               px-4 py-3 text-sm mb-10"
  />

  {/* Arrow button */}
  <div className="flex flex-col items-center">
    <Button
  type="submit"
  size="icon"
  className="w-16 h-16 bg-dark hover:bg-dark-overlay text-gold
             rounded-2xl shadow-lg
             flex items-center justify-center
             transition-transform duration-200
             hover:scale-105"
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
  {/* Ultra long diagonal */}
  <line x1="-1" y1="25" x2="25" y2="-1" />

  {/* Arrow head */}
  <polyline points="14 -1 25 -1 25 10" />
</svg>

</Button>

    {/* Subscribe text */}
    <span className="mt-3 text-[12px] tracking-[0.22em] uppercase text-dark">
      Subscribe
    </span>
  </div>

  {/* Divider line */}
  <div className="mt-10 h-px w-full bg-dark" />

  {/* Bottom note */}
  <p className="mt-5 text-[11px] text-dark/80 leading-relaxed max-w-xs mx-auto">
    No Spam, only quality articles to help you be more radiant.
    You can opt out anytime.
  </p>

</form>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
