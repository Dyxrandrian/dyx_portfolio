import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaJava, FaDatabase } from "react-icons/fa";

const skillIcons = {
  React: <FaReact className="text-blue-500 w-8 h-8" />,
  JavaScript: <FaJsSquare className="text-yellow-400 w-8 h-8" />,
  Java: <FaJava className="text-red-600 w-8 h-8" />,
  PostgreSQL: <FaDatabase className="text-indigo-500 w-8 h-8" />,
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Compétences</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform flex flex-col items-center justify-center"
          >
            {skillIcons[skill] && <div className="mb-2">{skillIcons[skill]}</div>}
            <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
