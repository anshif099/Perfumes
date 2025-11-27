import React from "react";
import heroImage from "@/assets/contact-hero.jpg";

const HeroContact: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      {/* Main Canvas */}
      <div className="w-[1440px] h-[850px] grid grid-cols-2 bg-black text-white overflow-hidden">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between pl-20 pr-10 py-24">
          {/* TEXT SECTION */}
          <div>
            <div className="w-[70px] h-[4px] bg-[#E1B159] mb-10" />

            <h1 className="font-['Playfair_Display'] font-bold text-[64px] leading-[1.1] w-[514px] h-[180px]">
              Let&apos;s Start a
              <br />
              Conversation
            </h1>

            <p className="font-['Inter'] text-[16px] font-normal text-[#E5E5E5] mt-8 w-[514px] h-[59px]">
              We&apos;re here to bring your fragrance dreams to life. Reach out
              and discover the essence of luxury with Beek.
            </p>

            <button className="mt-10 w-[245px] h-[56px] bg-[#E1B159] hover:bg-[#f0c465] flex items-center justify-center gap-2 transition">
              <span className="font-['Inter'] font-semibold text-[16px] text-black">
                Explore Collections
              </span>
              <span className="text-black text-xl">→</span>
            </button>
          </div>

          {/* STATS SECTION */}
          <div className="border-t border-[#333] pt-16 flex gap-16">
            <div>
              <p className="font-['Playfair_Display'] text-[36px] font-normal">
                50+
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B3B3B3]">
                Unique Scents
              </p>
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-[36px] font-normal">
                10K+
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B3B3B3]">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="font-['Playfair_Display'] text-[36px] font-normal">
                15
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B3B3B3]">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative w-full h-full">
          {/* FULL IMAGE */}
          <img
            src={heroImage}
            alt="Fragrance bottle on sand"
            className="w-full h-full object-cover"
          />

          {/* WHITE CONTACT CARD */}
          <div className="absolute bottom-10 right-10 w-[480px] h-[150px] bg-white rounded-[16px] shadow-lg flex px-10 py-6 gap-12">
            {/* LOCATION */}
            <div className="flex-1">
              <p className="font-['Inter'] text-[12px] tracking-wide text-gray-500 mb-2 uppercase">
                Location
              </p>
              <p className="font-['Inter'] text-[16px] text-black leading-relaxed">
                BK Tower, Oud Metha
                <br />
                Dubai, UAE
              </p>
            </div>

            {/* CONTACT */}
            <div className="flex-1">
              <p className="font-['Inter'] text-[12px] tracking-wide text-gray-500 mb-2 uppercase">
                Contact
              </p>
              <p className="font-['Inter'] text-[16px] text-black leading-relaxed break-all">
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
