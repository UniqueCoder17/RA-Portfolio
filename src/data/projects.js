import gadget from "../assets/gadget-heaven.png";
import portfolio from "../assets/portfolio-3d.png";
import student from "../assets/student-management.png";
import blog from "../assets/blog.avif";

import {
  FaShoppingCart,
  FaLaptopCode,
  FaUserGraduate,
  FaCode,
} from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Gadget Heaven",
    icon: FaShoppingCart,
    color: "#22d3ee",
    image: gadget,
    x: 0,
    y: -250,
    description: "Modern E-Commerce Website",
    tech: ["React", "Tailwind", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Portfolio 3D",
    icon: FaLaptopCode,
    color: "#a855f7",
    image: portfolio,
    x: 250,
    y: 0,
    description: "3D Portfolio using React Three Fiber",
    tech: ["React", "Three.js", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Student Management",
    icon: FaUserGraduate,
    color: "#22c55e",
    image: student,
    x: 0,
    y: 250,
    description: "Full Stack CRUD System",
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Developer Blog",
    icon: FaCode,
    color: "#f97316",
    image: blog,
    x: -250,
    y: 0,
    description: "Responsive Blog Platform",
    tech: ["React", "Tailwind", "MongoDB"],
    github: "#",
    live: "#",
  },
];