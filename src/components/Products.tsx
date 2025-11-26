import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
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
  {
    image: product1,
    title: "Midnight Aura",
    notes: {
      top: "Blackcurrant, Bergamot",
      heart: "Rose, Iris",
      base: "Cedarwood, Vanilla",
    },
  },
  {
    image: product2,
    title: "Royal Ember",
    notes: {
      top: "Cardamom, Grapefruit",
      heart: "Amber, Jasmine",
      base: "Oud, Sandalwood",
    },
  },
  {
    image: product3,
    title: "Golden Veil",
    notes: {
      top: "Lemon Zest, Neroli",
      heart: "White Flowers, Peony",
      base: "Cashmere Wood, Musk",
    },
  },
];

const Products = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isDownRef.current = true;
    slider.classList.add("cursor-grabbing");
    startXRef.current = e.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const endDrag = () => {
    const slider = sliderRef.current;
    isDownRef.current = false;
    if (slider) slider.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startXRef.current;
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const touch = e.touches[0];
    isDownRef.current = true;
    startXRef.current = touch.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDownRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - slider.offsetLeft;
    const walk = x - startXRef.current;
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    isDownRef.current = false;
  };

return (
  <section id="products" ref={sectionRef} className="w-full bg-white m-0">

    {/* Top white gap */}
    <div className="h-6 md:h-8 bg-white" />

    {/* Slider */}
    <div
      ref={sliderRef}
      className="w-full overflow-hidden cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={(e) => e.preventDefault()}
    >
      <div className="flex">
        {products.map((product, index) => (
          <ProductCard
            key={product.title + index}
            product={product}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>

    {/* ✅ Big bottom white gap (like your screenshot) */}
    <div className="h-[140px] md:h-[1800px] lg:h-[140px] bg-white" />
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-[260px] md:w-[320px] lg:w-[360px] flex-shrink-0 bg-white"
    >
      {/* IMAGE AREA (slightly reduced height) */}
      <div className="relative h-[460px] md:h-[680px] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {/* Hover frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[19%] left-1/2 -translate-x-1/2 w-[76%] h-80 border-[16px] border-white/30 rounded-md pointer-events-none"
        />

        {/* Hover info box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[72%] p-6 bg-white/90 rounded-sm shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
            {product.title}
          </h3>
          <div className="text-sm md:text-base text-gray-700 leading-relaxed">
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

        {/* Bottom gradient + button ON IMAGE */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-4">
          <Button
            variant="outline"
            className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => {
              window.location.href = "shop.html";
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
