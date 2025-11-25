import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-dark-overlay text-white/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <img src={logo} alt="BEEK Perfumes" className="w-11 h-auto" />
              <div>
                <h4 className="font-bold text-lg mb-2">Beek Perfumes</h4>
                <p className="text-sm text-white/75 leading-relaxed">
                  BK Tower, Oud Metha, Dubai,
                  <br />
                  United Arab Emirates
                  <br />
                  <span className="block mt-2">+971 (0) 55 114 1144</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-white/75 hover:text-gold transition-colors"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-sm text-white/75 hover:text-gold transition-colors"
              >
                Collections
              </a>
              <a
                href="#about"
                className="text-sm text-white/75 hover:text-gold transition-colors"
              >
                Our Story
              </a>
              <a
                href="#footer"
                className="text-sm text-white/75 hover:text-gold transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-white/75 hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-white/75 hover:text-gold transition-colors"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2025 beekperfumes. All rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms & Conditions
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
