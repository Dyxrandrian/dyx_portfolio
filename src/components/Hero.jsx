import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Dylan Randrianarivony
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
      >
        Fullstack Developer | Passionné par les projets dynamiques
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6 }}
        className="mt-6 flex space-x-4"
      >
        <a href="https://github.com/ton-github" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">GitHub</a>
        <a href="https://linkedin.com/in/ton-linkedin" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">LinkedIn</a>
      </motion.div>
    </section>
  );
}
