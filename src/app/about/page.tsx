import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Find more about me",
};


 const Page = () => {
  return (
    <section className="container mx-auto p-4">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center my-10">
        <img
          src="/profile.png" 
          alt="Your Name"
          className="w-48 h-48 rounded-full object-cover shadow-md mx-auto md:mx-0"
        />
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4 text-lg">
            Hi, I’m Okiroro, a passionate full-stack developer with
            expertise in building modern, responsive web applications. My skill
            set includes technologies like React, Next.js, TypeScript, and
            Tailwind CSS. I am constantly exploring new tools and frameworks to
            expand my knowledge and improve my craft.
          </p>
          <p className="mt-4 text-lg">
            When I'm not coding, I enjoy gaming, cooking, singing, traveling. Feel free to explore my portfolio to learn more about my
            projects and skills.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-none text-center">
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">React</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">Next.js</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">TypeScript</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">Tailwind CSS</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">Node.js</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
