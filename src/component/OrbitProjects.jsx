import { useState } from "react";
import { projects } from "../data/projects";
import OrbitNode from "./OrbitNode";
import OrbitLines from "./OrbitLines";
import ProjectDetails from "./ProjectDetails";

const OrbitProjects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="relative w-full h-[900px] flex items-center justify-center">

      {/* Orbit Rings */}
      <div className="absolute w-[650px] h-[650px] rounded-full border border-cyan-500/20" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/20" />
      <div className="absolute w-[350px] h-[350px] rounded-full border border-cyan-500/20" />

      {/* Animated Lines */}
      <OrbitLines />

      {/* Center Glow */}
      <div className="absolute w-52 h-52 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Center Circle */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-36
          h-36
          rounded-full
          border-2
          border-purple-500
          flex
          items-center
          justify-center
          shadow-[0_0_60px_#a855f7]
        "
      >
        <div className="w-24 h-24 rounded-full bg-[#090d18] flex items-center justify-center">
          <span className="text-5xl">💻</span>
        </div>

        <p className="absolute -bottom-12 text-white font-bold text-xl">
          Portfolio
        </p>
      </div>

      {/* Project Nodes */}
      {projects.map((project) => (
        <OrbitNode
          key={project.id}
          project={project}
          active={activeProject.id === project.id}
          onClick={setActiveProject}
        />
      ))}

      {/* Project Details */}
      <ProjectDetails project={activeProject} />

    </div>
  );
};

export default OrbitProjects;