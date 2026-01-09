import { Link, useLocation } from "react-router-dom";
import groupLogo from "@/assets/Group 89.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "The Garden", path: "/garden" },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3 md:py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container flex items-center justify-between px-2 sm:px-4">
        <motion.div
          whileHover={{ scale: 1.12, rotate: 2 }}
          whileTap={{ scale: 0.97, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link 
            to="/" 
            className="flex items-center group hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={groupLogo} 
              alt="Turtle & Bloom Logo" 
              className="h-12 w-auto sm:h-16 group-hover:animate-spin-slow transition-transform duration-500"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }} 
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.18, rotate: idx % 2 === 0 ? 2 : -2, color: '#F2614E' }}
              whileTap={{ scale: 0.93, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 350 }}
            >
              <Link
                to={link.path}
                className={`text-base tracking-wide transition-all duration-300 hover:text-[#F2614E] px-2 ${
                  location.pathname === link.path
                    ? "font-bold text-[#F2614E] underline underline-offset-4 decoration-2"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden shadow-md"
          >
            <nav className="container px-2 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block text-base py-3 rounded-md px-2 transition-colors text-center ${
                      location.pathname === link.path
                        ? "text-foreground font-semibold bg-muted/60"
                        : "text-muted-foreground hover:bg-muted/40"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
