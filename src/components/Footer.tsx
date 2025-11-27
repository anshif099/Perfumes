import logo from "@/assets/logo.png";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-10">

        {/* Mobile logo (centered) */}
        <div className="flex justify-center mb-8 md:hidden">
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
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                Home
              </a>
              <a href="#products" className="text-white/70 hover:text-gold transition-colors">
                Collections
              </a>
              <a href="#about" className="text-white/70 hover:text-gold transition-colors">
                Our Story
              </a>
              <a href="#footer" className="text-white/70 hover:text-gold transition-colors">
                Contact
              </a>
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

        {/* Brand + Address (DESKTOP like screenshot) */}
        <div className="hidden md:block mb-8">

          {/* Logo at top */}
          <img
            src={logo}
            alt="BEEK Perfumes"
            className="w-16 h-auto mb-4"
          />

          <div className="text-xs leading-relaxed text-white/70 space-y-3">

            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p>BK Tower, Oud Metha, Dubai,</p>
                <p>United Arab Emirates</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <p>+971 (0) 55 114 1144</p>
            </div>
          </div>
        </div>

        {/* Mobile address */}
        <div className="md:hidden mb-8 text-[11px] leading-relaxed text-white/70 space-y-3">
          <div className="flex items-start gap-2 justify-center">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <div className="text-center">
              <p>BK Tower, Oud Metha, Dubai,</p>
              <p>United Arab Emirates</p>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Phone className="w-4 h-4 shrink-0" />
            <p>+971 (0) 55 114 1144</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-4 mt-2 text-[11px] md:text-xs text-white/60 
        flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          <p>Copyright 2025 beekperfumes. All right reserved</p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1">
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
