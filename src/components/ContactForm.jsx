export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form action="https://formspree.io/f/ton-form-id" method="POST" className="max-w-xl mx-auto flex flex-col space-y-4">
        <input type="text" name="name" placeholder="Nom" className="p-3 rounded border"/>
        <input type="email" name="email" placeholder="Email" className="p-3 rounded border"/>
        <textarea name="message" placeholder="Message" className="p-3 rounded border"></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Envoyer</button>
      </form>
    </section>
  );
}
