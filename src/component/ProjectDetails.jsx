import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="
      absolute
      right-[-180px]
      top-1/2
      -translate-y-1/2
      w-[360px]
      rounded-3xl
      bg-[#0b1120]/90
      backdrop-blur-xl
      border
      border-cyan-500/20
      p-6"
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-5"
      />

      <h2 className="text-2xl font-bold text-white">
        {project.title}
      </h2>

      <p className="text-gray-400 mt-3">
        {project.description}
      </p>

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
            text-xs"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-info btn-sm"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm"
        >
          <FaExternalLinkAlt />
          Live
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;