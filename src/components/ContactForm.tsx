import React from "react";
import { User, Mail, Phone, MessageCircle, Send } from "lucide-react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We’ll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-[1440px] flex flex-col items-center py-16">
        {/* Title */}
        <h2 className="font-['Playfair_Display'] text-[40px] leading-tight text-[#111111] mb-4">
          Drop Us a Line
        </h2>

        {/* Subtitle */}
        <p className="font-['Inter'] text-[16px] font-normal text-[#4B5563] text-center max-w-[640px] mb-12">
          Have questions about our fragrances? Want to create a custom scent?
          We&apos;d love to hear from you.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[920px] flex flex-col gap-6"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="h-[72px] bg-[#F9FAFB] border border-[#E5E7EB] flex items-center px-5">
              <User className="w-5 h-5 text-[#9CA3AF] mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none font-['Inter'] text-[15px] text-[#111827] placeholder:text-[#9CA3AF]"
                required
              />
            </div>

            {/* Email */}
            <div className="h-[72px] bg-[#F9FAFB] rounded-[16px] border border-[#E5E7EB] flex items-center px-5">
              <Mail className="w-5 h-5 text-[#9CA3AF] mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none font-['Inter'] text-[15px] text-[#111827] placeholder:text-[#9CA3AF]"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="h-[72px] bg-[#F9FAFB] rounded-[16px] border border-[#E5E7EB] flex items-center px-5">
            <Phone className="w-5 h-5 text-[#9CA3AF] mr-3" />
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              className="w-full bg-transparent outline-none font-['Inter'] text-[15px] text-[#111827] placeholder:text-[#9CA3AF]"
            />
          </div>

          {/* Message */}
          <div className="bg-[#F9FAFB] rounded-[16px] border border-[#E5E7EB] flex items-start px-5 py-4 min-h-[190px]">
            <MessageCircle className="w-5 h-5 text-[#9CA3AF] mr-3 mt-1" />
            <textarea
              placeholder="Tell us about your inquiry..."
              className="w-full bg-transparent outline-none font-['Inter'] text-[15px] text-[#111827] placeholder:text-[#9CA3AF] resize-none min-h-[150px]"
              required
            />
          </div>

          {/* Button wrapper */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-[260px] h-[64px] bg-black text-white font-['Inter'] text-[16px] font-medium rounded-none shadow-[0_18px_30px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 hover:bg-[#111111] transition"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
