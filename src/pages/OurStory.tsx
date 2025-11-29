import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import React from "react";

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      <Header />
      <main className="flex-1">
        {/* GRID HERO: quadrants */}
        <section aria-label="Hero grid" className="w-full">
          <div
            className="
              relative grid w-full overflow-hidden
              grid-cols-2
              md:grid-cols-2 md:grid-rows-2
            "
          >
            {/* TOP-LEFT: STORY heading */}
            <div
              className="
                col-span-1
                flex min-h-[50vh] items-center justify-center
                bg-white px-6 pt-0 pb-8
                md:min-h-0 md:px-12 md:py-12
                lg:px-20 lg:py-16
              "
            >
              <div className="max-w-[520px] text-left">
                <div className="font-['Playfair_Display'] text-[48px] font-semibold text-[#d9a93b] leading-none mb-1">
                  Our
                </div>
                <h1
                  className="
                    font-['Playfair_Display'] font-semibold leading-[0.9]
                    text-[100px]
                  "
                >
                  Story
                </h1>
              </div>
            </div>

            {/* TOP-RIGHT: image (same row as text on mobile) */}
            <div className="col-span-1 relative min-h-[50vh] overflow-hidden md:min-h-0 flex items-center justify-center">
              <img
                src="/images/image12.jpg"
                alt="Top right model holding perfume"
                className="h-full w-full object-cover"
              />
            </div>

            {/* BOTTOM-LEFT: image (full width on mobile, left on desktop) */}
            <div className="col-span-2 md:col-span-1 relative min-h-[50vh] overflow-hidden md:min-h-0">
              <img
                src="/images/image13.png"
                alt="Bottom left perfume bottle"
                className="h-full w-full object-cover"
              />
            </div>

            {/* BOTTOM-RIGHT: About text (full width on mobile, right on desktop) */}
            <div
              className="
                col-span-2 md:col-span-1
                flex min-h-[50vh] items-center justify-center
                bg-white px-6 pt-0 pb-8
                md:min-h-0 md:px-12 md:py-12
                lg:px-20 lg:py-16
              "
            >
              <div className="max-w-[520px] text-center">
                <h2 className="mb-4 font-['Playfair_Display'] text-[40px] font-semibold">
                  About Us
                </h2>
                <p className="font-['Inter'] text-[16px] leading-[1.8] text-[#6b7180] text-justify mx-auto">
                  At Beek, luxury isn’t merely an ambition — it is the very
                  foundation on which our brand is built. Every fragrance we
                  craft carries the essence of timeless refinement, shaped
                  through masterful artistry, meticulous precision, and an
                  uncompromising dedication to the traditions of fine
                  perfumery. Each scent is more than a blend of notes; it is a
                  celebration of heritage, elegance, and the pursuit of
                  perfection — an experience designed for those who appreciate
                  the true art of luxury.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TWO SECTION (A Heritage of Excellence / Craftsmanship as an Artform) */}
        <section className="flex w-full flex-col">
          {/* FIRST SECTION */}
          <div
            className="
              grid w-full overflow-hidden
              grid-cols-1
              md:grid-cols-2
            "
          >
            {/* IMAGE SIDE – FIRST ON MOBILE, RIGHT ON DESKTOP */}
            <div className="h-full w-full order-1 md:order-2">
              <img
                src="/images/image14.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* TEXT SIDE – SECOND ON MOBILE, LEFT ON DESKTOP */}
            <div
              className="
                flex flex-col justify-center
                bg-white px-6 pt-8 pb-12
                md:px-12 md:py-12
                lg:px-20 lg:py-16 items-center
                order-2 md:order-1
              "
            >
              <div className="max-w-[520px] text-center">
                <h2 className="mb-4 font-['Playfair_Display'] text-[40px] font-semibold text-center">
                  A Heritage of Excellence
                </h2>
                <p className="font-['Inter'] text-[16px] leading-[1.8] text-[#6b7180] text-justify mx-auto">
                  Beek is built on traditions that transcend time. Our story is
                  guided by the enduring elegance of classic perfumery,
                  reimagined with a modern sensibility. Each creation pays
                  homage to the meticulous craft passed down through
                  generations, carrying forward the essence of sophistication.
                </p>
              </div>
            </div>
          </div>

          {/* SECOND SECTION (LEFT IMAGE, RIGHT TEXT) */}
          <div
            className="
              grid w-full overflow-hidden
              grid-cols-1
              md:grid-cols-2
            "
          >
            {/* IMAGE SIDE */}
            <div className="h-full w-full">
              <img
                src="/images/image15.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* TEXT SIDE */}
            <div
              className="
                flex flex-col justify-center
                bg-white px-6 pt-8 pb-0
                md:px-12 md:py-12
                lg:px-20 lg:py-16 items-center
              "
            >
              <div className="max-w-[520px] text-center">
                <h2 className="mb-4 font-['Playfair_Display'] text-[40px] font-semibold text-center">
                  Craftsmanship as an Artform
                </h2>
                <p className="font-['Inter'] text-[16px] leading-[1.8] text-[#6b7180] text-justify mx-auto">
                  To us, crafting a fragrance is an intimate expression of
                  mastery. Our perfumers work like sculptors of scent —
                  selecting, layering, and perfecting every note with
                  exceptional care. From rare florals to deep resins, every
                  accord is composed to achieve remarkable depth, clarity, and
                  lasting allure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default OurStory;
