import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Store, Truck, Package } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Pick Up In Store",
    description:
      "Get your products at a store near you today. Online Order Pickup is available at all locations",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description:
      "Same-Day Delivery is available in most major cities and suburbs",
  },
  {
    icon: Package,
    title: "Free Standard Shipping",
    description:
      "It's fast, reliable, and applies to every order. Use code FREESHIP at checkout",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="w-full bg-black py-10 md:py-20 flex justify-center px-4 relative -translate-y-32">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="
          bg-white 
          w-full 
          max-w-6xl 
          mx-auto 
          shadow-2xl 
          px-5 
          py-7 
          sm:px-8 
          sm:py-10  
          md:px-12 
          md:py-12 
          -mt-12 
          sm:-mt-16 
          md:-mt-28
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle like reference */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-25 md:h-25 rounded-full border border-[#e5e5e5] flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#f2a900]" 
                strokeWidth={1}/>
              </div>

              {/* Title: 323x27, Playfair Display, 20px, semibold */}
              <h3
                className="
                  font-['Playfair_Display'] 
                  font-semibold 
                  text-[20px] 
                  leading-[27px]
                  text-foreground
                  w-[323px]
                  h-[27px]
                  mb-2
                  sm:mb-3
                "
              >
                {service.title}
              </h3>

              {/* Description: 317x50, Inter, 14px, light */}
              <p
                className="
                  font-['Inter']
                  font-light
                  text-[14px]
                  leading-[25px]
                  text-foreground/70
                  w-[317px]
                  h-[50px]
                "
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
