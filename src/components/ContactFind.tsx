import React from "react";
import { MapPin } from "lucide-react";
import mapImage from "@/assets/dubai-map.jpg";

const ContactFind: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Full-width responsive section */}
      <div className="relative w-full min-h-[350px] sm:min-h-[420px] md:min-h-[520px] overflow-hidden">

        {/* Map background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mapImage})` }}
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Center card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="w-full max-w-[400px] bg-[#050505] text-white px-8 sm:px-12 py-10 sm:py-12 shadow-2xl rounded-xl">

            {/* Icon */}
            <div className="w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] rounded-[16px] bg-[#E1B159] flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            </div>

            {/* Title */}
            <h2 className="font-['Playfair_Display'] text-[24px] sm:text-[28px] md:text-[30px] text-center mb-4">
              Find Us Here
            </h2>

            {/* Address */}
            <p className="font-['Inter'] text-[14px] sm:text-[15px] text-[#E5E7EB] text-center leading-relaxed mb-6 sm:mb-8">
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
                className="w-[170px] sm:w-[180px] h-[48px] sm:h-[52px] bg-[#E1B159] hover:bg-[#f0c465] transition-colors flex items-center justify-center font-['Inter'] text-[14px] sm:text-[15px] font-medium text-black"
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
