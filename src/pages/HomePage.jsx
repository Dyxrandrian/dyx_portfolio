import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Education from "../components/Education";
import { motion } from "framer-motion";

export default function HomePage() {
  const skillsList = ["Java", "Spring Boot", "React", "PostgreSQL", "Git", "Docker"];
  const projects = [
    {
      title: "Jirama Alert",
      description: "Gestion de coupure d'électricité",
      tech: ["React", "Spring Boot"],
      link: "#",
      images: "/src/assets/jirama_1.png"
    },
    {
      title: "Brew Lounge website",
      description: "Site statique",
      tech: ["HTML", "CSS"],
      link: "#",
      images: "/src/assets/brew_1.png"
    },
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />

      {/* Education / Parcours Section */}
      <motion.section
        id="education"
        className="bg-gray-100 dark:bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Education />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 bg-gray-200 dark:bg-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Skills skills={skillsList} />
      </motion.section>


      <motion.section
        id="projects"
        className="py-20 max-w-6xl mx-auto space-y-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Image */}
            {p.images && (
              <motion.img
                src={p.images}
                alt={p.title}
                className="flex-1 w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Texte */}
            <div className="flex-1">
              <ProjectCard {...p} />
            </div>
          </motion.div>
        ))}
      </motion.section> 
      <Footer />
    </div>
  );
}
