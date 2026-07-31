import { motion } from "framer-motion";

const OrbitNode = ({ project, active, onClick }) => {
  const Icon = project.icon;

  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${project.x}px)`,
        top: `calc(50% + ${project.y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => onClick(project)}
    >
      {/* Only Icon Animate */}
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        transition={{ duration: 0.25 }}
        className="flex flex-col items-center"
      >
        <div
          className="w-28 h-28 rounded-full border-2 flex items-center justify-center cursor-pointer"
          style={{
            borderColor: project.color,
            boxShadow: active
              ? `0 0 45px ${project.color}`
              : `0 0 20px ${project.color}`,
          }}
        >
          <Icon
            size={40}
            color={project.color}
          />
        </div>

        <h3 className="mt-4 text-white font-semibold text-center whitespace-nowrap">
          {project.title}
        </h3>
      </motion.div>
    </div>
  );
};

export default OrbitNode;