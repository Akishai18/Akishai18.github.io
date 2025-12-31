import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faTrophy, faCogs, faMedal, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../constants';
import {webring} from '../assets';

function Footer() {
  const [awardsCount, setAwardsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [scholarshipCount, setScholarshipCount] = useState(0);
  const [volunteerHoursCount, setVolunteerHoursCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  // Counter Animation Logic
  useEffect(() => {
    const countUp = (setCountFunc, maxValue) => {
      let startValue = 0;
      const duration = 2000; // 2 seconds duration
      const increment = maxValue / (duration / 50); // Increase every 50ms

      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= maxValue) {
          setCountFunc(maxValue); // Set final value
          clearInterval(interval); // Stop the interval
        } else {
          setCountFunc(Math.ceil(startValue)); // Round up
        }
      }, 50);
    };

    if (isVisible) {
      countUp(setAwardsCount, 30); // Awards count up to 30
      countUp(setProjectsCount, 15); // Projects count up to 15
      countUp(setScholarshipCount, 220000); // Scholarship count up to 220,000
      countUp(setVolunteerHoursCount, 800); // Volunteer hours count up to 800
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* First Section: Awards and Metrics */}
      <div className="bg-black-100 py-10 text-white flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto mb-12 px-4">
          <div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center" 
            ref={sectionRef}
          >
            {/* Showcase Item 1: Awards */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon 
                icon={faTrophy} 
                className="mb-4 text-2xl sm:text-3xl lg:text-4xl" 
              />
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {awardsCount}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mt-2">
                Awards Received
              </p>
            </div>
            
            {/* Showcase Item 2: Projects */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon 
                icon={faCogs} 
                className="mb-4 text-2xl sm:text-3xl lg:text-4xl" 
              />
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {projectsCount}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mt-2">
                Projects
              </p>
            </div>

            {/* Showcase Item 3: Scholarships */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon 
                icon={faMoneyBill} 
                className="mb-4 text-2xl sm:text-3xl lg:text-4xl" 
              />
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                ${scholarshipCount.toLocaleString()}+
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mt-2">
                In Scholarships
              </p>
            </div>
            
            {/* Showcase Item 4: Volunteer Hours */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon 
                icon={faMedal} 
                className="mb-4 text-2xl sm:text-3xl lg:text-4xl" 
              />
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {volunteerHoursCount}+
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mt-2">
                Volunteer Hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Links and Social Media */}
      <div className="bg-transparent-900 py-8 text-white">
        {/* First Row: Section Titles */}
        <div className="w-full max-w-7xl mx-auto text-center px-4">
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-8">
            {navLinks.map((link) => (
              <div key={link.id} className="mb-2">
                <a 
                  href={`#${link.id}`} 
                  className="text-lg sm:text-xl font-bold cursor-pointer hover:text-gray-300"
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Social Media Icons */}
        <section className="w-full flex justify-center mt-8 px-4">
          <div className="flex gap-4 sm:gap-6">
            <a href="https://github.com/Akishai18" className="text-2xl hover:text-gray-300" aria-label="Github">
              <div className="w-12 h-12 sm:w-16 sm:h-16 text-white hover:text-red-400 transition-colors duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-2xl" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/akishai" className="text-2xl hover:text-gray-300" aria-label="LinkedIn">
              <div className="w-12 h-12 sm:w-16 sm:h-16 text-white hover:text-blue-500 transition-colors duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl sm:text-2xl" />
              </div>
            </a>
          <a href="https://drive.google.com/file/d/1dM9oyrXQ6EZPKajsH3iAV3lRLaTyAdB3/view?usp=sharing" className="text-2xl hover:text-gray-300" aria-label="Resume">
              <div className="w-12 h-12 sm:w-16 sm:h-16 text-white hover:text-yellow-500 transition-colors duration-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faFile} className="text-xl sm:text-2xl" />
            </div>
          </a>


          <a href="mailto:akishais18@gmail.com">
              <div className="w-12 h-12 sm:w-16 sm:h-16 text-white hover:text-red-500 transition-colors duration-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl sm:text-2xl" />
            </div>
          </a>
            <a href="https://www.instagram.com/akishai_18/" className="text-2xl hover:text-gray-300" aria-label="Instagram">
              <div className="w-12 h-12 sm:w-16 sm:h-16 text-white hover:text-pink-500 transition-colors duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faInstagram} className="text-xl sm:text-2xl" />
              </div>
            </a>

          <a href="https://x.com/Akishai_S/" className="text-2xl hover:text-gray-300" aria-label="X">
              <div className="w-12 h-12 sm:w-16 sm:h-16 text-white hover:text-gray-500 transition-colors duration-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl sm:text-2xl" />
            </div>
          </a>
          </div>
        </section>

        
        {/* Third Row: Webring Icons */}
        <section className="w-full flex justify-center mt-8 px-4">
          <div className="flex items-center justify-center gap-6">
            {/* SE '30 Webring */}
            <div className="flex items-center gap-3">
              <a 
                href={`https://se30webring.com?from=${window.location.href}&dir=prev`} 
                className="text-[#FFCE1A] text-2xl hover:text-[#FFE066] transition-colors duration-300"
                aria-label="Previous in SE '30 Webring"
              >
                ←
              </a>
              <a 
                href="https://se30webring.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label="SE '30 Webring"
              >
                <img 
                  src="https://se30webring.com/assets/icon-yellow.svg" 
                  alt="SE '30 Webring" 
                  className="w-10 h-10 sm:w-12 sm:h-12 opacity-90 hover:opacity-100 transition-opacity" 
                />
              </a>
              <a 
                href={`https://se30webring.com?from=${window.location.href}&dir=next`} 
                className="text-[#FFCE1A] text-2xl hover:text-[#FFE066] transition-colors duration-300"
                aria-label="Next in SE '30 Webring"
              >
                →
              </a>
            </div>

            {/* UW SE Webring */}
            <a 
              href="https://se-webring.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-300 hover:scale-110"
              aria-label="UW SE Webring"
            >
              <img 
                src={webring} 
                alt="SE Webring" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Footer;
