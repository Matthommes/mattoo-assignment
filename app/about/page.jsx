import Navbar from "../component/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-amber-950 mb-6 text-center">
          About Me
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            MICHEAL MATTHEW ADESHINA
          </h2>
          <p className="text-lg text-gray-600">
            Matric Number: <span className="font-medium">F/HD/23/3210126</span>
          </p>
          <p className="text-gray-600 leading-relaxed text-center">
            Passionate about technology and constantly learning to make the
            world better. I enjoy building projects that help solve real-life
            problems.
          </p>
        </div>
      </main>
    </div>
  );
}

