import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      viewport={{ once: true, amount: 0.1 }}
      initial="hidden"
      whileInView="show"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] overflow-hidden'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()} 
        className="text-center"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} mt-4`}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex justify-center mt-8'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
          viewport={{ once: true, amount: 0.1 }}
          initial="hidden"
          whileInView="show"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. They reflect my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
        
      <section id="awards"> 
        <motion.div 
          variants={textVariant()} 
          className="text-center mt-16"
          viewport={{ once: true, amount: 0.1 }}
          initial="hidden"
          whileInView="show"
        >
          <p className={`${styles.sectionSubText}`}></p>
          <h2 className={`${styles.sectionHeadText} mt-8`}>
            Distinctions & Awards
          </h2>
        </motion.div>
      </section>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <ul className='list-none p-0'>
          <li>🏆 First Place International Champion in Financial Consulting at the DECA International Competition (ICDC 2025) </li>
          <li>🥈 Second Place International Champion in Financial Consulting at ICDC 2024 </li>
          <li>🌟 Top 10 International Finalist in Financial Consulting x2 (ICDC 2024 & 2025) </li>
          <li>📈 Top 10 Presentation in Financial Consulting x2 (ICDC 2024 & 2025) </li>
          <li>📚 Top 10 Exam Score in Financial Consulting x2 (ICDC 2024 & 2025) </li>
          <li>🥇 DECA Provincials 2025 Provincial Champion in the Financial Consulting Event (Provincials 2025) </li>
          <li>🎓Schulich Leader Nominee</li>    
          <li>🏅 Provincial Champion in Financial Consulting at the DECA Provincials Competition (Provincials 2024) </li>
          <li>📊 Top 10 Provincials Finalist in Financial Consulting x2 (Provincials 2024 & 2025)</li>
          <li>🥇 Top Exam Score in Financial Consulting x2 (Provincials 2024 & 2025)</li>
          <li>📜 Euclid Math Contest School Champion</li>
          <li>♾️ Published Math Paper through the Oxford Math Essay Writing Contest</li>
          <li>💻 Published a Computer Science Paper on the P Vs NP Problem in a STEM Journal known as The STEM Spectrum that has an audiance of over 15,000 individuals. (8% Selection Rate)</li>
          <li>🔬 Attended the Quantum School For Young Students, particpating in groundbreaking Research into Quantum Information Science</li>
          <li>🌟 Top Ontario Scholar </li>
          <li>🗝️ Karla Bailey Trustee Award </li>
          <li>🎓 Honor Roll (Gr 9 - 12) </li>
        </ul>
      </motion.p>
    </>
  );
};

export default SectionWrapper(Works, "projects");