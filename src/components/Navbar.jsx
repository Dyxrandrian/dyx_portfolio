import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Dark mode toggle
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {["Home", "Projects", "Skills", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-500 transition-colors"
            >
              {link}
            </a>
          ))}
          <button onClick={handleDarkMode} className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleDarkMode} className="mr-4 p-2 rounded bg-gray-200 dark:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setOpen(!open)}>
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
          className="md:hidden bg-white dark:bg-gray-900 flex flex-col space-y-4 px-6 py-4"
        >
          {["Home", "Projects", "Skills", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
