import React from 'react'
import { Tilt } from 'react-tilt'; 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const TechCard = ({ index, name, icon, scale }) => (
  <Tilt
    className='w-[150px] h-[150px]'
    options={{
      max: 75, 
      scale: 1.1, 
      speed: 400,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='flex justify-center items-center flex-col'
    >
      {/* Added hover:scale-110 to apply scaling on hover */}
      <div 
        className='flex justify-center items-center flex-col transition-transform duration-300 hover:scale-125' 
        style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {/* Icon */}
        <img
          src={icon}
          alt={name}
          style={{ width: `${scale}px`, height: `${scale}px` }} 
          className='object-contain'
        />

        {/* Text */}
        <h3 className='text-white text-[16px] font-bold text-center mt-2'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <TechCard 
            key={tech.name} 
            index={index} 
            name={tech.name} 
            icon={tech.icon} 
            scale={tech.scale} // Use the scale from the technologies array
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Tech, "Tech");
