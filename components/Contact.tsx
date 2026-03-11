export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>

      <p className="mb-6">Let’s build something great together!</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="mailto:the.sst12@gmail.com"
          className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600"
        >
          Contact Me
        </a>

        <a
          href="https://wa.me/02058419955"
          target="_blank"
          className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600"
        >
          020 58419955
        </a>

        <a
          href="https://github.com/thesst24"
          target="_blank"
          className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}