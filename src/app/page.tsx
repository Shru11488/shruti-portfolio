import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-600">Shruti Deshmukh</span>
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-600 mb-4">
        Full Stack Developer
      </h2>

      <p className="max-w-2xl text-gray-500 mb-8">
        I build modern, responsive web applications using React, Redux, and Next.js.
        Passionate about creating clean UI and scalable backend systems.
      </p>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Contact Me
        </Link>
      </div>

    </section>
  );
}