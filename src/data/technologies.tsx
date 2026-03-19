import { Category } from "../types/tech"

import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiVercel, SiPostman } from "react-icons/si"

export const technologies: Category[] = [
  {
    title: "Frontend",
    techs: [
      {
        name: "React",
        icon: <FaReact size={26} />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={26} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={26} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={26} />,
      },
    ],
  },
  {
    title: "Backend",
    techs: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={26} />,
      },
      {
        name: "Express",
        icon: <SiExpress size={26} />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={26} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={26} />,
      },
    ],
  },
  {
    title: "DevOps & Tools",
    techs: [
      {
        name: "Docker",
        icon: <FaDocker size={26} />,
      },
      {
        name: "Git",
        icon: <FaGitAlt size={26} />,
      },
      {
        name: "Postman",
        icon: <SiPostman size={26} />,
      },
      {
        name: "Vercel",
        icon: <SiVercel size={26} />,
      },
    ],
  },
]