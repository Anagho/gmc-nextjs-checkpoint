import Link from "next/link";
import { projects } from "@/data/projectsData";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <Link href={`/projects/${project.id}`}>
              <button className="mt-3 inline-block text-blue-500 hover:underline">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
