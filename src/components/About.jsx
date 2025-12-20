import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

import python from '../assets/tech/python.png';
import mysql from '../assets/tech/mysql.png';
import C from '../assets/tech/C.png';
import flask from '../assets/tech/flask.png';
import reactjs from '../assets/tech/reactjs.png';
import javascript from '../assets/tech/javascript.png';
import nextjs from '../assets/tech/nextjs.png';
import tailwind from '../assets/tech/tailwind.png';
import nodejs from '../assets/tech/nodejs.png';

const techStackIcons = {
  backend: [
    { name: 'Python', icon: python },
    { name: 'MySQL', icon: mysql },
    { name: 'C', icon: C },
    { name: 'Flask', icon: flask },
  ],
  frontend: [
    { name: 'React', icon: reactjs },
    { name: 'JavaScript', icon: javascript },
    { name: 'Next.js', icon: nextjs },
    { name: 'Tailwind', icon: tailwind },
    { name: 'Node', icon: nodejs },
  ],
};

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
          className='w-24 h-24 object-contain'
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
      {/* Header Section */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className={`${styles.sectionSubText} tracking-[0.3em] uppercase`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} mt-4`}>Overview</h2>
      </motion.div>

      {/* Hero Introduction */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="relative max-w-5xl mx-auto mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl -z-10" />
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <p className="text-white text-[20px] md:text-[24px] leading-[38px] font-light text-center">
            Hey, I'm <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Akishai</span>! 
            I am an ambitious and dedicated Software Engineering student who shares a strong passion and proclivity towards all things 
            <span className="text-purple-400"> programming</span>, 
            <span className="text-pink-400"> engineering</span>, and 
            <span className="text-blue-400"> business</span>.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Card 1 - Mission */}
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 1)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl group-hover:blur-3xl transition-all duration-300 -z-10" />
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl h-full">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-[22px] font-bold mb-4">
                My Mission
              </h3>
              <p className="text-white/90 text-[17px] leading-[30px]">
                I am a developer determined to innovate and push the boundaries of what's possible through technology. 
                I firmly believe that many of the problems our world faces can be addressed through technology, and I'm 
                driven to create impactful solutions that inspire and make a difference.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Education */}
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 1)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-blue-600/20 blur-2xl group-hover:blur-3xl transition-all duration-300 -z-10" />
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/40 transition-all duration-300 shadow-xl h-full">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 text-[22px] font-bold mb-4">
                Education & Goals
              </h3>
              <p className="text-white/90 text-[17px] leading-[30px]">
                I am studying Software Engineering at the University of Waterloo, where 
                in addition to my technical skills, I hope to expand my knowledge in the world of business and finance. I'm currently 
                exploring Machine Learning and AI as I'm eager to pursue the field 
                of Quantitative Finance.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
        {/* Card 3 - Technical Stack */}
        <motion.div
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-2xl group-hover:blur-3xl transition-all duration-300 -z-10" />
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl h-full">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-[22px] font-bold mb-4">
              Technical Stack
            </h3>
            <p className="text-white/90 text-[17px] leading-[30px] mb-8">
              Full-stack developer proficient in:
            </p>
            <div className="space-y-8">
              {/* Backend */}
              <div>
                <h4 className="text-purple-400 text-[15px] font-semibold mb-4 tracking-wide">Backend</h4>
                <div className="flex flex-wrap gap-4">
                  {techStackIcons.backend.map((tech) => (
                    <Tilt
                      key={tech.name}
                      className='w-14 h-14'
                      options={{
                        max: 75, 
                        scale: 1.1, 
                        speed: 400,
                      }}
                    >
                      <div className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='w-12 h-12 object-contain'
                        />
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>
              
              {/* Frontend */}
              <div>
                <h4 className="text-blue-400 text-[15px] font-semibold mb-4 tracking-wide">Frontend</h4>
                <div className="flex flex-wrap gap-4">
                  {techStackIcons.frontend.map((tech) => (
                    <Tilt
                      key={tech.name}
                      className='w-14 h-14'
                      options={{
                        max: 75, 
                        scale: 1.3, 
                        speed: 400,
                      }}
                    >
                      <div className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='w-12 h-12 object-contain'
                        />
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

          {/* Card 4 - Currently Working On */}
          <motion.div
            variants={fadeIn("left", "spring", 0.5, 1)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-2xl group-hover:blur-3xl transition-all duration-300 -z-10" />
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/40 transition-all duration-300 shadow-xl h-full">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-[22px] font-bold mb-4">
                Currently Building
              </h3>
              <p className="text-white/90 text-[17px] leading-[30px] mb-4">
                I love working in collaborative environments where I can leverage my creativity to innovate and develop solutions 
                that make a meaningful impact.
              </p>
              <p className="text-white/90 text-[17px] leading-[30px] mb-4">
                Currently:
              </p>
              
              {/* Bullet Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                  <p className="text-white/80 text-[16px] leading-[28px]">
          Researching machine learning applications in quantitative finance, including algorithmic trading, risk modeling, and predictive market analytics          </p>     </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <p className="text-white/80 text-[16px] leading-[28px]">
        Building Nodaro, a student-led initiative providing resources and mentorship to empower young innovators   </p>             </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                  <p className="text-white/80 text-[16px] leading-[28px]">
          Studying and applying quantitative methods like Stochastic Calculus and Monte Carlo Simulations to financial software     </p>           </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <p className="text-white/80 text-[16px] leading-[28px]">
                Serving as Board Member at Career Chats</p>
                </div>
              </div>
            </div>
          </motion.div>     
            </div>
                </div>

      {/* Services Cards */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");