import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import LiveCodingBackground from "../component/LiveCodingBackground";

const Home = () => {
  return (
    <main className="bg-[#050816] text-white">

      <LiveCodingBackground />

      <Navbar />

      <Hero />

      <Banner />
<br />
<br />
<br />
<br />
      <Skills />
<br />
<br />
<br />
<br />
      <Projects />

      <Contact />

    </main>
  );
};

export default Home;