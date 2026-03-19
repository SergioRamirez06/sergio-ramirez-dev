"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useQuery } from "@tanstack/react-query"
import { getProjects } from "@/src/actions/get-projects"

export const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  return (
    <section id="proyectos" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Trabajo{" "}
            <span className="text-primary">destacado</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Una seleccion de proyectos que reflejan mi pasion por construir
            productos digitales de alta calidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects?.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10 flex flex-col gap-5 flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${project.title}`}
                      className="size-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Demo de ${project.title}`}
                      className="size-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <Badge
                      key={`${project.id}-${index}`}
                      variant="secondary"
                      className="text-xs font-mono rounded-full px-3 py-1 bg-secondary/80 text-muted-foreground border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
