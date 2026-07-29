import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Skills from "../component/Skills";
import Contact from "../component/Contact";
import LiveCodingBackground from "../component/LiveCodingBackground";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <main className="relative bg-[#050816] overflow-hidden">

      <LiveCodingBackground />

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Banner />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
};

export default Home;