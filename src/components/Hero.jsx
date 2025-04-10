import {motion} from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
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
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className="text-[#b81d33]">Arkoun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100 shadow-md`}>
            I'm an Architectural Designer with a passion for 3D art, <br className="sm:block hidden" />
            Software Development and Visual Storytelling.
          </p>
        </div>
      </div>

      {/* 3D Model Canvas */}
      <ComputersCanvas />

      <div className="absolute xs:bottom-40 bottom-44 w-full flex justify-center items-center z-10">
        <a
          href="Russell-Heights-Hub"
          className="px-6 py-3 bg-[#b81d33] text-white font-bold rounded-lg shadow-md hover:bg-[#a0172e] transition duration-300"
        >
          See Recent Project
        </a>
      </div>

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