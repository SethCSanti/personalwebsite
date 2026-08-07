import { FiDroplet, FiGlobe, FiGrid, FiServer, FiUsers } from "react-icons/fi"
import PageHero from "../components/PageHero"
import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "Orbital",
    description: "A real-time space exploration dashboard that brings live data from NASA, The Space Devs, and other sources into one interactive experience.",
    link: "https://github.com/SethCSanti/Orbital",
    tech: [".NET 10", "C#", "Next.js", "TypeScript"],
    icon: <FiGlobe />,
  },
  {
    title: "Self-Watering Plant System",
    description: "An ESP32 irrigation system that reads capacitive soil-moisture data and automatically controls a water pump through threshold-based feedback.",
    link: "https://github.com/SethCSanti/SelfWateringPlantSystem",
    tech: ["ESP32", "C++", "CMake", "Embedded Systems"],
    icon: <FiDroplet />,
  },
  {
    title: "Attendance HackDay",
    description: "A classroom management application for tracking attendance, assigning work, and monitoring student progress through a focused teacher interface.",
    link: "https://github.com/PeterGrunig/Attendance-HackDay",
    tech: ["Go", "PostgreSQL", "HTML", "CSS"],
    icon: <FiUsers />,
  },
  {
    title: "Chess",
    description: "A full-stack chess application with a networked client-server architecture, user and game management, and shared modules for rules and game state.",
    link: "https://github.com/SethCSanti/chess",
    tech: ["Java", "Client-Server", "HTML", "JavaScript"],
    icon: <FiGrid />,
  },
  {
    title: "Raspberry Pi Media Server",
    description: "A self-hosted media server for organizing and streaming movies, music, videos, and audiobooks, with secure remote access and automated organization.",
    link: "https://github.com/SethCSanti/Raspberry-Pi-Media-Server",
    tech: ["Raspberry Pi", "Plex", "Tailscale", "Linux"],
    icon: <FiServer />,
  },
]

export default function Home() {
  return (
    <div>
      <PageHero
        image={`${import.meta.env.BASE_URL}hero-cs.jpg`}
        label="Computer Science Portfolio"
        title="Seth Conner"
        subtitle="CS student focused on robotics, systems design, and building meaningful software."
      >
        <a className="button" href={`${import.meta.env.BASE_URL}resume.pdf`} download="SethConner_Resume.pdf">
          Download résumé
        </a>
      </PageHero>

      <section className="section">
        <div className="container">
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard {...project} key={project.title} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
