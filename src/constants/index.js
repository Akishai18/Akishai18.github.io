import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nextjs,
    Pose,
    nutriscan,
    nodejs,
    scikit,
    php,
    Laravel,
    C,
    GoogleC,
    Arduino,
    Excell,
    flask,
    python,
    git,
    Uoft,
    JEC,
    Nvestiv,
    DECA,
    STEMF,
    CareerChats,
    Waterloo,
    Castlebrooke,
    Ysa,
    Home,
    Mind,
    Quiz,
    mysql,
    NorthPND,
    Pineapple,
    Heart,
    Career,
    Tetris,
    Jamhacks,
    FinTech,
    MCYC,
    Tutorly,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "extracurriculars",
      title: "Extracurriculars",
    },
    {
      id: "Tech",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "awards",
      title: "Awards",
    },
    {
      id: "contact",
      title: "Contact",
    },
  
  ];
  
  const  services = [
    {
      title: "Developer",
      icon: web,
    },
    {
      title: "Engineer",
      icon: creator,
    },
    {
      title: "Visonary",
      icon: backend,
    },
    {
      title: "Leader",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
      scale: 64,
    },
    {
      name: "Flask",
      icon: flask,
      scale: 128,
    },
    {
      name: "JavaScript",
      icon: javascript,
      scale: 64,
    },

    {
      name: "React JS",
      icon: reactjs,
      scale: 64,
    },
    {
      name: "MySQL",
      icon: mysql,
      scale: 64,
    },
    {
      name: "Next.JS",
      icon: nextjs,
      scale: 64,
    },
    {
      name: "Node JS",
      icon: nodejs,
      scale: 64,
    },
    {
      name: "HTML 5",
      icon: html,
      scale: 64,
    },
    {
      name: "CSS",
      icon: css,
      scale: 64,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
      scale: 64,
    },
    {
      name: "C / C++",
      icon: C,
      scale: 64,
    },

        {
      name: "PHP",
      icon: php,
      scale: 90,
    },

        {
      name: "Laravel",
      icon: Laravel,
      scale: 64,
    },
    {
      name: "Sci-Kit Learn",
      icon: scikit,
      scale: 64,
    },
    {
      name: "git",
      icon: git,
      scale: 64,
    },
    {
      name: "Arduino",
      icon: Arduino,
      scale: 64,
    },
    {
      name: "Excell",
      icon: Excell,
      scale: 64,
    },

    {
      name: "Google Cybersecurity Certification",
      icon: GoogleC,
      scale: 64,
    },

  ];
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "North P&D",
      icon: NorthPND,
      iconBg: "white",
      scale: 1.4, // Add scale property here
      date: "June 2025 - August 2025",
      points: [
        "Developed and optimized over 15 client website features by leveraging PHP, Vue.js, JavaScript, and MySQL, resulting in a 30\% increase in site performance metrics.",
        "Identified and resolved more than 40 critical bugs across frontend and backend systems, enhancing site stability which led to a 25\% decrease in customer-reported issues.",
        "Collaborated on database-driven functionalities that supported real-time data updates for multiple clients, increasing data retrieval efficiency by 20\% and ensuring scalable performance for high traffic volumes.",
      ],
    },
          {
      title: "Software Engineering Intern",
      company_name: "Nvestiv",
      icon: Nvestiv,
      iconBg: "white",
      scale: 1.35, // Add scale property here
      date: "March 2025 - August 2025",
      points: [
        "Developed an investment app with a responsive frontend UI with features such as interactive search and filtering and real-time data tables for investor insights, using React, TypeScript, JavaScript, and Tailwind CSS.",
        "Built an investor database tracking 200 investor profiles leveraging vector databases for semantic searching target efficiency by 30%.",
        "Improved and fine-tuned AI-driven investment agents for the company’s investment dashboard using Elixir, refining algorithm performance by 25\% and integrated financial data APIs into the investment app for real time financial insights.",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "University of Toronto - Shoichet Lab",
      icon: Uoft,
      scale: 1.8,
      iconBg: "white",
      date: "Febuary 2024 - March 2024",
      points: [
        "Conducted research in Regenerative Medicine, Tissue Engineering, and Drug Delivery at the Shoichet Lab, supporting breakthrough developments in developing non-invasive drug delivery systems.",
        "Engineered and optimized hydrogel-based drug delivery methods, performing controlled release studies and peptide synthesis to enhance therapeutic efficacy.",
        "Applied statistical analyses, data modeling, and developed machine learning models to identify material properties, predict drug behavior, and drive data-driven research insights.",
      ],
    }
  ];
  const experiences2 = [
    {
      title: "Board Member",
      company_name: "Career Chats",
      icon: CareerChats,
      iconBg: "white",
      scale: 1.5, // Add scale property here
      date: "July 2024 - Present",
      points: [
        "Led Career Chats' international expansion to over 300+ members across 20+ countries by launching school-wide chapters and leveraging expert interviews.",
        "Implemented strategic marketing solutions to overcome early credibility challenges, boosting organization growth and visibility by 70%.",
        "Managed and mentored a team of executives, guiding them in developing new chapters and enhancing organizational reach.",
        "Colloborated with fellow board members to develop impactful initiatives such as industry expert interviews, providing valuable career insights to high school students and driving global membership growth.",
      ],
    },
          {
      title: "Head of Finance",
      company_name: "JAMHacks",
      icon: Jamhacks,
      iconBg: "white",
      scale: 1.5, // Add scale property here
      date: "August 2024 - August 2025",
      points: [
        "Directed a team of three officers to raise $6,000+ in sponsorships and develop strong corporate partnerships, leveraging professionalcommunication and financial acumen to present value-driven proposals to potential partners",
        "Designed and implemented a comprehensive event budget, effectively allocating resources across key areas and reducingunnecessary expenses by 20%, supported by detailed financial reports ensuring fiscal transparency.",
        "Conducted data-driven analysis to inform cost allocations and troubleshoot event planning challenges, enhancing decision-making under tight deadlines.",
      ],
    },
    {
      title: "Director of Web Development",
      company_name: "Youth Surgeons Association",
      icon: Ysa,
      scale: 1.35,
      iconBg: "#9ec0c2",
      date: "July 2024 - August 2025",
      points: [
        "Utilized React, JavaScript, CSS, HTML, and Node to build and maintain user-friendly web pages, focusing on creating an engaging and responsive user experience.",
        "Oversaw a team of junior developers, providing mentorship and guidance to enhance their skills and ensure effective project execution.",
        "Led the team in adopting best practices and efficient coding techniques, driving project success and improving overall development workflows.",
        "Implemented SEO best practices, resulting in a 50% increase in organic search traffic and a 35% boost in overall website viewership within 3 months."
      ],
    },
    {
      title: "Chapter President",
      company_name: "DECA",
      icon: DECA,
      scale: 1.4,
      iconBg: "white",
      date: "June 2024 - June 2025",
      points: [
        "Directing a team of 12 executives to lead our delegation of over 300 students through various competitions and conferences. Lead my team in implementing workshops and training events which increased our chapter’s provincial qualifications by 40%.",
        "Implemented innovative training stratigies by colloborating with Presidents from across the world leading to our chapter achieving record breaking 99 Provincial qualifications --the highest number of provincial qualifications in our history.",
        "Developed and executed targeted marketing strategies to recruit new DECA members, resulting in a 25% increase in membership and heightened chapter visibility.",
      ],
    },
    {
      title: "Director of Finance",
      company_name: "FinTech Nexus",
      icon: FinTech,
      scale: 1.4,
      iconBg: "white",
      date: "June 2024 - December 2024",
      points: [
        "Led a team of 4 associates to secure partnerships with FinTech companies, successfully obtaining funding and industry support for a company-backed case competition",
        "Developed and executed financial strategies to secure sponsorships, manage budgets, and ensure sustainable funding for FinTech Nexus initiatives.",
        "Organized educational events and workshops, introducing students to key concepts in Financial Technology, including Quantitative Finance and career opportunities in the industry.",
      ],
    },
    {
      title: "Director of Marketing",
      company_name: "Movement For Change Youth Council",
      icon: MCYC,
      scale: 1.4,
      iconBg: "white",
      date: "August 2024 - June 2025",
      points: [
        "Led marketing campaigns for the Ambassador Program, developing strategic campaign plans, content outlines, and performance reports to drive engagement and outreach.",
        "Increased media impressions by 30%, reaching 3,595 impressions through targeted social media, email marketing, and integrated marketing efforts.",
        "Established cross-organizational collaborations, fostering partnerships to expand event reach and enhance community engagement.",
      ],
    },
    {
      title: "Founder | Tutor",
      company_name: "Tutorly",
      icon: Tutorly,
      scale: 2,
      iconBg: "white",
      date: "December 2021 - Present",
      points: [
        "Operating a tutoring business, overseeing a team of tutors, and managing client relationships. Collaborated with a team of educators to develop personalized lesson plans for each student leading to an average 15-20% improvement in students' academic performance.",
        "Developed and executed a marketing strategy, increasing the client base by 40% through targeted outreach and digital campaigns. Managed scheduling, client communication, and progress tracking to ensure efficient operations.",
        "Delivered tutoring services resulting in improvement on students performances on assignments and test scores, which were achieved through personalized lesson plans, tailored study strategies, and ongoing progress assessments.",
      ],
    },
    {
      title: "National Associate of Finance",
      company_name: "JEC Canada",
      icon: JEC,
      scale: 1.5,
      iconBg: "black",
      date: "August 2024 - August 2025",
      points: [
        "Contributed to identifying potential sponsors and cultivating relationships, helping to secure funding and support for JEC events through effective outreach and communication.",
        "Assisted in the preparation and oversight of budgets, closely monitoring expenditures and resource allocation to maintain financial efficiency.",
        "Played a key role in crafting and implementing financial strategies to support JEC Toronto’s goals, ensuring alignment with both short-term and long-term objectives.",
        "Colloborated with others in monitoring the organization’s financial status, analyzing financial reports, and making recommendations to enhance overall financial stability and sustainability.",
      ],
    },
    {
      title: "Project Management Team Member in the Data Science Committee",
      company_name: "STEM Fellowship",
      icon: STEMF,
      scale: 1.8,
      iconBg: "white",
      date: "Febuary 2024 - August 2025",
      points: [
        "Collaborated with Committee and team members for the execution of various Data Science Challenges and hackathons including the High School Big Data Challenge (HSBDC) and Inter-University Big Data Challenge (IUBDC).",
        "Managed, Organized and carried out tasks relating to the organization of these events including writing press releases, social media posts, workshops, Q & A Sessions, etc.",
        "Contacted industry experts, government officials, and organizations in order to facilitate workshops and guest speaker sessions during events & competitions.",
      ],
    },

  ];
    
  const educations = [
      {
      title: "University of Waterloo",
      school: "Bachelor of Engineering (B.Eng.), Software Engineering",
      icon: Waterloo,
      iconBg: "white",
      scale: 1.9, // Add scale property here
      date: "Sep 2025 - April 2030",
      points: [
        "Grade: 4.0 GPA",
        "President’s Scholarship of Distinction ($5,000), Software Engineering Scholarship ($4,000), and external scholarships totaling over $15,000",
        "Engineering Society Leadership Excellence Award ($1,000)",
        "Relevant Coursework: Calculus I/II, Linear Algebra, Software Engineering Principles, Programming Principles, Discrete Math, Digital / Linear Circuits, Data Abstraction",
        "Firmware Engineer at Uwaterloo Formula Electric Team",
        "Director of Web Development at the Engineering Society",
      ],
    },
    {
      title: "Castlebrooke Secondary School",
      school: "High School Diploma",
      icon: Castlebrooke,
      iconBg: "white",
      scale: 1.9, // Add scale property here
      date: "Sep 2021 - June 2025",
      points: [
        "Honour Standing, Top Ontario Scholar, 99\% Average (4.0 GPA)",
        "Activities & Societies: President/Founder of Math Club, President of DECA, President of Computer Science Club, Fundraising Director for STEM Club, Engineering Club, Vice - President of Physics Club, Robotics, Math Contests",
        "Honor Roll (Gr 9 - 12)",
        "Schulich Leader Nominee",
        "Scholarship Award Offers from various Universities and Institutions totaling to over \$220,000",
      ],
    },
    {
      title: "Quantum School For Young Students (QSYS)",
      school: "Enrichment Program",
      icon: Waterloo,
      iconBg: "white",
      scale: 1.9, // Add scale property here
      date: "August 2024",
      points: [
        "Engaged in a unique enrichment program that provided expert lectures, group discussions, problem solving, mentoring, and networking with world - leading researchers in quantum information science.",
        "Collaborated with fellow students and leading researchers in the field, enhancing my knowledge of cutting-edge quantum advancements and further fueling my passion for quantum physics.",
        "Engaged in problem-solving sessions and group discussions that allowed me to apply theoretical concepts to real-world quantum problems.",
      ],
    },
  ];
  
  
  
  
  const projects = [
        {
      name: "PosePerfect",
      description:
        "PosePerfect is a real-time fitness coaching app that uses OpenCV-based pose estimation in the browser to track body landmarks and joint angles, then applies generative AI to turn pose data and screenshots into clear, actionable exercise form feedback.",
      tags: [
        {
          name: "Computer Vision",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Generative AI",
          color: "pink-text-gradient",
        },
      ],
      image: Pose,
      source_code_link: "https://github.com/Akishai18",
    },
    {
      name: "Pineapple Pathways",
      description:
        "Pineapple Pathways integrates Flask, React, Cohere ReRank, and OpenAI APIs to deliver scholarship matching, AI-powered essay feedback, tuition prediction, and admissions statistics through a unified platform with clean, data-driven interfaces.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Python/Flask",
          color: "green-text-gradient",
        },
        {
          name: "Cohere ReRank",
          color: "pink-text-gradient",
        },
      ],
      image: Pineapple,
      source_code_link: "https://github.com/Akishai18/Pineapple-Pathways",
    },
      {
      name: "Home Price Predictor",
      description:
        "Developed a Random Forest-based predictive model using Scikit-learn, Pandas, and NumPy to forecast GTA home prices, integrated with a Flask backend and React frontend for interactive, data-driven real estate insights.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Python/Flask",
          color: "green-text-gradient",
        },
        {
          name: "machine-learning",
          color: "pink-text-gradient",
        },
      ],
      image: Home,
      source_code_link: "https://github.com/Akishai18/Home-Price-Prediction-App",
    },
          {
      name: "NutriScan",
      description:
        "NutriScan is a computer vision-powered food recognition app using OpenCV, Flask, vector databases, and RAG to deliver real-time nutritional insights with semantic search and a React-Tailwind frontend.",
      tags: [
        {
          name: "Retrieval-Augmented Generation",
          color: "blue-text-gradient",
        },
        {
          name: "Vector Databases",
          color: "green-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "pink-text-gradient",
        },
      ],
      image: nutriscan,
      source_code_link: "https://github.com/Akishai18/NutriScan",
    },
    {
      name: "Career Bot",
      description:
        "A project that supports career growth by offering AI-driven resume and cover letter optimization, personalized interview preparation, and tailored guidance to help you excel in your career journey.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Open CV",
          color: "green-text-gradient",
        },
        {
          name: "Gemini",
          color: "pink-text-gradient",
        },
      ],
      image: Career,
      source_code_link: "https://github.com/Akishai18/Career-Bot",
    },
      {
      name: "Heart Disease Predictor",
      description:
        "Developed a machine learning model with Scikit-learn, Pandas, and NumPy to predict heart disease risk, applying data preprocessing, feature engineering, and model optimization to deliver accurate, data-driven health insights.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NumPy/Pandas",
          color: "green-text-gradient",
        },
        {
          name: "SciKit Learn",
          color: "pink-text-gradient",
        },
      ],
      image: Heart,
      source_code_link: "https://github.com/Akishai18/Heart-Disease-Prediction-Project",
    },
    {
      name: "Mind Mental Health",
      description:
        "A React-based Mental Health platform designed to offer valuable insights on various mental health topics, combined with interactive and engaging resources to promote mental well-being and education.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: Mind,
      source_code_link: "https://github.com/Akishai18/Mind---Mental-Health-Site",
    },
    {
      name: "Quiz - Rigour",
      description:
        "Discover our dynamic quiz platform, packed with challenging questions across diverse topics and concepts, designed to test your knowledge and help you grow smarter with every attempt.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: Quiz,
      source_code_link: "https://github.com/Akishai18/Quiz-Rigour",
    },
    {
      name: "Tetris Reloaded",
      description:
        "A modern twist on the timeless classic Tetris, featuring fresh designs and exciting new power-ups. Dive into a reimagined version of the retro game with innovative features that elevate the experience.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: Tetris,
      source_code_link: "https://github.com/Akishai18/Tetris-Reloaded",
    },

  ];
  
  export { services, technologies, experiences, projects,educations, experiences2};
