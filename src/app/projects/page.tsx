import { projects, Project } from "@/data/projectsData";
import Link from "next/link";

function ProjectsPage() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link href={`/projects/${project.id}`}>
                <button className="text-orange-500 font-medium mt-4 block">
                  View Details →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
