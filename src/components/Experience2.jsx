import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import {experiences2} from  '../constants';
import { SectionWrapper } from '../hoc';

import { textVariant } from '../utils/motion';
import { StarsCanvas } from "./canvas";

const ExperienceCard = ({ experience }) => {
  // Default scale value
  const scale = experience.scale || 1;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          className='flex justify-center items-center w-full h-full'
          style={{ transform: `scale(${scale})` }} // Apply scale here
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience2 = () => {
  
  return (
    <>
       <motion.div>
        <p className={`${styles.sectionSubText} text-center`}>
          Some other things I have done
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Extracurricualrs
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences2.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
        
    </>
  );
};

export default SectionWrapper(Experience2, "extracurriculars");