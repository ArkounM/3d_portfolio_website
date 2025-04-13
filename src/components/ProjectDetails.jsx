import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.project_link === `/projects/${slug}`);

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="p-10 text-center">Project not found.</div>;

  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Project Header */}
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p className={styles.sectionSubText}>{project.subtitle}</p>

      {/* Render Image Only If It Is Not "" */}
      {project.image_header !== "" && (
        <img
          src={project.image_header}
          alt={project.name}
          className="w-full rounded-xl mb-4"
        />
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag.name} className={`text-sm ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>

      <div className="text-gray-700 mb-6">
        <p className={styles.sectionSubText}>Project Overview</p>
        {project.abstract.map((paragraph, index) => (
          <p key={index} className="mt-4 mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Project Images and Body Text */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Render Image 1 */}
        {project.image_1 !== "" && (
          <img
            src={project.image_1}
            alt={project.name}
            className={`${
              project.body_text1.length === 0 ? "w-full" : "w-full md:w-1/2"
            } rounded-xl object-cover`}
          />
        )}

        {/* Render Text Only If It Exists */}
        {project.body_text1.length > 0 && (
          <div className="text-gray-700 md:w-1/2">
            {project.body_text1.map((paragraph, index) => (
              <p key={index} className="mt-4 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </motion.div>

      {/* Render Image 2 Only If It Is Not "" */}
      {project.image_2 !== "" && (
        <img src={project.image_2} className="w-full items-center" />
      )}

      <motion.div
        className="flex flex-col md:flex-row gap-10 mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
      {/* Render Text Only If It Exists */}
        {project.body_text2.length > 0 && (
          <div className="text-gray-700 md:w-1/2">
            {project.body_text2.map((paragraph, index) => (
              <p key={index} className="mt-10 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {/* Render Image 1 */}
        {project.image_3 !== "" && (
          <img
            src={project.image_3}
            alt={project.name}
            className={`${
              project.body_text2.length === 0 ? "w-full mt-10" : "mt-10 w-full md:w-1/2"
            } rounded-xl object-cover mt-10`}
          />
        )}

      </motion.div>

      {/* Render Image 4 Only If It Is Not "" */}
      {project.image_4 !== "" && (
        <img src={project.image_4} className="w-full items-center" />
      )}

<motion.div
        className="flex flex-col md:flex-row gap-10 mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Render Image 1 */}
        {project.image_5 !== "" && (
          <img
            src={project.image_5}
            alt={project.name}
            className={`${
              project.body_text3.length === 0 ? "w-full mt-10" : "mt-10 w-full md:w-1/2"
            } rounded-xl object-cover`}
          />
        )}

        {/* Render Text Only If It Exists */}
        {project.body_text3.length > 0 && (
          <div className="text-gray-700 md:w-1/2">
            {project.body_text3.map((paragraph, index) => (
              <p key={index} className="mt-10 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </motion.div>
      {/* Render Image 6 Only If It Is Not "" */}
      {project.image_6 !== "" && (
        <img src={project.image_6} className="w-full items-center" />
      )}

      <motion.div
        className="flex flex-col md:flex-row gap-10 mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Render Image 1 */}
      {/* Render Text Only If It Exists */}
      {project.body_text4.length > 0 && (
          <div className="text-gray-700 md:w-1/2">
            {project.body_text4.map((paragraph, index) => (
              <p key={index} className="mt-10 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {/* Render Image 1 */}
        {project.image_7 !== "" && (
          <img
            src={project.image_7}
            alt={project.name}
            className={`${
              project.body_text4.length === 0 ? "w-full mt-10" : "mt-10 w-full md:w-1/2"
            } rounded-xl object-cover mt-10`}
          />
        )}

      </motion.div>

      {/* Render Image 8 Only If It Is Not "" */}
      {project.image_8 !== "" && (
        <img src={project.image_8} className="w-full items-center" />
      )}

      {/* Embed YouTube Video */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={project.video}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectDetails, "details");