export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Frontend
            </h3>
            <p>React</p>
            <p>Next.js</p>
            <p>TailwindCSS</p>
            <p>JavaScript</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Backend
            </h3>
            <p>Node.js</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>REST APIs</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Tools
            </h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>Postman</p>
            <p>Vercel</p>
          </div>

        </div>

      </div>

    </section>
  );
}