export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">

            <h3 className="text-xl font-semibold mb-3">
              Expense Tracker Pro
            </h3>

            <p className="text-gray-400 mb-4">
              Full stack expense management application with authentication
              and analytics dashboard.
            </p>

            <div className="flex gap-3 text-sm mb-4">
              <span className="bg-slate-700 px-2 py-1 rounded">Next.js</span>
              <span className="bg-slate-700 px-2 py-1 rounded">MongoDB</span>
              <span className="bg-slate-700 px-2 py-1 rounded">Tailwind</span>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-indigo-400 hover:underline"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="text-indigo-400 hover:underline"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}