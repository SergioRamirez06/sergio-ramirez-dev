"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const formFields = [
  { id: "name", label: "Nombre", placeholder: "Tu nombre", type: "text" },
  { id: "email", label: "Email", placeholder: "tu@email.com", type: "email" },
  { id: "subject", label: "Asunto", placeholder: "Asunto del mensaje", type: "text" },
  { id: "message", label: "Mensaje", placeholder: "Cuéntame sobre tu proyecto...", type: "textarea", rows: 5 },
];

export const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {"Hablemos de tu "}
            <span className="text-primary">proximo proyecto</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            {"Estoy disponible para freelance, colaboraciones y oportunidades. No dudes en escribirme."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "sergio200206mayo@gmail.com",
                  href: "mailto:carlos@devmail.com",
                },
                {
                  icon: MapPin,
                  label: "Ubicacion",
                  value: "Ciudad de Colombia, CO",
                  href: "#",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:bg-secondary/50 transition-all duration-500"
                >
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 mt-1" />
                </a>
              ))}
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-card">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Tambien puedes encontrarme en "}
                <a
                  href="https://github.com/SergioRamirez06/SergioRamirez06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                {" y "}
                <a
                  href="https://www.linkedin.com/in/sergio-andres-ram%C3%ADrez-acosta-85849b298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                {". Respondo en menos de 24 horas."}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-border/50 bg-card"
            >
              {formFields.map(({ id, label, placeholder, type, rows }) => (
                <div key={id} className={`flex flex-col gap-2 ${type !== "textarea" && "sm:col-span-1"}`}>
                  <Label htmlFor={id} className="text-sm text-muted-foreground">{label}</Label>
                  {type === "textarea" ? (
                    <Textarea
                      id={id}
                      placeholder={placeholder}
                      rows={rows}
                      required
                      className="bg-background border-border/50 focus-visible:border-primary/50 rounded-lg resize-none"
                    />
                  ) : (
                    <Input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      required
                      className="bg-background border-border/50 focus-visible:border-primary/50 rounded-lg"
                    />
                  )}
                </div>
              ))}

              <Button
                type="submit"
                size="lg"
                className="rounded-full gap-2 self-start px-8"
                disabled={submitted}
              >
                {submitted ? "Mensaje enviado" : <>Enviar mensaje <Send className="size-4" /></>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
