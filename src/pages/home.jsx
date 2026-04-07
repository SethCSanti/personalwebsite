import PageHero from "../components/PageHero"
import {
  SiReact, SiMongodb, SiHtml5, SiCss, SiJavascript
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { FiPackage, FiLock, FiCode } from "react-icons/fi"
import { BsFiletypeJson } from "react-icons/bs"

const techIconMap = {
  "React":      <SiReact />,
  "MongoDB":    <SiMongodb />,
  "WebSocket":  <FiCode />,
  "HTML":       <SiHtml5 />,
  "CSS":        <SiCss />,
  "JavaScript": <SiJavascript />,
  "JSON":       <BsFiletypeJson />,
  "API":        <TbApi />,
  "JSX":        <SiReact />,
}

function ProjectIcon({ icon }) {
  return (
    <div style={{
      width: "52px", height: "52px", borderRadius: "14px",
      background: "linear-gradient(135deg, rgba(107,184,176,0.15), rgba(217,125,38,0.1))",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "26px", marginBottom: "18px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "50%",
        background: "rgba(255,255,255,0.06)", borderRadius: "14px 14px 0 0",
        pointerEvents: "none",
      }} />
      {icon}
    </div>
  )
}

function ProjectCard({ title, description, link, tech = [], icon, wip = false }) {
  return (
    <div className="glass-card" style={{ padding: "28px", display: "flex", flexDirection: "column" }}>
      <ProjectIcon icon={icon} />
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
        <h3 style={{ margin: 0, color: "var(--text)", fontSize: "1.05rem" }}>{title}</h3>
        {wip && (
          <span style={{
            fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", padding: "2px 8px", borderRadius: "999px",
            background: "rgba(217,125,38,0.15)", border: "1px solid rgba(217,125,38,0.4)",
            color: "var(--storm-orange)", whiteSpace: "nowrap",
          }}>In Progress</span>
        )}
      </div>
      <p style={{ margin: "0 0 20px", fontSize: "0.88rem", lineHeight: 1.65, color: "var(--text-muted)", flex: 1 }}>
        {description}
      </p>
      {tech.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "20px" }}>
          {tech.map((t) => (
            <span key={t} style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.04em",
              padding: "3px 10px", borderRadius: "999px",
              background: "rgba(107,184,176,0.08)", border: "1px solid rgba(107,184,176,0.25)",
              color: "var(--storm-teal)",
            }}>
              <span style={{ fontSize: "0.8rem", display: "flex" }}>{techIconMap[t]}</span>
              {t}
            </span>
          ))}
        </div>
      )}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontSize: "0.82rem", fontWeight: 500, color: "var(--storm-teal)",
          borderBottom: "1px solid rgba(107,184,176,0.3)", paddingBottom: "2px",
          width: "fit-content",
        }}>
          View on GitHub →
        </a>
      ) : (
        <span style={{ fontSize: "0.82rem", color: "var(--text-faint)", fontStyle: "italic" }}>
          Coming soon
        </span>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div>

      <PageHero
        image="/hero-cs.jpg"
        label="Computer Science Portfolio"
        title="Seth Conner"
        subtitle="CS student focused on robotics, systems design, and building meaningful software."
      >
        <a href="/resume.pdf" download="SethConner_Resume.pdf">
          <button>↓ &nbsp;Download Resume</button>
        </a>
      </PageHero>

      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <p className="section-label" style={{ color: "var(--storm-teal)" }}>Selected Work</p>
          <h2 style={{ margin: "0 0 48px" }}>Projects</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}>
            <ProjectCard
              title="Loadmap"
              icon={<span>🗺️</span>}
              description="A full-stack task manager web app with real-time collaboration via WebSockets, persistent MongoDB storage, and a responsive React UI."
              link="https://github.com/SethCSanti"
              tech={["HTML", "CSS", "JSX", "JavaScript", "JSON", "API", "React", "WebSocket", "MongoDB"]}
            />
            <ProjectCard
              title="Browser Extension"
              icon={<FiPackage style={{ color: "var(--storm-teal)" }} />}
              description="A browser extension currently in development. Something good is coming — stay tuned."
              link={null}
              tech={["JavaScript"]}
              wip={true}
            />
            <ProjectCard
              title="TBD Project"
              icon={<FiLock style={{ color: "var(--text-faint)" }} />}
              description="Next project in the pipeline. Details to come."
              link={null}
              tech={[]}
            />
            <ProjectCard
              title="TBD Project"
              icon={<FiLock style={{ color: "var(--text-faint)" }} />}
              description="Next project in the pipeline. Details to come."
              link={null}
              tech={[]}
            />
          </div>
        </div>
      </section>

    </div>
  )
}