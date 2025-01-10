import { notFound } from "next/navigation";
import { projects } from "@/data/projectsData";

interface ProjectDetailsProps {
  params: { id: string };
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
  const project = projects.find(
    (proj) => proj.id === parseInt(params.id, 10)
  );

  if (!project) {
    return notFound(); // Automatically shows the Next.js 404 page
  }

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>
      <div className="border p-4 rounded-lg shadow-md">
        <img src={project.image} alt={project.title} />
      </div>
    </section>
  );
};

export default ProjectDetails;
