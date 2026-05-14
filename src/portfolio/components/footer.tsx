import { Github, Linkedin, Mail, Heart } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#inicio"
              className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {"<CD />"}
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              {"Hecho con"} <Heart className="size-3 text-primary fill-primary" /> {"y mucho cafe"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:carlos@dev.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border transition-all duration-300"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            {`© ${currentYear} Carlos Dev. Todos los derechos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
