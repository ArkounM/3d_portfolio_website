import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { SectionWrapper } from '../hoc';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.project_link === `/projects/${slug}`);

  if (!project) return <div className="p-10 text-center">Project not found.</div>;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <img src={project.image} alt={project.name} className="w-full rounded-xl mb-4" />
      <p className="text-gray-700 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag.name} className={`text-sm ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectDetails, "");
