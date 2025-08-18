import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, link, image }) {
  <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Compétences</h2>
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="border rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 p-6"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
      )}

      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-full text-sm font-medium text-white bg-blue-500 dark:bg-blue-600"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
      >
        Voir sur GitHub
      </a>
    </motion.div>
  );
}
