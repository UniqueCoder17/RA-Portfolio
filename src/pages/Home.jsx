import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Scene from "../three/Scene";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-[#050816] overflow-hidden">

      <Scene />

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>

    </main>
  );
};

export default Home;