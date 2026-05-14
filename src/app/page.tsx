import { Footer } from "react-day-picker";
import Providers from "./provider";
import { AboutSection, ContactSection, HeroSection, Navbar, ProjectsSection, TechSection } from "../portfolio/components";



export default function Home() {
  return (
    <>
      <Providers>
        
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <TechSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />

      </Providers>

    </>
  )
}
