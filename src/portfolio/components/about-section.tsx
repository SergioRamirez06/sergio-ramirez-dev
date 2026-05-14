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
              Soy Sergio Andrés Ramírez Acosta, desarrollador web de Villanueva, La Guajira, especializado 
              principalmente en desarrollo backend. Mi enfoque principal está en la construcción de APIs escalables, 
              seguras y eficientes con NestJS, complementando mi experiencia con Express.js, PostgreSQL, MongoDB, 
              Docker y comunicación en tiempo real mediante WebSockets para desarrollar soluciones robustas orientadas 
              a necesidades reales de negocio.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Me especializo en diseñar arquitecturas limpias, modulares y mantenibles, aplicando principios 
              como SOLID y buenas prácticas de desarrollo. Trabajo principalmente con el ecosistema backend de 
              Node.js, construyendo servicios bien estructurados, integraciones en tiempo real y soluciones de alto 
              rendimiento. Además, complemento mi perfil con React, Tailwind CSS y TanStack Query para integrar 
              interfaces modernas con servicios backend eficientes.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Me apasiona resolver problemas complejos mediante tecnología y seguir fortaleciendo mis conocimientos 
              en arquitectura backend, microservicios, automatización y sistemas distribuidos. Mi objetivo es aportar 
              valor construyendo software escalable, eficiente y de alta calidad.
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
