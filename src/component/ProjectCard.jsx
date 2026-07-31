import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
      group
      relative
      h-[320px]
      rounded-3xl
      overflow-hidden
      border
      border-cyan-500/20
      bg-[#0b1120]
      cursor-pointer
      "
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#050816]
        via-[#050816]/70
        to-transparent
        "
      />

      {/* Default Icon */}
      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        transition-all
        duration-500
        group-hover:opacity-0
        "
      >
        <div className="text-7xl">
          {project.icon}
        </div>
      </div>

      {/* Hover Content */}
      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        p-6
        translate-y-24
        opacity-0
        transition-all
        duration-500
        group-hover:translate-y-0
        group-hover:opacity-100
        "
      >
        <h2 className="text-2xl font-bold text-white">
          {project.title}
        </h2>

        <p className="text-gray-300 mt-3 text-sm leading-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
              px-3
              py-1
              rounded-full
              bg-cyan-500/20
              text-cyan-300
              text-xs
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline btn-info"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
        </div>
      </div>

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        duration-500
        bg-cyan-500/10
        pointer-events-none
        "
      />
    </div>
  );
};

export default ProjectCard;