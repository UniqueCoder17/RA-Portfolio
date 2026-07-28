import { motion } from "framer-motion";
import React from "react";
const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >

          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Hi, I'm <br />
            <span className="text-cyan-400">
              Raihan
            </span>
          </h1>

          <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-gray-300">
            Full Stack Web Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            I build modern, fast, responsive and interactive web
            applications using React, Node.js, MongoDB and modern
            frontend technologies.
          </p>

          <div className="flex gap-10 mt-10">

            <button className="btn btn-outline btn-primary">
              Hire Me
            </button>

           <button className="btn btn-dash btn-accent">
              Download CV
            </button>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;