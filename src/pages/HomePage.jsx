import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  const skillsList = ["Java", "Spring Boot", "React", "PostgreSQL", "Git", "Docker"];
  const projects = [
    { title: "Jirama Alert", description: "Suivi consommation", tech: ["React","Spring Boot"], link: "#" },
    { title: "API Foot", description: "API championnat", tech: ["Spring Boot","Swagger"], link: "#" },
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />

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

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 bg-gray-100 dark:bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <ContactForm />
      </motion.section>

      <Footer />
    </div>
  );
}
