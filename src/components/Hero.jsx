export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="text-center max-w-3xl px-6">

        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm <span className="text-indigo-400">Shruti</span>
        </h1>

        <p className="text-lg text-gray-400 mb-8">
          Full Stack Developer specializing in building scalable web applications
          using the MERN stack and modern frontend frameworks.
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="#projects"
            className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:border-indigo-400 transition"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}