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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="w-full bg-black py-12 md:py-20 flex justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 rounded-sm shadow-2xl max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-12 h-12 md:w-14 md:h-14 text-foreground" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
