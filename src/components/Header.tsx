import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/Shop" },      // 🔥 MATCHES YOUR ROUTE
    { name: "Our Story", href: "/OurStory" },   // 🔥 MATCHES YOUR ROUTE
    { name: "Contact", href: "/Contact" },      // 🔥 MATCHES YOUR ROUTE
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 bg-black/25 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="BEEK Perfumes logo" className="h-12 w-auto" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <MotionLink
              key={link.name}
              to={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="inline-flex items-center justify-center px-3 py-1 text-sm leading-none whitespace-nowrap text-white/95 hover:text-gold transition-colors "
            >
              {link.name}
            </MotionLink>
          ))}
        </nav>

        {/* Icons + Mobile Menu Button */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-gold hover:bg-white/10"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-gold hover:bg-white/10"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-gold hover:bg-white/10"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-gold hover:bg-white/10"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="inline-flex items-center justify-start text-white/95 hover:text-gold transition-colors text-base leading-none py-3 border-b border-white/5 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
