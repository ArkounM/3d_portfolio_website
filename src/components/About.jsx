import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full red-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max:45,
              scale: 1,
              speed: 450
              }}
              className="yellow-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
              <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
              <h3 className="text-black text-[20px] font-bold text-center">{title}</h3>
          </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
      I'm an Architectural Designer with a passion for <span className="font-bold">3D Art</span>,  
      <span className="font-bold"> Software Development</span>, and <span className="font-bold">
        Visual Storytelling</span>. I specialize in creating interactive architectural visualization - <span className="font-bold">ArchViz</span> - applications using <span className="font-bold">Unreal Engine 5</span>, blending design precision with real-time immersive experiences.

      My work lives at the intersection of architecture and technology — where spaces are not only designed, but also experienced in intuitive, engaging ways. From concept development to interactive storytelling, I bring ideas to life through a multidisciplinary approach rooted in creativity and innovation.

      I'm always excited to connect, collaborate, and work with new clients who are just as passionate about pushing boundaries and exploring new ways to experience design.
      Let’s create something extraordinary together!
      </motion.p>

      <div className ="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))} 


      </div>
    </>
  )
}

export default SectionWrapper(About, "about");