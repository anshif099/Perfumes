import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-10">

        {/* Mobile logo (centered) */}
        <div className="flex justify-center mb-10 md:hidden">
          <img src={logo} alt="BEEK Perfumes" className="w-16 h-auto" />
        </div>

        {/* Top link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10">

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 text-xs md:text-sm">
              <Link to="/" className="text-white/70 hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/Shop" className="text-white/70 hover:text-gold transition-colors">
                Collections
              </Link>
              <Link to="/OurStory" className="text-white/70 hover:text-gold transition-colors">
                Our Story
              </Link>
              <Link to="/Contact" className="text-white/70 hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">
              Follow Us
            </h4>
            <nav className="flex flex-col gap-2 text-xs md:text-sm">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                Facebook
              </a>
            </nav>
          </div>

          {/* Empty column for spacing */}
          <div className="hidden md:block" />
        </div>

        {/* DESKTOP brand + address */}
        <div className="hidden md:block mb-8">

          <img src={logo} alt="BEEK Perfumes" className="w-16 h-auto mb-4" />

          <div className="text-xs leading-relaxed text-white/70 space-y-3">

            {/* Location (CUSTOM ICON) */}
            <div className="flex items-start gap-4">
              <svg
                width="18"
                height="28"
                viewBox="0 0 18 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 mt-[2px]"
              >
                <circle cx="9" cy="6" r="5" stroke="white" strokeWidth="1.5" />
                <line
                  x1="9"
                  y1="11"
                  x2="9"
                  y2="26"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <div>
                <p>BK Tower, Oud Metha, Dubai,</p>
                <p>United Arab Emirates</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 shrink-0 text-white" />
              <p>+971 (0) 55 114 1144</p>
            </div>
          </div>
        </div>

        {/* MOBILE address */}
        <div className="md:hidden mb-10 text-[11px] leading-relaxed text-white/70 space-y-3">

          {/* Location */}
          <div className="flex items-start gap-4">
            <svg
              width="18"
              height="28"
              viewBox="0 0 18 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 mt-[2px]"
            >
              <circle cx="9" cy="6" r="5" stroke="white" strokeWidth="1.5" />
              <line
                x1="9"
                y1="11"
                x2="9"
                y2="26"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <div>
              <p>BK Tower, Oud Metha, Dubai,</p>
              <p>United Arab Emirates</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 shrink-0 text-white" />
            <p>+971 (0) 55 114 1144</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-white/10 pt-4 mt-2 text-[11px] md:text-xs text-white/60
          flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
        >
          <p>Copyright 2026 beekperfumes. All right reserved</p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-x-4 gap-y-1">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Disclaimer
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
