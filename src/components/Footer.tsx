import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "The Garden", path: "/garden" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  projects: [
    { name: "MOOV", path: "/garden#moov" },
    { name: "Kid Dua Love", path: "/garden#kid-dua-love" },
    { name: "Tibbo The Flippy Frog", path: "/garden#tibbo" },
    { name: "Hamza's Suitcase", path: "/garden#hamza" },
    { name: "NUM Fun Africa", path: "/garden#num-fun" },
    { name: "Talking Shoes", path: "/garden#talking-shoes" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@kiddualove", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-foreground text-background"
    >
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link to="/" className="text-2xl font-medium" style={{ fontFamily: 'Recoleta, Playfair Display, Georgia, serif' }}>
              Turtle & Bloom
            </Link>
            <p className="mt-4 text-background/70 text-sm leading-relaxed max-w-xs">
              Stories that shift culture. An IP-first creative studio from the UK and Nigeria.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-background/20 hover:bg-background hover:text-foreground transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-background"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-lg mb-4 md:mb-6" style={{ fontFamily: 'Recoleta, Playfair Display, Georgia, serif' }}>Navigation</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors block py-1 px-1 rounded focus:outline-none focus:ring-2 focus:ring-background"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-lg mb-4 md:mb-6" style={{ fontFamily: 'Recoleta, Playfair Display, Georgia, serif' }}>Projects</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors block py-1 px-1 rounded focus:outline-none focus:ring-2 focus:ring-background"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-lg mb-4 md:mb-6" style={{ fontFamily: 'Recoleta, Playfair Display, Georgia, serif' }}>Get in Touch</h4>
            <div className="space-y-3 md:space-y-4">
              <a
                href="mailto:hello@turtleandbloom.com"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background rounded px-1 py-1"
              >
                <Mail size={16} />
                hello@turtleandbloom.com
              </a>
              <p className="text-sm text-background/70">
                MOOV partnerships:<br />
                <a
                  href="mailto:themoovbook@turtleandbloom.com"
                  className="hover:text-background transition-colors"
                >
                  themoovbook@turtleandbloom.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Turtle & Bloom Media. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            UK & Nigeria
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
