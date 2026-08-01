import OrbitProjects from "./OrbitProjects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[5px]">
            Portfolio
          </p>

          <h2 className="text-5xl font-black text-white mt-3">
            MY <span className="text-cyan-400">PROJECTS</span>
          </h2>

          <p className="text-gray-400 text-center mt-5 max-w-2xl">
            Here are some of my favorite projects built using React,
            Node.js, MongoDB, Firebase and Three.js.
          </p>

        </div>

        {/* Orbit Projects */}
        <OrbitProjects />

      </div>
    </section>
  );
};

export default Projects;