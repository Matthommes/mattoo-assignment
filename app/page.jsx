import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <main className="text-center mt-10">
        <h1 className="text-4xl font-bold text-amber-800 mb-5">
          COM 300 AI Assignment
        </h1>
        <Image
          src="/matooo.jpg"
          alt="My Picture"
          width={250}
          height={300}
          className="rounded-2xl mx-auto shadow-lg"
        />
        <p className="mt-5 text-lg text-gray-600">
          This is the home page for my AI Assignment project.
        </p>
      </main>
      <footer className="mt-10 bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 R'9teen👚</p>
      </footer>
    </div>
  );
}
