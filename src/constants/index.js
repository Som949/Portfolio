import {
  python,
  mobile,
  backend,
  creator,
  web,
  gan_dapt,
  neuro_drive,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
  copernilabs_logo,
  kamel_tourki,
  nati_gezahegn,
  zakaria,
  CPP,
  CSS3,
  HTML5,
  Express,
  Github,
  javascript,
  React,
  nodejs,
  mongodb,
  tailwind,
  docker,
  Redis,
  ai_interview,
bank,
image_portfolio,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'MERN Stack Development',
    icon: web,
  },
  {
    title: 'Data Structures & Algorithms',
    icon: mobile,
  },
  {
    title: 'Problem Solving',
    icon: backend,
  },
  {
    title: 'Backend Development',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'C++',
    icon: CPP,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React.js',
    icon: React,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'Express.js',
    icon: Express,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'HTML5',
    icon: HTML5,
  },
  {
    name: 'CSS3',
    icon: CSS3,
  },
  {
    name: 'GitHub',
    icon: Github,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Redis',
    icon: Redis,
  },
];

const experiences = [
  {
    title: 'Machine Learning Intern',
    company_name: 'Microsoft',
    icon: microsoft,
    iconBg: '#383E56',
    date: 'June 2019 - July 2019',
    points: [
      'Completed a summer internship in Machine Learning using Python with A+ grade.',
      'Worked on analysis of machine learning algorithms for detecting abnormalities and electricity theft.',
      'Analyzed data from smart meters to train Linear, Quadratic Regression models to predict theft with a minimum RMSE value of 0.06.',
      'Participating in code reviews and providing feedback on machine learning code and implementations.',
    ],
  },
  {
    title: 'Robotics Workshop',
    company_name: 'Adani Institute of Infrastructure Engineering',
    icon: adani,
    iconBg: '#E6DEDD',
    date: 'Mar 2019 - Aug 2019',
    points: [
      'Leader of a research team that created and manipulated a robot through Arduino programming which cleans and paints the chimney of a thermal power plant.',
      'Conducting robotics workshop for junior students.',
      'Planning a monthly schedule of team operation.',
      'Building and assembling robots as part of hands-on sessions.',
    ],
  },
  {
    title: 'Data Science Intern',
    company_name: 'BN Technologies',
    icon: bn_software,
    iconBg: '#383E56',
    date: 'Mar 2021 - Aug 2021',
    points: [
      'Worked on Time Series-based Data Analysis for Taxi Service.',
      'Created analysis and visualisation tools to analyse the behaviour of our agents.',
      'Implemented a Recommendation Systems for our delivery application.',
      'Staying updated with the latest advancements and best practices in data science through self-learning and research.',
    ],
  },
  {
    title: 'AI Researcher For 5G',
    company_name: 'Ericsson',
    icon: ericsson,
    iconBg: '#E6DEDD',
    date: 'Mar 2023 - Sep 2023',
    points: [
      'Working on optimization of OFDM using Deep Learning.',
      'Currently working on cGAN and trying to develop an advanced algorithm for optimization of OFDM.',
      'Reviewed state of the art on OFDM 5G NR and developed a novel solution for the project task.',
      'Learning about 3GPP 5G NR standard through mentors, video lectures and meetings.',
    ],
  },
  {
    title: 'AI Engineer',
    company_name: 'Copernilabs',
    icon: copernilabs_logo,
    iconBg: '#E6DEDD',
    date: 'Jan 2024 - Present',
    points: [
      'Developed a real time license plate detection algorithm from live CCTV camera video feed.',
      'Integrating RAG with LlamaIndex to read texts from video.',
      'Working on object detection and tracking projects such as crowd counting, industry bottle fault detection ... etc.',
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: 'InterviewAI',
    description:
      'An AI-powered Resume Analyzer and Interview Preparation Platform that analyzes resumes, matches them with job descriptions, and generates personalized interview reports using Google Gemini AI.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: ai_interview,
    source_code_link: 'https://github.com/Som949/Interview-AI',
  },
  {
    name: 'UPI Banking System',
    description:
      'A secure digital wallet and banking platform with UPI integration, enabling account management, money transfers, transaction tracking, and OTP-based authentication.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Supabase',
        color: 'pink-text-gradient',
      },
    ],
    image: bank,
    source_code_link: 'https://github.com/Som949/Upi-Banking-System',
  },
  {
    name: 'Portfolio Website',
    description:
      'A modern 3D developer portfolio built with React and Three.js to showcase projects, technical skills, resume, and contact information through an interactive user experience.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: image_portfolio,
    source_code_link: 'https://github.com/Som949/Portfolio_Website',
  },
];

export { services, technologies, experiences, testimonials, projects };
