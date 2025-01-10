import ProjectList from "@/components/ProjectList";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="text-center my-10 max-w-[900px] mx-auto">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-5 text-base md:text-2xl font-light">
          Showcasing my skills, projects, and achievements as a passionate
          developer.
        </p>
      </div>

      {/* About Section */}
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto shadow-lg rounded-lg">
          {/* Left: Profile Picture */}
          <div className="relative w-full h-64 md:h-80 bg-gray-700/25 rounded-lg rounded-tr-none rounded-br-none">
            <Image
              src={"/profile.png"}
              alt="Okiroro Anagho"
              layout="fill"
              objectFit="contain"
              className="rounded-tr-none rounded-br-none"
            />
          </div>

          {/* Right: About Text */}
          <div className="text-center md:text-left items-start p-4">
            <h3 className="text-3xl text-gray-600 mb-4 font-bold tracking-widest">
              Okiroro Anagho
            </h3>
            <p className="text-base md:text-lg">
              I am a full-stack developer with a passion for building efficient
              and user-friendly web applications. Skilled in modern technologies
              such as React, Next.js, Tailwind CSS, and more. Check out my
              projects to see what I’ve been working on!
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="my-10">
        <h2 className="text-4xl font-bold text-center mb-5">Projects</h2>
        <ProjectList />
      </div>

      {/* Contact Section */}
      <div className="my-10 text-center">
        <h2 className="text-4xl font-bold mb-5">Contact Me</h2>
        <p className="text-base md:text-lg">
          Feel free to reach out for collaboration or inquiries.
        </p>
        <a
          href="/contact"
          className="mt-5 inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
