import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-6">
        {/* Top link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 text-xs md:text-sm">
              <a
                href="#"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Collections
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Our Story
              </a>
              <a
                href="#footer"
                className="text-white/70 hover:text-gold transition-colors"
              >
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
              <a
                href="#"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Facebook
              </a>
            </nav>
          </div>

          <div className="hidden md:block" />
        </div>

        {/* Brand + Address */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div>
              <img src={logo} alt="BEEK Perfumes" className="w-6 h-auto" />
            </div>
            <div className="text-[11px] md:text-xs leading-relaxed text-white/70">
              <p>BK Tower, Oud Metha, Dubai,</p>
              <p>United Arab Emirates</p>
              <p className="mt-1">+971 (0) 55 114 1144</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-4 mt-2 text-[11px] md:text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>Copyright 2025 beekperfumes. All right reserved</p>
          <div className="flex gap-6">
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
