import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-amber-900 text-white p-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link href="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-200">
          About me
        </Link>
        <Link href="/contact" className="hover:text-gray-200">
         Contact
        </Link>
        <Link href="/assignment" className="hover:text-gray-200">
          Assignment
        </Link>
      </div>
    </nav>
  );
}
