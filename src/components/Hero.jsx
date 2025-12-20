import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { styles } from "../styles";

const Hero = () => {
  // Function to handle scroll on button click
  const handleScroll = () => {
    const target = document.querySelector('#about'); 
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center" style={{ backgroundImage: "url('src/assets/background.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5979fd]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-white`} >
          Hi, I'm <span className={`${styles.heroHeadTextCOLOR}`}> Akishai </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a 18-year-old developer on an adventure to create, innovate, and push the boundaries of what's possible through technology. <br className="sm:block hidden" />
            With a passion for learning and exploring new technologies, I'm driven to build solutions that inspire and make a difference.
          </p>
        </div>

        <div className="absolute inset-x-0 top-[calc(50%+50px)] left-1/2 transform -translate-x-1/2 flex justify-center gap-6">
          {/* GitHub Icon */}
          <a href="https://github.com/Akishai18" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 text-white hover:text-red-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </div>
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/akishai" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 text-white hover:text-blue-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </div>
          </a>

            {/* Email Icon */}
          <a href="mailto:your.email@example.com">
            <div className="w-12 h-12 text-white hover:text-red-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </div>
          </a>
          
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/akishai_18/" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 text-white hover:text-pink-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-[5rem] w-full flex justify-center">
        <button
          onClick={handleScroll}
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-white hover:text-black"
        >
          About Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
