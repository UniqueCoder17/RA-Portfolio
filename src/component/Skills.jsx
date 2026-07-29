import SkillCard from "./SkillCard";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiThreedotjs,
  SiFigma,
  SiPostman,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  {
    title: "React",
    icon: <FaReact className="text-cyan-400" />,
    description: "Build modern SPA using React Hooks and Components."
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400" />,
    description: "Utility-first responsive UI design."
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript className="text-yellow-400" />,
    description: "ES6+, DOM, Async Programming."
  },
  {
    title: "Three.js",
    icon: <SiThreedotjs className="text-white" />,
    description: "Interactive 3D websites."
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    description: "Backend API Development."
  },
  {
    title: "Express",
    icon: <SiExpress className="text-white" />,
    description: "REST API using Express."
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    description: "NoSQL Database."
  },
  {
    title: "Firebase",
    icon: <SiFirebase className="text-orange-400" />,
    description: "Authentication & Hosting."
  },
  {
    title: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    description: "Version Control."
  },
  {
    title: "GitHub",
    icon: <FaGithub className="text-white" />,
    description: "Repository Management."
  },
  {
    title: "Figma",
    icon: <SiFigma className="text-pink-500" />,
    description: "UI Design."
  },
  {
    title: "Postman",
    icon: <SiPostman className="text-orange-400" />,
    description: "API Testing."
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#050816] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-white mb-16">
          MY <span className="text-cyan-400">SKILLS</span>
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
              delay={index * .08}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;