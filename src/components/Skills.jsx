export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">Compétences</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transition-transform">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
