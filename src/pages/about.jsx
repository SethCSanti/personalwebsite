import { useEffect, useState } from "react"
import { useReveal } from "../hooks/useReveal"
import PageHero from "../components/PageHero"
import {
  SiPython, SiJavascript, SiReact, SiMongodb,
  SiHtml5, SiCss, SiGit, SiNodedotjs, SiVite
} from "react-icons/si"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"

const skills = {
  "Languages": [
    { name: "Python",      icon: <SiPython /> },
    { name: "JavaScript",  icon: <SiJavascript /> },
    { name: "HTML",        icon: <SiHtml5 /> },
    { name: "CSS",         icon: <SiCss /> },
  ],
  "Frameworks & Libraries": [
    { name: "React",       icon: <SiReact /> },
    { name: "Node.js",     icon: <SiNodedotjs /> },
    { name: "Vite",        icon: <SiVite /> },
  ],
  "Tools & Databases": [
    { name: "Git",         icon: <SiGit /> },
    { name: "MongoDB",     icon: <SiMongodb /> },
  ],
}

const CACHE_KEY = "gh_stats_cache"
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000 // 7 days in ms

function GitHubStats({ username }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check cache first
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY))
      if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        setStats(cached.data)
        setLoading(false)
        return
      }
    } catch (_) {}

    // Fetch fresh
    fetch(`https://api.github.com/users/${username}`)
      .then(r => r.json())
      .then(data => {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
        setStats(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  const items = [
    { label: "Public Repos", value: stats?.public_repos },
    { label: "Followers",    value: stats?.followers },
    { label: "Following",    value: stats?.following },
  ]

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {items.map(({ label, value }) => (
        <div key={label} className="glass-card" style={{
          padding: "20px 28px", textAlign: "center", flex: "1", minWidth: "120px"
        }}>
          {loading ? (
            <div className="skeleton" style={{ height: "36px", width: "60px", margin: "0 auto 8px" }} />
          ) : (
            <div style={{
              fontSize: "1.8rem", fontWeight: 700,
              fontFamily: "'Playfair Display', serif",
              color: "var(--storm-teal)", lineHeight: 1, marginBottom: "6px",
            }}>
              {value ?? "—"}
            </div>
          )}
          <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-faint)" }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  const bioRef     = useReveal()
  const skillsRef  = useReveal()
  const githubRef  = useReveal()
  const contactRef = useReveal()

  return (
    <div>

      <PageHero
        image="/hero-about.jpg"
        label="About Me"
        title="Seth Conner"
        subtitle="CS student, systems thinker, and fiction writer. I build software that solves real problems and write stories that explore impossible ones."
      />

      {/* Bio */}
      <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div ref={bioRef} className="reveal" style={{
            display: "flex", gap: "56px", alignItems: "flex-start", flexWrap: "wrap",
          }}>

            {/* Photo placeholder — replace with <img> once you have your photo */}
            <div style={{ flexShrink: 0 }}>
              <div style={{
                width: "180px", height: "220px", borderRadius: "12px", overflow: "hidden",
                border: "1px solid var(--border)", boxShadow: "var(--card-shadow)",
                background: "linear-gradient(160deg, rgba(107,184,176,0.2), rgba(217,125,38,0.15))",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "10px",
                position: "relative",
              }}>
                {/*
                  ↓ Replace this block with your photo:
                  <img src="/your-photo.jpg" alt="Seth Conner"
                    style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "45%",
                  background: "rgba(255,255,255,0.06)", borderRadius: "12px 12px 50% 50%",
                  pointerEvents: "none",
                }} />
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.35 }}>
                  <circle cx="24" cy="18" r="9" stroke="white" strokeWidth="1.5"/>
                  <path d="M6 42c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                  Photo<br/>coming soon
                </span>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: "280px" }}>
              <p style={{ fontSize: "1.05rem", marginBottom: "16px" }}>
                I'm a computer science student focused on robotics, systems design,
                and full-stack development. I'm drawn to projects where the problem
                is interesting and the craft matters.
              </p>
              <p style={{ fontSize: "1.05rem", marginBottom: "16px" }}>
                Outside of software, I write long-form fantasy fiction. My current
                novel, <em>Letters to October</em>, follows Aiovi and a Resistance
                fighting to escape a vast underground world before the government
                extinguishes everything they know.
              </p>
              <p style={{ fontSize: "1.05rem" }}>
                I believe the best engineers are also storytellers — and the best
                writers think like systems designers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div ref={skillsRef} className="reveal">
            <p className="section-label" style={{ color: "var(--storm-teal)" }}>Technical Skills</p>
            <h2 style={{ margin: "0 0 40px" }}>What I Work With</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p style={{
                    fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "var(--text-faint)", marginBottom: "14px",
                  }}>
                    {category}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {items.map(({ name, icon }) => (
                      <div key={name} className="skill-pill">
                        <span style={{ fontSize: "1rem", display: "flex" }}>{icon}</span>
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div ref={githubRef} className="reveal">
            <p className="section-label" style={{ color: "var(--storm-teal)" }}>GitHub</p>
            <h2 style={{ margin: "0 0 12px" }}>Activity</h2>
            <p style={{ marginBottom: "28px" }}>
              Find my work at{" "}
              <a href="https://github.com/SethCSanti" target="_blank" rel="noopener noreferrer">
                github.com/SethCSanti
              </a>
            </p>
            <GitHubStats username="SethCSanti" />
            <div style={{
              marginTop: "28px", borderRadius: "12px", overflow: "hidden",
              border: "1px solid var(--border)", padding: "20px",
              background: "var(--glass-bg)",
            }}>
              <img
                src="https://ghchart.rshah.org/6bb8b0/SethCSanti"
                alt="GitHub contribution graph"
                style={{ width: "100%", display: "block", borderRadius: "6px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "64px 0" }}>
        <div className="container">
          <div ref={contactRef} className="reveal">
            <p className="section-label" style={{ color: "var(--storm-teal)" }}>Contact</p>
            <h2 style={{ margin: "0 0 12px" }}>Get in Touch</h2>
            <p style={{ maxWidth: "480px", marginBottom: "36px" }}>
              Whether it's a software opportunity, a question about my writing,
              or just to say hello — my inbox is open.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              {[
                { icon: <FiMail />,     label: "Email",    href: "mailto:your@email.com",                               color: "var(--storm-orange)" },
                { icon: <FiGithub />,   label: "GitHub",   href: "https://github.com/SethCSanti",                      color: "var(--text)" },
                { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/seth-conner-ba580b2a9/",  color: "#0a66c2" },
              ].map(({ icon, label, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "14px 22px", color: "var(--text)",
                    fontSize: "0.9rem", fontWeight: 500, textDecoration: "none",
                  }}>
                  <span style={{ fontSize: "1.1rem", color }}>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}