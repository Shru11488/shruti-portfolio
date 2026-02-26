import Link from 'next/link';
const projects = [
  {
    title:"Data Manager",
    description:
      "A dynamic table application with pagination, global filtering, sorting and Excel export functionality.",
    tech: "React, Redux, Next.js",
    github: "https://github.com/YOUR-USERNAME/data-manager",
    demo: "https://data-manager-alpha.vercel.app",
  },
  {
    title: "Coffee Shop Landing Page",
    description:
      "Responsive landing page for a coffee shop with modern UI and smooth interactions.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/YOUR-USERNAME/My-coffee-shop",
    demo: "https://my-coffee-shop-alpha.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: {project.tech}
            </p>

            <div className="flex gap-4">
                <Link
                href={project.github}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </Link>

              <Link
                href={project.demo}
                target="_blank"
                className="text-green-600 hover:underline"
              >
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}