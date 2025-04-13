import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { link } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Link to={project_link}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='yellow-gradient p-5 rounded-2xl sm:w-[300px] w-full cursor-pointer'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={(e) => {
                  e.stopPropagation(); // prevent navigating when clicking the GitHub icon
                  window.open(source_code_link, '_blank');
                }}
                className="yellow-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={link}
                  alt="Project Link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className='text-black font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#555555] text-[17px] max-w-3x1 leading-[30px]"
          >
            This collection showcases a blend of academic architecture works and real-world applications that bridge the gap between design and technology. From conceptual design explorations to fully interactive experiences built in Unreal Engine 5, these projects reflect my passion for architecture, software development, and immersive storytelling. Each piece represents a step in my journey — pushing creative boundaries and exploring how digital tools can elevate spatial design.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "projects");