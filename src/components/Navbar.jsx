import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Smooth scroll
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 80; // décalage pour navbar fixe
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false); // ferme le menu mobile
  };

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Skills", "Projects"];

  return (
    <motion.nav
      className={`fixed w-full z-50 bg-white dark:bg-gray-900 transition-shadow ${shadow ? "shadow-lg" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">

        {/* Logo */}
        <motion.div
          className="text-2xl md:text-3xl font-bold cursor-pointer text-blue-500 dark:text-blue-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Dyx_Randrian
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-10 items-center">
          {links.map((link) => (
            <button
              key={link}
              onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
              className="text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-500 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center relative z-50">
          <button onClick={() => setOpen(!open)} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-20 left-0 w-full bg-white dark:bg-gray-900 flex flex-col space-y-4 px-6 py-4 z-40"
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
              className="text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-500 transition-colors"
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
