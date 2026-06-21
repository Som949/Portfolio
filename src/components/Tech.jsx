// import { BallCanvas } from './canvas';
// import { SectionWrapper } from '../hoc';
// import { technologies } from '../constants';

// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map(technology => (
//         <div className="w-28 h-28 " key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };
import {
  HTML5,
  CSS3,
  javascript,
  React,
  nodejs,
  Express,
  mongodb,
  Redis,
  Github,
  docker,
  tailwind,
  CPP,
  python,
  material,
postman,
sql,
git,
vscode,
vercel,
} from '../assets';
// export default SectionWrapper(Tech);
import { SectionWrapper } from '../hoc';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: HTML5 },
      { name: "CSS", icon: CSS3 },
      { name: "JavaScript", icon: javascript },
      { name: "React.js", icon: React },
      { name: "Tailwind CSS", icon: tailwind },
      {name: "Material UI", icon: material}//
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: Express },
      {name: "REST APIs", icon: postman},//
      {name: "JWT Auth", icon: nodejs}
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: mongodb },
      { name: "Redis", icon: Redis },
      { name: "Supabase", icon: mongodb },
      {name: "MySQL", icon: sql},//
      {name: "PostgreSQL", icon: sql}//
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "C++", icon: CPP },
      { name: "JavaScript", icon: javascript },
      { name: "Python", icon: python },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git",    icon: git},//
      { name: "GitHub", icon: Github },
      { name: "Docker", icon: docker },
      { name: "VS Code", icon: vscode },//
      { name: "Postman", icon: postman },//
      { name: "Vercel", icon: vercel},//
      { name: "Render", icon: vercel}//
    ],
  },

  {
    title: "Core CS",
    skills: [
      { name: "DSA", icon: CPP },
      { name: "OOP" , icon: CPP},
      { name: "DBMS", icon: sql },//
      { name: "OS" , icon: vscode},//
      { name: "CN", icon: CPP},
    ],
  },
];

const Tech = () => {
  return (
    <section
  className="mt-20"
  style={{
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  }}
>
      <div className="text-center mb-16">
        <p className="text-secondary uppercase tracking-wider">
          My Technical Skills
        </p>

        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills
        </h2>

        <div className="w-24 h-1 bg-[#915eff] mx-auto mt-2 rounded-full"></div>

        <p className="text-secondary mt-6 text-lg">
          A collection of my technical expertise across frontend, backend,
          databases and core computer science concepts.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="
bg-[#120b2f]
rounded-[30px]
p-10
border border-[#3b1f7a]
shadow-[0_0_35px_rgba(139,92,246,0.15)]
"
          >
            <h3 className="
text-white
text-[42px]
font-black
text-center
mb-10
">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
  {category.skills.map((skill) => (
    <div
      key={skill.name}
      className="
flex items-center gap-3
px-5 py-3
rounded-full
border border-[#5b21b6]
bg-[#21143d]
min-w-[170px]
hover:border-[#915eff]
transition-all duration-300
"
    >
      {skill.icon && (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-7 h-7 object-contain"
        />
      )}

      <span className="text-gray-300 text-lg">
        {skill.name}
      </span>
    </div>
  ))}
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, '');
