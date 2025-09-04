import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Particles from "../components/ParticleCanvas"; // ton composant particles

export default function HomePage() {
  const skillsList = [
    "React","React Admin","JavaScript","HTML","CSS","Java",
    "PostgreSQL","Data Visualization","Apache Airflow",
    "Python","API","GitHub"
  ];

  const projects = [
    { title: "Jirama Alert", description: "Gestion de coupure d'électricité", tech: ["React","React Admin","Spring Boot","Java","PostgreSQL"], link: "https://github.com/Dyxrandrian/Jirama_alert", images: "/src/assets/jirama_1.png" },
    { title: "Brew Lounge website", description: "Site statique", tech: ["HTML","CSS","JavaScript"], link: "https://github.com/Dyxrandrian/brew-lounge-website", images: "/src/assets/brew_1.png" },
    { title: "Comparaison Méteo", description: "Comparaison météo avec Python, Airflow et Metabase", tech: ["Python","Apache Airflow","Metabase","API"], link: "https://github.com/Dyxrandrian/Comparaison_climatique_STD23065", images: "/src/assets/dash_1.png" },
  ];

  const sectionVariant = { hidden: { opacity:0, y:50 }, visible:{opacity:1,y:0,transition:{duration:0.6}} };

  return (
    <div className="relative min-h-screen scroll-smooth w-full h-full">
      {/* Particles derrière tout le contenu */}
      <Particles />

      <Navbar />
      <Hero />

      {/* Education Section */}
      <motion.section
        id="education"
        className="text-center relative z-10 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        variants={sectionVariant}
      >
        <Education />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 text-center relative z-10 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        variants={sectionVariant}
      >
        <Skills skills={skillsList} />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 max-w-6xl mx-auto space-y-16 px-4 relative z-10 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        variants={sectionVariant}
      >
        {projects.map((p,i)=>(
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${i%2===1?"md:flex-row-reverse":""}`}
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.6,delay:i*0.2}}
          >
            {p.images && (
              <motion.img
                src={p.images}
                alt={p.title}
                className="flex-1 w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
              />
            )}
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
