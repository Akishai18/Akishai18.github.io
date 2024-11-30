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
    nodejs,
    C,
    GoogleC,
    Arduino,
    Excell,
    flask,
    python,
    git,
    Uoft,
    JEC,
    DECA,
    STEMF,
    CareerChats,
    Waterloo,
    Castlebrooke,
    Ysa,
    Home,
    Mind,
    Quiz,
    Pineapple,
    Heart,
    Career,
    Tetris,
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
      title: "Director of Web Development",
      company_name: "Youth Surgeons Association",
      icon: Ysa,
      scale: 1.35,
      iconBg: "#9ec0c2",
      date: "July 2024 - Present",
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
      date: "June 2024 - Present",
      points: [
        "Created workshops and resources for 300+ students, which increased our chapter’s provincial qualifications by 40%.",
        "Implemented one-on-one training sessions as Training Officer, leading to our chapter achieving the highest number of provincial qualifications in its history.",
        "Organized and led a summer fundraiser by selling snacks, raising significant funds to support our DECA delegation for the upcoming year.",
        "Developed and executed targeted marketing strategies to recruit new DECA members, resulting in a 25% increase in membership and heightened chapter visibility.",
      ],
    },
    {
      title: "National Associate of Finance",
      company_name: "JEC Canada",
      icon: JEC,
      scale: 1.5,
      iconBg: "black",
      date: "August 2024 - Present",
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
      date: "Febuary 2024 - Present",
      points: [
        "Collaborated with Committee and team members for the execution of various Data Science Challenges including the High School Big Data Challenge (HSBDC) and Inter-University Big Data Challenge (IUBDC).",
        "Managed, Organized and carried out tasks relating to the organization of these events including writing press releases, social media posts, workshops, Q & A Sessions, etc.",
        "Contacted industry experts, government officials, and organizations in order to facilitate workshops and guest speaker sessions during events & competitions.",
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
        "Learned & Contributed to interdisciplinary research focused on Regenerative Medicine, TissueEngineering, and Drug Delivery.",
        "Collaborated with a Post - Doctoral Fellow in the practical aspects of scientific exploration, including the intricate processes of hydrogel formation, in-depth controlled release studies, and the synthesis of peptides.",
        "Applied innovative design criteria as a foundation for problem-solving, contributing to the lab's pursuit of groundbreaking solutions and analyzed produced data utilizing metrics such as calibration curves.",
      ],
    },
  ];

    
  const educations = [
    {
      title: "Castlebrooke Secondary School",
      school: "High School Diploma",
      icon: Castlebrooke,
      iconBg: "white",
      scale: 1.9, // Add scale property here
      date: "Sep 2021 - Present",
      points: [
        "Rising senior with a 97.6% academic average, actively involved in my school community through leadership roles in various clubs, events, and organizations.",
        "Activities & Societies: President/Founder of Math Club, President of DECA Chapter, President of Computer Science Club, Fundraising Director for STEM Club, Engineering Club, Physics Club.",
        "Honor Roll (Gr 9 - 11)",
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
      name: "Home Price Predictor",
      description:
        "A machine learning model that forecasts future home prices across various property types and locations in the Greater Toronto Area (GTA), offering data-driven insights for real estate trends.",
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
      name: "Pineapple Pathways",
      description:
        "Pineapple Pathways provides personalized guidance, scholarship matching, and expert tips for applications, interviews, and essays, helping you confidently achieve your academic goals.",
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
          name: "Cohere API",
          color: "pink-text-gradient",
        },
      ],
      image: Pineapple,
      source_code_link: "https://github.com/Akishai18/Pineapple-Pathways",
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
      name: "Heart Disease Predictor",
      description:
        "An advanced application powered by machine learning that predicts a user's risk of heart disease, enabling proactive health management.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
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
  
  export { services, technologies, experiences, projects,educations };
