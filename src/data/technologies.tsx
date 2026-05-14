import { Category } from "../portfolio/types/tech"

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiPostman,
  SiNestjs,
  SiPrisma,
  SiRender,
  SiTypeorm,
  SiGithub

} from "react-icons/si"

import { TbBrandFramerMotion } from "react-icons/tb"
import { RiReactjsLine } from "react-icons/ri"

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
      {
        name: "TanStack Query",
        icon: <RiReactjsLine size={26} />,
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion size={26} />,
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
        name: "NestJS",
        icon: <SiNestjs size={26} />,
      },
      {
        name: "Express",
        icon: <SiExpress size={26} />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma size={26} />,
      },
      {
        name: "TypeORM",
        icon: <SiTypeorm size={26} />,
      },
      {
        name: "WebSockets",
        icon: <RiReactjsLine size={26} />,
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
        name: "GitHub",
        icon: <SiGithub size={26} />,
      },
      {
        name: "Postman",
        icon: <SiPostman size={26} />,
      },
      {
        name: "Vercel",
        icon: <SiVercel size={26} />,
      },
      {
        name: "Render",
        icon: <SiRender size={26} />,
      },
    ],
  },
]