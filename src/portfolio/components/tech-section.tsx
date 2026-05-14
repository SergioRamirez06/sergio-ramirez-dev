"use client"
import { useRef } from "react"
import { technologies } from "@/src/data/technologies"
import { motion, useInView } from "framer-motion"



export const TechSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tecnologias" className="relative py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Stack tecnologico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Tecnologias que{" "}
            <span className="text-primary">domino</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Herramientas y tecnologias con las que construyo experiencias
            digitales de alto rendimiento.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {technologies.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + catIndex * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cat.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + catIndex * 0.15 + techIndex * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:bg-secondary/50 transition-all duration-500 cursor-default"
                  >
                    <div className="text-muted-foreground group-hover:text-primary transition-colors duration-500">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
