import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";

const products = [
  {
    image: product1,
    title: "Velora Mist",
    notes: {
      top: "Bergamot, Pear",
      heart: "Jasmine, Orange Blossom",
      base: "Musk, Vanilla",
    },
  },
  {
    image: product2,
    title: "Amber Eclipse",
    notes: {
      top: "Saffron, Pink Pepper",
      heart: "Amber Resin, Rose",
      base: "Patchouli, Sandalwood",
    },
  },
  {
    image: product3,
    title: "Luxe Whisper",
    notes: {
      top: "Mandarin, Neroli",
      heart: "Tuberose, Ylang-Ylang",
      base: "Cashmere Wood",
    },
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="products"
      ref={ref}
      className="w-full bg-black py-12 md:py-20 flex justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              product={product}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  product,
  index,
  isInView,
}: {
  product: (typeof products)[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[520px] md:h-[760px] rounded-lg overflow-hidden group"
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      {/* Hover Frame */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-[19%] left-1/2 -translate-x-1/2 w-[76%] h-80 border-[16px] border-gold/12 rounded-md pointer-events-none"
      />

      {/* Hover Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[72%] p-6 bg-white/90 rounded-sm shadow-2xl"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
          {product.title}
        </h3>
        <div className="text-sm md:text-base text-foreground/80 leading-relaxed">
          <p>
            <strong>Top:</strong> {product.notes.top}
          </p>
          <p>
            <strong>Heart:</strong> {product.notes.heart}
          </p>
          <p>
            <strong>Base:</strong> {product.notes.base}
          </p>
        </div>
      </motion.div>

      {/* Shop Now Button */}
      <div className="absolute bottom-0 w-full text-center py-7 bg-gradient-to-t from-black/30 to-black/10">
        <Button
          variant="outline"
          className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
          onClick={() => {
            window.location.href = "shop.html";
          }}
        >
          Shop Now
        </Button>
      </div>
    </motion.div>
  );
};

export default Products;
