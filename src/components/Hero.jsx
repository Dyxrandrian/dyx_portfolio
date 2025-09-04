import { motion } from "framer-motion";
import myPhoto from "../assets/dyx.png"; // remplace par le chemin de ta photo
import { FaReact, FaJsSquare, FaJava, FaDatabase } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-20 pt-20"
    >
      {/* Photo à gauche */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-60 h-60 md:w-80 md:h-80 flex-shrink-0 mb-8 md:mb-0"
      >
        <img
          src={myPhoto}
          alt="Dylan"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </motion.div>

      {/* Description à droite */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:ml-12 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Dylan Randrianarivony
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Étudiant en informatique, j'apprends le développement Fullstack et le Data Business Intelligence.
        </p>


        {/* Badges de compétences */}
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <FaReact className="text-blue-500 w-10 h-10" />
          <FaJsSquare className="text-yellow-500 w-10 h-10" />
          <FaJava className="text-red-600 w-10 h-10" />
          <FaDatabase className="text-indigo-500 w-10 h-10" />
        </div>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/ton-github"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href={new URL("../assets/CV_Dylan.pdf", import.meta.url).href} // chemin correct pour Vite
            download
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Télécharger mon CV
          </a>

        </div>
      </motion.div>
    </section>
  );
}
