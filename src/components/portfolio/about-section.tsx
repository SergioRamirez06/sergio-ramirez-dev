"use client"

import { highlights } from "@/src/data/highligts"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"



export const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre-mi" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Sobre mi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Transformando ideas en{" "}
            <span className="text-primary">productos digitales</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Soy Sergio Andrés Ramírez Acosta, un desarrollador web apasionado de Villanueva, 
              La Guajira, en desarrollo backend y frontend. Me especializo en Node.js, React, PostgreSQL, 
              MongoDB y Docker, creando aplicaciones modernas, escalables y eficientes que cumplen con las
               necesidades reales de los usuarios y las empresas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Me encanta trabajar en proyectos que combinan tecnologías modernas y buenas prácticas
              de desarrollo, aplicando principios como SOLID, arquitectura limpia.
              Además, disfruto integrar herramientas como Tailwind CSS, Framer Motion y TanStack Query
              para mejorar la experiencia de usuario y la eficiencia del desarrollo frontend.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fuera del código, soy una persona curiosa y organizada, siempre buscando aprender nuevas
              tecnologías y mejorar mis habilidades. Me interesa especialmente la automatización y el
              desarrollo full-stack, con el objetivo de entregar soluciones de alta calidad y aportar valor
              a cada proyecto en el que participo.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {highlights.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card hover:bg-secondary/50 hover:border-primary/20 transition-all duration-500"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
