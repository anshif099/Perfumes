import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactReact: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-[#F3F4F6]">
      <div className="w-[1440px] flex flex-col items-center py-16 px-6">
        {/* Heading */}
        <h2 className="font-['Playfair_Display'] text-[40px] leading-tight text-[#111111] mb-3 text-center">
          How to Reach Us
        </h2>
        <p className="font-Inter text-[15px] text-[#9CA3AF] text-center mb-12">
          Multiple ways to connect with our team
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1150px]">
          {/* Visit Our Store */}
          <div className="bg-[#050505] text-white px-10 py-10">
            <div className="w-[60px] h-[60px] rounded-full bg-[#E1B1591A] flex items-center justify-center mb-8">
              <MapPin className="w-6 h-6 text-[#E1B159]" />
            </div>
            <h3 className="font-['Playfair_Display'] text-[18px] mb-3">
              Visit Our Store
            </h3>
            <p className="font-Inter text-[14px] text-[#E5E7EB] leading-relaxed">
              BK Tower, Oud Metha
              <br />
              Dubai, United Arab Emirates
              <br />
              80571
            </p>
          </div>

          {/* Call Us Anytime */}
          <div className="bg-[#050505] text-white px-10 py-10">
            <div className="w-[60px] h-[60px] rounded-full bg-[#E1B1591A] flex items-center justify-center mb-8">
              <Phone className="w-6 h-6 text-[#E1B159]" />
            </div>
            <h3 className="font-['Playfair_Display'] text-[18px] mb-3">
              Call Us Anytime
            </h3>
            <p className="font-Inter text-[14px] text-[#E5E7EB] leading-relaxed">
              +971 4 234 1234
              <br />
              +971 4 234 5678
              <br />
              Mon – Fri, 9AM – 6PM
            </p>
          </div>

          {/* Email Us */}
          <div className="bg-[#050505] text-white px-10 py-10">
            <div className="w-[60px] h-[60px] rounded-full bg-[#E1B1591A] flex items-center justify-center mb-8">
              <Mail className="w-6 h-6 text-[#E1B159]" />
            </div>
            <h3 className="font-['Playfair_Display'] text-[18px] mb-3">
              Email Us
            </h3>
            <p className="font-Inter text-[14px] text-[#E5E7EB] leading-relaxed">
              info@beekfragrances.com
              <br />
              support@beekfragrances.com
              <br />
              Quick response guaranteed
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-[#050505] text-white px-10 py-10">
            <div className="w-[60px] h-[60px] rounded-full bg-[#E1B1591A] flex items-center justify-center mb-8">
              <Clock className="w-6 h-6 text-[#E1B159]" />
            </div>
            <h3 className="font-['Playfair_Display'] text-[18px] mb-3">
              Working Hours
            </h3>
            <p className="font-Inter text-[14px] text-[#E5E7EB] leading-relaxed">
              Monday – Thursday: 9AM – 9PM
              <br />
              Friday – Saturday: 9AM – 10PM
              <br />
              Sunday: 10AM – 8PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactReact;
