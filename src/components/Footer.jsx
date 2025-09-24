import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Dyxrandrian" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dylan-ran" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/votre-compte" },
    { name: "Email", icon: <HiOutlineMail />, url: "mailto:tolotra.dylan@gmail.com" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

        {/* Colonne gauche */}
        <div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Dylan Randrianarivony
          </h3>
          <p className="text-gray-400 max-w-xs mt-2">
            Développeur web passionné par la création d'expériences numériques mémorables.
          </p>
        </div>

        {/* Colonne centre (Infos perso) */}
        <div className="max-w-sm text-gray-400 text-sm leading-relaxed">
          <p>
            Actuellement basé à <span className="text-white">Antananarivo, Madagascar</span>.
            Etudiant en développeur web fullstack, spécialisé en <span className="text-white">Wordpress, React, Node.js</span> et
            la création d’applications performantes.
            Vous pouvez me contacter à :
            <a
              href="mailto:tolotra.dylan@gmail.com"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              tolotra.dylan@gmail.com
            </a>.
          </p>
        </div>


        {/* Colonne droite */}
        <div className="flex space-x-6">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition duration-300 transform hover:scale-125"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Ligne séparatrice + copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dylan Randrianarivony. Tous droits réservés.
      </div>
    </footer>
  );
}
