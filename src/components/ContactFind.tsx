import React from "react";
import { MapPin } from "lucide-react";
import mapImage from "@/assets/dubai-map.jpg"; // ← change path/name if needed

const ContactFind: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      {/* Full-width section */}
      <div className="w-[1440px] h-[520px] relative overflow-hidden">
        {/* Map background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${mapImage})`,
          }}
        />

        {/* Dark overlay for slight dim if you want
        <div className="absolute inset-0 bg-black/10" />
        */}

        {/* Center card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[360px] md:w-[400px] bg-[#050505] text-white px-12 py-12 shadow-2xl">
            {/* Icon */}
            <div className="w-[70px] h-[70px] rounded-[16px] bg-[#E1B159] flex items-center justify-center mx-auto mb-8">
              <MapPin className="w-7 h-7 text-black" />
            </div>

            {/* Title */}
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[30px] text-center mb-4">
              Find Us Here
            </h2>

            {/* Address */}
            <p className="font-['Inter'] text-[14px] md:text-[15px] text-[#E5E7EB] text-center leading-relaxed mb-8">
              BK Tower, Oud Metha
              <br />
              Dubai, United Arab Emirates
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <a
                href="https://www.google.com/maps?q=BK+Tower+Oud+Metha+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[180px] h-[52px] bg-[#E1B159] hover:bg-[#f0c465] transition-colors flex items-center justify-center font-['Inter'] text-[15px] font-medium text-black"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFind;
