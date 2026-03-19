import { Footer } from "react-day-picker";
import { AboutSection, ContactSection, HeroSection, Navbar, ProjectsSection, TechSection } from "../components/portfolio";
import Providers from "./provider";



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
