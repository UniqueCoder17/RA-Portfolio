import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/70 backdrop-blur-xl border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <h1 className="text-3xl font-black tracking-widest text-white">
          RAIHAN
        </h1>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0b1120]/95 backdrop-blur-xl border-t border-cyan-500/20">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;