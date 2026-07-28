import { motion } from "framer-motion";
import codeSnippets from "../data/codeSnippets";


export default function LiveCodingBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {codeSnippets.map((code, i) => (
        <motion.pre
          key={i}
          initial={{
            y: "-20%",
            opacity: 0,
          }}
          animate={{
            y: ["-20%", "120%"],
            opacity: [0.05, 0.10, 0.15, 0],
          }}
          transition={{
            duration: 25 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
          className="
            absolute
            font-mono
            text-cyan-400
            text-md
            leading-6
            whitespace-pre-wrap
          "
          style={{
            left: `${5 + i * 10}%`,
            width: "250px",
          }}
        >
          {code}
        </motion.pre>
      ))}

      <div className="
        absolute inset-0 
        bg-gradient-to-b 
        from-[#050816]/20 
        via-[#050816]/50 
        to-[#050816]
      "/>

    </div>
  );
}