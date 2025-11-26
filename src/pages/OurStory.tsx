
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import React from "react";

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
        <Header />
      <main>
        {/* GRID HERO: quadrants */}
        <section aria-label="Hero grid" className="w-full">
          <div
            className="
              relative grid w-full overflow-hidden
              grid-cols-1 grid-rows-4
              md:grid-cols-2 md:grid-rows-2
              md:aspect-square
            "
          >
            {/* Vertical divider */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-y-0 left-1/2
                hidden w-px -translate-x-[0.5px] bg-[rgba(96,165,250,0.06)]
                md:block
              "
            />
            {/* Horizontal divider */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-0 top-1/2
                hidden h-px -translate-y-[0.5px] bg-[rgba(96,165,250,0.06)]
                md:block
              "
            />

            {/* TOP-LEFT: STORY heading */}
            <div
              className="
                flex min-h-[50vh] items-center justify-center
                bg-white px-6 py-10 text-center
                md:min-h-0 md:px-12 md:py-16
                lg:px-20 lg:py-20
              "
            >
              <div className="max-w-[520px]">
                <div className="font-serif text-[28px] font-bold text-[#d9a93b] mb-1">
                  Our
                </div>
                <h1
                  className="
                    font-serif font-bold leading-[0.9]
                    text-[36px] tracking-[-0.08em]
                    md:text-[72px]
                    lg:text-[96px]
                    xl:text-[110px]
                  "
                >
                  Story
                </h1>
              </div>
            </div>

            {/* TOP-RIGHT: image */}
            <div className="relative min-h-[50vh] overflow-hidden md:min-h-0">
              <img
                src="/images/image12.jpg"
                alt="Top right model holding perfume"
                className="h-full w-full object-cover"
              />
            </div>

            {/* BOTTOM-LEFT: image */}
            <div className="relative min-h-[50vh] overflow-hidden md:min-h-0">
              <img
                src="/images/image13.png"
                alt="Bottom left perfume bottle"
                className="h-full w-full object-cover"
              />
            </div>

            {/* BOTTOM-RIGHT: About text */}
            <div
              className="
                flex min-h-[50vh] items-center justify-center
                bg-white px-6 py-10 text-center
                md:min-h-0 md:px-12 md:py-16
                lg:px-20 lg:py-20
              "
            >
              <div className="max-w-[520px]">
                <h2 className="mb-4 font-serif text-[28px] md:text-[32px] lg:text-[40px]">
                  About Us
                </h2>
                <p className="mb-3 font-sans text-[16px] leading-[1.8] text-[#6b7180]">
                  At Beek, luxury isn’t merely an ambition — it is the very
                  foundation on which our brand is built. Every fragrance we
                  craft carries the essence of timeless refinement, shaped
                  through masterful artistry, meticulous precision, and an
                  uncompromising dedication to the traditions of fine
                  perfumery.
                </p>
                <p className="font-sans text-[16px] leading-[1.8] text-[#6b7180]">
                  Each scent is more than a blend of notes; it is a celebration
                  of heritage, elegance, and the pursuit of perfection — an
                  experience designed for those who appreciate the true art of
                  luxury.
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
              grid w-full min-h-screen overflow-hidden
              grid-cols-1
              md:grid-cols-2
            "
          >
            {/* TEXT SIDE */}
            <div
              className="
                flex flex-col justify-center
                bg-white px-6 py-16
                md:px-12
                lg:px-20
              "
            >
              <h2 className="mb-5 font-serif text-[28px] md:text-[34px] lg:text-[42px]">
                A Heritage of Excellence
              </h2>
              <p className="max-w-[520px] text-[16px] leading-[1.8] text-[#444444]">
                Beek is built on traditions that transcend time. Our story is
                guided by the enduring elegance of classic perfumery,
                reimagined with a modern sensibility. Each creation pays homage
                to the meticulous craft passed down through generations,
                carrying forward the essence of sophistication.
              </p>
            </div>

            {/* IMAGE SIDE */}
            <div className="h-full w-full">
              <img
                src="/images/image14.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* SECOND SECTION (LEFT IMAGE, RIGHT TEXT) */}
          <div
            className="
              grid w-full min-h-screen overflow-hidden
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
                bg-white px-6 py-16
                md:px-12
                lg:px-20
              "
            >
              <h2 className="mb-5 font-serif text-[28px] md:text-[34px] lg:text-[42px]">
                Craftsmanship as an Artform
              </h2>
              <p className="max-w-[520px] text-[16px] leading-[1.8] text-[#444444]">
                To us, crafting a fragrance is an intimate expression of
                mastery. Our perfumers work like sculptors of scent — selecting,
                layering, and perfecting every note with exceptional care. From
                rare florals to deep resins, every accord is composed to
                achieve remarkable depth, clarity, and lasting allure.
              </p>
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
