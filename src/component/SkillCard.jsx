import { motion } from "framer-motion";

const SkillCard = ({ title, icon, description, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0b1120] p-6 cursor-pointer"
    >
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-white text-xl font-bold mb-3">
        {title}
      </h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: .3 }}
        className="text-gray-400 text-sm"
      >
        {description}
      </motion.p>

      <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 duration-300" />
    </motion.div>
  );
};

export default SkillCard;