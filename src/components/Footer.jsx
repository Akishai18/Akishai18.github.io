import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faCogs, faMedal } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../constants';

function Footer() {
  const [awardsCount, setAwardsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
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
      countUp(setAwardsCount, 30); // Awards count up to 15
      countUp(setProjectsCount, 15); // Projects count up to 25
      countUp(setVolunteerHoursCount, 600); // Volunteer hours count up to 100
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
        <div className="w-full max-w-7xl mx-auto mb-12">
          <div className="flex justify-around text-center" ref={sectionRef}>
            {/* Showcase Item 1: Awards */}
            <div>
              <FontAwesomeIcon icon={faTrophy} size="3x" className="mb-4" />
              <h3 className="text-5xl font-bold">{awardsCount}</h3>
              <p className="text-lg mt-2">Awards Received</p>
            </div>
            
            {/* Showcase Item 2: Projects */}
            <div>
              <FontAwesomeIcon icon={faCogs} size="3x" className="mb-4" />
              <h3 className="text-5xl font-bold">{projectsCount}</h3>
              <p className="text-lg mt-2">Projects</p>
            </div>
            
            {/* Showcase Item 3: Volunteer Hours */}
            <div>
              <FontAwesomeIcon icon={faMedal} size="3x" className="mb-4" />
              <h3 className="text-5xl font-bold">{volunteerHoursCount}+</h3>
              <p className="text-lg mt-2">Volunteer Hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Links and Social Media */}
      <div className="bg-transparent-900 py-8 text-white">
        {/* First Row: Section Titles */}
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="flex justify-center flex-wrap space-x-8 mb-8">
            {navLinks.map((link) => (
              <div key={link.id} className="mb-2">
                <a 
                  href={`#${link.id}`} 
                  className="text-xl font-bold cursor-pointer hover:text-gray-300"
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Social Media Icons */}
        <section className="w-full flex justify-center mt-8">
          <div className="flex space-x-6">
            <a href="/" className="text-2xl hover:text-gray-300" aria-label="Github">
              <div className="w-16 h-16 text-white hover:text-red-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </div>
            </a>
            <a href="/" className="text-2xl hover:text-gray-300" aria-label="LinkedIn">
              <div className="w-16 h-16 text-white hover:text-blue-500 transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </div>
            </a>
            <a href="/" className="text-2xl hover:text-gray-300" aria-label="Instagram">
              <div className="w-16 h-16 text-white hover:text-pink-500 transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </div>
            </a>
          </div>
        </section>
      </div>
      <p class="text-xs text-gray-500">Design Inspired by: JS Mastery</p>
    </div>
  );
}

export default Footer;
