import React from "react";
import heroImage from "@/assets/contact-hero.jpg";
import { Link } from "react-router-dom";

const HeroContact: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* ========== MOBILE LAYOUT (like screenshot) ========== */}
      <div className="relative min-h-screen text-white md:hidden">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Perfume bottle"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content over image */}
        <div className="relative z-10 flex flex-col justify-between px-6 py-16">
          {/* TEXT SECTION */}
          <div>
            <div className="w-[70px] h-[4px] bg-[#E1B159] mb-10" />

            <h1 className="font-['Playfair_Display'] font-bold text-[32px] xs:text-[36px] sm:text-[40px] leading-[1.1] max-w-[514px]">
              Let&apos;s Start a
              <br />
              Conversation
            </h1>

            <p className="font-Inter text-[14px] sm:text-[16px] font-normal text-[#E5E5E5] mt-6 max-w-[514px]">
              We&apos;re here to bring your fragrance dreams to life. Reach out
              and discover the essence of luxury with Beek.
            </p>

            <Link to="/Shop">
              <button className="mt-8 w-[220px] sm:w-[245px] h-[52px] sm:h-[56px] bg-[#E1B159] hover:bg-[#f0c465] flex items-center justify-center gap-2 transition">
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-black">
                  Explore Collections
                </span>
                <span className="text-black text-xl">→</span>
              </button>
            </Link>
          </div>

          {/* STATS SECTION */}
          <div className="border-t border-white/30 pt-6 flex flex-wrap gap-8 mt-10">
            <div>
              <p className="font-['Playfair_Display'] text-[24px] font-normal text-[#E1B159]">
                50+
              </p>
              <p className="font-['Inter'] text-[13px] text-[#F5F5F5]">
                Unique Scents
              </p>
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-[24px] font-normal text-[#E1B159]">
                10K+
              </p>
              <p className="font-['Inter'] text-[13px] text-[#F5F5F5]">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-[24px] font-normal text-[#E1B159]">
                15
              </p>
              <p className="font-['Inter'] text-[13px] text-[#F5F5F5]">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* WHITE CONTACT CARD (mobile bottom, like screenshot) */}
        <div
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            bg-white
            w-[92%]
            max-w-[520px]
            shadow-xl
            px-6
            py-6
            rounded-2xl
            flex
            flex-col
            gap-4
            z-20
          "
        >
          {/* LOCATION */}
          <div className="flex-1">
            <p className="font-['Inter'] text-[11px] tracking-wide text-gray-500 uppercase mb-2">
              Location
            </p>
            <p className="font-['Inter'] text-[15px] text-black leading-[1.4]">
              BK Tower, Oud Metha
              <br />
              Dubai, UAE
            </p>
          </div>

          {/* CONTACT */}
          <div className="flex-1 mt-4">
            <p className="font-['Inter'] text-[11px] tracking-wide text-gray-500 uppercase mb-2">
              Contact
            </p>
            <p className="font-['Inter'] text-[15px] text-black leading-[1.4] break-all">
              info@beekfragrances.com
              <br />
              +971 4 XXX XXXX
            </p>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP / TABLET LAYOUT (unchanged) ========== */}
      <div className="hidden md:grid min-h-screen grid-cols-1 md:grid-cols-2 text-white">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between px-6 py-16 sm:px-10 lg:px-20">
          {/* TEXT SECTION */}
          <div>
            <div className="w-[70px] h-[4px] bg-[#E1B159] mb-10" />

            <h1 className="font-['Playfair_Display'] font-bold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.1] max-w-[514px]">
              Let&apos;s Start a
              <br />
              Conversation
            </h1>

            <p className="font-Inter text-[14px] sm:text-[16px] font-normal text-[#E5E5E5] mt-8 max-w-[514px]">
              We&apos;re here to bring your fragrance dreams to life. Reach out
              and discover the essence of luxury with Beek.
            </p>
            <Link to="/Shop">
              <button className="mt-10 w-[220px] sm:w-[245px] h-[52px] sm:h-[56px] bg-[#E1B159] hover:bg-[#f0c465] flex items-center justify-center gap-2 transition">
                <span className="font-Inter font-semibold text-[15px] sm:text-[16px] text-black">
                  Explore Collections
                </span>
                <span className="text-black text-xl">→</span>
              </button>
            </Link>
          </div>

          {/* STATS SECTION */}
          <div className="border-t border-[#333] pt-10 sm:pt-16 flex flex-wrap gap-10 sm:gap-16 mt-10 sm:mt-0">
            <div>
              <p className="font-['Playfair_Display'] text-[32px] sm:text-[36px] font-normal text-[#E1B159]">
                50+
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B3B3B3]">
                Unique Scents
              </p>
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-[32px] sm:text-[36px] font-normal text-[#E1B159]">
                10K+
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B3B3B3]">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-[32px] sm:text-[36px] font-normal text-[#E1B159]">
                15
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B3B3B3]">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative w-full min-h-[400px] md:min-h-full">
          {/* IMAGE */}
          <img
            src={heroImage}
            alt="Perfume bottle"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* WHITE CONTACT CARD */}
          <div
            className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              md:left-auto
              md:right-10
              md:translate-x-0
              bg-white
              w-[90%]
              max-w-[520px]
              shadow-xl
              px-8
              py-6
              flex
              flex-col
              sm:flex-row
              gap-6
            "
          >
            {/* LOCATION */}
            <div className="flex-1">
              <p className="font-['Inter'] text-[11px] tracking-wide text-gray-500 uppercase mb-2">
                Location
              </p>
              <p className="font-['Inter'] text-[15px] text-black leading-[1.4]">
                BK Tower, Oud Metha
                <br />
                Dubai, UAE
              </p>
            </div>

            {/* CONTACT */}
            <div className="flex-1">
              <p className="font-['Inter'] text-[11px] tracking-wide text-gray-500 uppercase mb-2">
                Contact
              </p>
              <p className="font-['Inter'] text-[15px] text-black leading-[1.4] break-all">
                info@beekfragrances.com
                <br />
                +971 4 XXX XXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
