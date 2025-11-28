// src/components/ProductHero.tsx
import React from "react";
import { Star, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/product-hero.jpg"; // ← change to your image path

const ProductHero: React.FC = () => {
  return (
    // FULL-BLEED HERO – touches both sides of the screen
    <section className="relative w-screen h-[770px] overflow-hidden">
      {/* Background image (no gaps left/right) */}
      <img
        src={heroImage}
        alt="Noir Elegance perfume bottle"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/5" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        {/* Text block */}
        <div className="px-4 sm:px-10 lg:px-24 max-w-xl text-white">
          {/* Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center gap-1 font-['Inter'] text-[14px] font-normal text-white/70">
            <span>Home</span>
            <span>/</span>
            <span>Collections</span>
            <span>/</span>
            <span>Product</span>
          </div>

          {/* Badge + rating */}
          <div className="mb-4 flex flex-wrap items-center gap-4">
            {/* New Arrival badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D6A34A] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-black" />
              <span className="font-['Inter'] text-[12px] font-medium text-black">
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

          {/* Main description */}
          <p className="mb-6 max-w-md font-['Inter'] text-[16px] leading-relaxed text-white/80">
            An exquisite blend of rare botanicals and precious essences, crafted
            for those who embrace timeless sophistication.
          </p>

          {/* Secondary line (matches layout in reference) */}
          <p className="mb-10 max-w-md font-['Inter'] text-[16px] leading-relaxed text-white/70">
            For those who seek a signature scent that lingers long after the
            moment has passed.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-6 font-['Inter'] text-[16px]">
            {/* Award Winner */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <Award className="h-5 w-5 text-[#D6A34A]" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Award Winner</span>
                <span className="text-sm text-white/70">2024 Fragrance</span>
              </div>
            </div>

            {/* Premium Quality */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <Leaf className="h-5 w-5 text-[#D6A34A]" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Premium Quality</span>
                <span className="text-sm text-white/70">
                  Natural Ingredients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
