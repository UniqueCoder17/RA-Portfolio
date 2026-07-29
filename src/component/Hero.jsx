import { motion } from "framer-motion";
import Scene from "../three/Scene";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto w-full px-8 lg:px-16">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[520px]"
          >
            <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
              Welcome To My Portfolio
            </p>

            <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
              Hi, I'm <br />
              <span className="text-cyan-400">
                Raihan
              </span>
            </h1>

            <h2 className="mt-5 text-3xl font-semibold text-gray-300">
              Full Stack Web Developer
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              I build modern, fast, responsive and interactive web
              applications using React, Node.js, MongoDB,
              Three.js and modern frontend technologies.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="btn btn-primary">
                Hire Me
              </button>

              <button className="btn btn-outline btn-info">
                Download CV
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative h-[760px] w-full">
            <Scene />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;