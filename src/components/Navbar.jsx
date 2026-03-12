"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-indigo-400">
          Shruti.dev
        </h1>

        <div className="flex gap-6 text-sm">

          <Link href="#about" className="hover:text-indigo-400 transition">
            About
          </Link>

          <Link href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </Link>

          <Link href="#skills" className="hover:text-indigo-400 transition">
            Skills
          </Link>

          <Link href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </Link>

          <a
            href="/resume.pdf"
            className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Resume
          </a>

        </div>
      </div>
    </nav>
  );
}