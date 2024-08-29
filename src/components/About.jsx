import React from 'react'
import { Tilt } from 'react-tilt'; 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='service-icon'
          className='w-24 h-24 object-contain' // Increased icon size
        />

        <h3 className='text-white text-[20px] font-bold text-center mt-2'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
    <motion.div variants={textVariant()} className="text-center">
      
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
      
    </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}     className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto" >
    
      Hey, I'm Akishai! I am an ambitious and dedicated high school student who shares a strong passion and proclivity towards all things programming, engineering, and business. I am eager to learn new things and constantly seek opportunities to challenge myself and grow. I love working in collaborative environments where I can leverage my creativity to innovate and develop solutions that make a meaningful impact. My enthusiasm for discovering new technologies and tackling complex problems drives me to grow and excel in everything I do.
      <br></br>
        <br></br>I am a developer  who is determined to innovate, and push the boundaries of what's possible through technology.
        I am firm a believer that many of the problems our world faces can be addressed through technology thus I'm driven to create impactful solutions that inspire and make a difference.

        <br></br>
        <br></br>I plan to study Computer Science and Software Engineering at university while also expanding my knowledge in business and finance. My aspiration is to create my own startup with the goal of innovating and developing solutions that address problems and advance society.
        <br></br>
        <br></br> I am a full-stack developer proficient in languages and frameworks including Python, C++, and Flask for backend development, as well as React, JavaScript, HTML, CSS, Tailwind, and Node for front-end development.


      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
