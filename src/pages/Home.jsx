import LiveCodingBackground from "../component/LiveCodingBackground";
import Hero from "../component/Hero";
import Scene from "../three/Scene";
import Navbar from "../component/Navbar";`
import Skills from "../component/Skills";`

const Home = () => {
  return (
    <main className="relative min-h-screen bg-[#050816] overflow-hidden">
      {/* Background Coding */}
      <LiveCodingBackground />

      {/* 3D Laptop + Ring */}
      <Scene />

      {/* UI */}
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;