import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { projects } from "../constants";

const Hero = () => {
  const location = useLocation();

  // Check if the current route matches a project details page
  const isProjectPage = location.pathname.startsWith("/projects/");
  const slug = location.pathname.split("/projects/")[1];
  const project = projects.find((p) => p.project_link === `/projects/${slug}`);

  console.log("Current Project:", project);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#b81d33]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} ${
            isProjectPage ? "text-black": "text-black"
          }`}>
            {isProjectPage ? project?.name : "Hi, I'm"}{" "}
            <span className="text-[#b81d33]">{isProjectPage ? "" : "Arkoun"}</span>
          </h1>
          <p className={`${styles.heroSubText} ${
            isProjectPage ? "text-black": "text-black"
          }`}>
            {isProjectPage
              ? project?.description
              : "I'm an Architectural Designer with a passion for 3D art, \nSoftware Development and Visual Storytelling."}
          </p>
        </div>
      </div>

      {/* Conditional Rendering for Hero Content */}
      {isProjectPage && project?.image ? (
        <div className="absolute inset-0 top-0 flex justify-center items-center">
          <img
            src={project.image_hero}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div
            className = "absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/100"
            style={{ zIndex: 1 }}
          />
        </div>
      ) : (
        <div className= "w-full h-full ">
          <ComputersCanvas />  
          <div
            className = "absolute inset-0 bg-gradient-to-t from-transparent-60% via-transparent to-white/100"
            style={{ 
              zIndex: 1,
              pointerEvents: "none", 
            }}
            
          />
          </div>            
      )}
      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;