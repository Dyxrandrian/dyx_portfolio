import { motion } from "framer-motion";
import {
  FaReact, FaJsSquare, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaCog
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiFlowChart } from "react-icons/ri";
import PythonIcon from "../assets/python.png";

const skillIcons = {
  React: <FaReact className="text-blue-500 w-8 h-8" />,
  "React Admin": <FaCog className="text-pink-500 w-8 h-8" />,
  HTML: <FaHtml5 className="text-orange-500 w-8 h-8" />,
  CSS: <FaCss3Alt className="text-blue-600 w-8 h-8" />,
  JavaScript: <FaJsSquare className="text-yellow-400 w-8 h-8" />,
  Java: <FaJava className="text-red-600 w-8 h-8" />,
  PostgreSQL: <SiPostgresql className="text-indigo-500 w-8 h-8" />,
  API: <MdApi className="text-purple-500 w-8 h-8" />,
  GitHub: <FaGithub className="text-gray-700 dark:text-white w-8 h-8" />,
  Python: <img src={PythonIcon} alt="Python" className="w-8 h-8" />,
  "Apache Airflow": <RiFlowChart className="text-teal-500 w-8 h-8" />,
  "Data Visualization": <AiOutlineBarChart className="text-yellow-500 w-8 h-8" />,
};
const skills = Object.keys(skillIcons);

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Compétences</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform flex flex-col items-center justify-center"
          >
            <div className="mb-2">{skillIcons[skill]}</div>
            <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
