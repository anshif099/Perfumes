import React from "react";
import { Star, Award, Leaf, Sparkles } from "lucide-react";
import heroImage from "@/assets/product-hero.jpg"; // change path if needed

const ProductHero: React.FC = () => {
  return (
    // FULL HERO
    <section className="relative w-screen h-[770px] overflow-hidden">
      {/* Background */}
      <img
        src={heroImage}
        alt="Noir Elegance perfume bottle"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-4 sm:px-10 lg:px-24 max-w-xl text-white">

          {/* Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center gap-2 font-['Inter'] text-[14px] text-white/70">
            <span>Home</span>
            <span>/</span>
            <span>Collections</span>
            <span>/</span>
            <span>Product</span>
          </div>

          {/* Badge + Rating */}
          <div className="mb-6 flex flex-wrap items-center gap-5">

            {/* ✅ NEW ARRIVAL (MATCHING YOUR IMAGE STYLE) */}
            <div className="inline-flex items-center gap-2 bg-[#b7903f]/20 border border-[#b7903f]/40 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#d9a93b]" />
              <span className="font-Inter text-[14px] font-medium text-[#d9a93b]">
                New Arrival
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 font-['Inter'] text-[14px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#D6A34A] text-[#D6A34A]"
                />
              ))}
              <span className="ml-2 text-white/70">(127 reviews)</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 font-['Playfair_Display'] text-[48px] leading-[1.1]">
            Noir Elegance
          </h1>

          {/* Description */}
          <p className="mb-6 max-w-md font-['Inter'] text-[16px] leading-relaxed text-white/80">
            An exquisite blend of rare botanicals and precious essences, crafted
            for those who embrace timeless sophistication.
          </p>

          <p className="mb-10 max-w-md font-['Inter'] text-[16px] leading-relaxed text-white/70">
            For those who seek a signature scent that lingers long after the
            moment has passed.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-8 font-['Inter'] text-[16px]">

            {/* Award */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5">
                <Award className="h-5 w-5 text-[#D6A34A]" />
              </div>
              <div>
                <div className="font-medium">Award Winner</div>
                <div className="text-sm text-white/70">2024 Fragrance</div>
              </div>
            </div>

            {/* Quality */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5">
                <Leaf className="h-5 w-5 text-[#D6A34A]" />
              </div>
              <div>
                <div className="font-medium">Premium Quality</div>
                <div className="text-sm text-white/70">
                  Natural Ingredients
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
