import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <>
    <Navbar />
    
    <main className="min-h-screen px-6 pt-20">
      
      {/* HERO */}
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center">
        <Image
          src="/IMG_5906-removebg-preview.png"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full shadow-xl hover:scale-105 transition mb-5"
        />
        <h1 className="text-5xl font-bold">
          Halo, saya <span className="text-blue-800">Ranifa</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl">
          Saya seorang Web Developer yang fokus pada React, Next.js, dan TypeScript.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-blue-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl">
            <h3 className="text-xl font-bold text-center">Project 1</h3>
            <p className="text-gray-400 mt-2">
              Deskripsi singkat project kamu.
            </p>
          </div>

          <div className="p-6 bg-white border border-blue-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl">
            <h3 className="text-xl font-bold text-center">Project 2</h3>
            <p className="text-gray-400 mt-2">
              Deskripsi singkat project kamu.
            </p>
          </div>

          <div className="p-6 bg-white border border-blue-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl">
            <h3 className="text-xl font-bold text-center">Project 3</h3>
            <p className="text-gray-400 mt-2">
              Deskripsi singkat project kamu.
            </p>
          </div>

          <div className="p-6 bg-white border border-blue-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl">
            <h3 className="text-xl font-bold text-center">Project 1</h3>
            <p className="text-gray-400 mt-2">
              Deskripsi singkat project kamu.
            </p>
          </div>

          <div className="p-6 bg-white border border-blue-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl">
            <h3 className="text-xl font-bold text-center">Project 2</h3>
            <p className="text-gray-400 mt-2">
              Deskripsi singkat project kamu.
            </p>
          </div>

          <div className="p-6 bg-white border border-blue-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-3xl">
            <h3 className="text-xl font-bold text-center">Project 3</h3>
            <p className="text-gray-400 mt-2">
              Deskripsi singkat project kamu.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-4">email@email.com</p>
      </section>

    </main>
    </>
  );
}