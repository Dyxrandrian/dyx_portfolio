import { motion } from "framer-motion";
import NySekolintsikaLogo from "../assets/skl.jpg"; // logo de ton lycée
import HEILogo from "../assets/hei.png"; // logo HEI

const parcoursData = [
  {
    logo: NySekolintsikaLogo,
    title: "Baccalauréat Série C",
    period: "Octobre 2022 - Août 2023",
    school: "Ny Sekolintsika Analamahitsy, Antananarivo",
    mention: "Mention Assez Bien",
  },
  {
    logo: HEILogo,
    title: "2ème année en Écosystème Logiciel Informatique",
    period: "Depuis Octobre 2023",
    school: "Haute Ecole d'Informatique (HEI) Antananarivo",
    mention: "Parcours Fullstack / Frontend & Backend",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Parcours Académique
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {parcoursData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <img src={item.logo} alt={item.school} className="w-20 h-20 mr-6 object-contain" />
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.school}</p>
              <p className="text-gray-500 dark:text-gray-400">{item.period} • {item.mention}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
