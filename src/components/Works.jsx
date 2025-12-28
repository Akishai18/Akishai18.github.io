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
    className="text-center mt-24"
    viewport={{ once: true, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
  >
    <p className={`${styles.sectionSubText}`}>Recognition</p>
    <h2 className={`${styles.sectionHeadText} mt-4`}>
      Distinctions & Awards
    </h2>
  </motion.div>
</section>

{/* Awards Grid */}
<div className="mt-12 max-w-7xl mx-auto">
  {/* DECA International Section */}
  <motion.div
    variants={fadeIn("up", "spring", 0.2, 1)}
    viewport={{ once: true, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
    className="relative group mb-8"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 blur-2xl group-hover:blur-3xl transition-all duration-300 -z-10" />
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-500/40 transition-all duration-300 shadow-xl">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 text-[24px] font-bold mb-6 flex items-center gap-3">
        <span className="text-3xl">🏆</span>
        International Achievements
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-3 bg-yellow-500/5 rounded-lg hover:bg-yellow-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🥇</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            First Place International Champion in Financial Consulting (ICDC 2025)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-yellow-500/5 rounded-lg hover:bg-yellow-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🥈</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Second Place International Champion in Financial Consulting (ICDC 2024)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-yellow-500/5 rounded-lg hover:bg-yellow-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🌟</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Top 10 International Finalist in Financial Consulting x2 (ICDC 2024 & 2025)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-yellow-500/5 rounded-lg hover:bg-yellow-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">📈</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Top 10 Presentation in Financial Consulting x2 (ICDC 2024 & 2025)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-yellow-500/5 rounded-lg hover:bg-yellow-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">📚</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Top 10 Exam Score in Financial Consulting x2 (ICDC 2024 & 2025)
          </p>
        </div>
      </div>
    </div>
  </motion.div>

  {/* DECA Provincial Section */}
  <motion.div
    variants={fadeIn("up", "spring", 0.3, 1)}
    viewport={{ once: true, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
    className="relative group mb-8"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl group-hover:blur-3xl transition-all duration-300 -z-10" />
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-[24px] font-bold mb-6 flex items-center gap-3">
        <span className="text-3xl">🥇</span>
        Provincial Achievements
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">👑</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Provincial Champion in Financial Consulting (Provincials 2025)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🏅</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Provincial Champion in Financial Consulting (Provincials 2024)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">📊</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Top 10 Provincials Finalist in Financial Consulting x2 (2024 & 2025)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">📝</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Top Exam Score in Financial Consulting x2 (Provincials 2024 & 2025)
          </p>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Academic & Research Section */}
  <motion.div
    variants={fadeIn("up", "spring", 0.4, 1)}
    viewport={{ once: true, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
    className="relative group mb-8"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-2xl group-hover:blur-3xl transition-all duration-300 -z-10" />
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/40 transition-all duration-300 shadow-xl">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-[24px] font-bold mb-6 flex items-center gap-3">
        <span className="text-3xl">📚</span>
        Academic & Research Awards
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🎓</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Schulich Leader Nominee
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">📜</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Euclid Math Contest School Champion
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">♾️</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Published Math Paper through Oxford Math Essay Writing Contest
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">💻</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Published CS Paper on P Vs NP in The STEM Spectrum (8% Selection Rate, 15,000+ readers)
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🔬</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Quantum School For Young Students - Groundbreaking Research in Quantum Information Science
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🌟</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Top Ontario Scholar
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🌟</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Karla Bailey Trustee Award
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors">
          <span className="text-2xl flex-shrink-0">🌟</span>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Honor Roll (Grade 9 - 12)
          </p>
        </div>
      </div>
    </div>
  </motion.div>

</div>
    </>
  );
};

export default SectionWrapper(Works, "projects");