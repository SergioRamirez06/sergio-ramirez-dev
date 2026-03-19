"use client"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"


export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 flex flex-col items-center text-center gap-8">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="size-36 md:size-44 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
            <img
              src='/images/SR.png'
              alt="Foto de perfil de Sergio Dev"
              width={176}
              height={176}
              className="object-cover object-[center_20%] size-full"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 size-8 rounded-full bg-primary flex items-center justify-center">
            <span className="size-3 rounded-full bg-primary-foreground animate-pulse" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
            Hola, soy{" "}
            <span className="text-primary">Sergio Ramirez</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Desarrollador Fullstack enfocado en crear experiencias digitales
            modernas, escalables y de alto impacto.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full px-8 gap-2">
            <a href="#proyectos">
              Ver proyectos
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#contacto">Contacto</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-3 pt-4"
        >
          {[
            { icon: Github, href: "https://github.com/SergioRamirez06/SergioRamirez06", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sergio-andres-ram%C3%ADrez-acosta-85849b298/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sergio200206mayo@gmail.com?subject=Contacto desde portafolio&body=Hola Sergio,", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="size-10 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border transition-all duration-300"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
