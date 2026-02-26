import Link from "next/link";

export default function Navbar() {
  return (
     <nav className="w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-800">Shruti Deshmukh</h1>

      <div className="space-x-6 text-gray-600 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </div>  
      </nav>
  );
}