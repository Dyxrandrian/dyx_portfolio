export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-4">{tech.join(", ")}</p>
      <a href={link} className="text-blue-500 hover:underline">Voir sur GitHub</a>
    </div>
  );
}
