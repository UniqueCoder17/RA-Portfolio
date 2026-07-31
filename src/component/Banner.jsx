import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl animate-pulse"></div>

              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.4,
                }}
                src="/raihan.jpg"
                alt="Raihan"
                className="relative w-[320px] rounded-3xl border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,.35)]"
              />

            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
              About Me
            </p>

            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
              Hello,
              <br />
              I'm <span className="text-cyan-400">R A Raihan</span>
            </h2>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              I'm building my career in{" "}
              <span className="text-cyan-400 font-semibold">
                Full Stack Web Development
              </span>{" "}
              and Computer Science & Technology.
            </p>

            <p className="mt-5 text-gray-400 leading-8">
              I specialize in React, Tailwind CSS, JavaScript, Node.js,
              MongoDB and modern frontend technologies. I enjoy building
              interactive, responsive and high-performance web applications
              with clean UI/UX and scalable architecture.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "React",
                "JavaScript",
                "Tailwind",
                "Node.js",
                "MongoDB",
                "Three.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                >
                  {skill}
                </span>
              ))}

            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="btn btn-outline btn-info"
            >
              More About Me
              <FaArrowRight />
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Banner;