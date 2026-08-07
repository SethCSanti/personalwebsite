import { useEffect, useState } from "react"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import PageHero from "../components/PageHero"
import { useReveal } from "../hooks/useReveal"

const skills = {
  "Languages": ["Python", "C++", "C#", "Java", "Go", "JavaScript", "HTML", "CSS", "TypeScript"],
  "Systems & Low-Level": ["Memory Management", "Pointers", "Processor Architecture", "Concurrency", "Performance Optimization"],
  "Algorithms & Data Structures": ["Graphs", "Trees", "Dynamic Programming", "Big-O Analysis"],
  "Backend & Systems": ["REST APIs", "Distributed Systems", "SQL/MySQL"],
  "Tools & Infrastructure": ["Docker", "Kubernetes", "Git"],
  "AI / Data": ["Machine Learning Fundamentals", "Data Preprocessing", "Model Evaluation"],
}

const contactLinks = [
  { icon: <FiMail />, label: "Email", href: "mailto:sethcconner@gmail.com" },
  { icon: <FiGithub />, label: "GitHub", href: "https://github.com/SethCSanti" },
  { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/seth-conner-ba580b2a9/" },
]

const CACHE_KEY = "gh_stats_cache"
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000

function GitHubStats({ username }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY))
      if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        setStats(cached.data)
        setLoading(false)
        return
      }
    } catch {}

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
        setStats(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  const items = [
    { label: "Public Repos", value: stats?.public_repos },
    { label: "Followers", value: stats?.followers },
    { label: "Following", value: stats?.following },
  ]

  return (
    <div className="stats-grid">
      {items.map(({ label, value }) => (
        <div className="stat" key={label}>
          {loading
            ? <div className="skeleton skeleton--stat" />
            : <div className="stat__value">{value ?? "—"}</div>}
          <div className="stat__label">{label}</div>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  const bioRef = useReveal()
  const skillsRef = useReveal()
  const githubRef = useReveal()
  const contactRef = useReveal()

  return (
    <div>
      <PageHero
        image={`${import.meta.env.BASE_URL}hero-about.jpg`}
        label="About Me"
        title="Seth Conner"
        subtitle="CS student, systems thinker, and fiction writer. I build software that solves real problems and write stories that explore impossible ones."
      />

      <section className="section section--bordered">
        <div className="container">
          <div className="bio reveal" ref={bioRef}>
            <img className="bio__photo" src={`${import.meta.env.BASE_URL}profile_pic.jpeg`} alt="Seth Conner" />
            <div className="bio__copy">
              <p>I'm a computer science student focused on robotics, systems design, and full-stack development. I'm drawn to projects where the problem is interesting and the craft matters.</p>
              <p>Outside of software, I write long-form fantasy fiction. My current novel, <em>Letters to October</em>, follows Aiovi and a Resistance fighting to escape a vast underground world before the government extinguishes everything they know.</p>
              <p>I believe the best engineers are also storytellers—and the best writers think like systems designers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className="reveal" ref={skillsRef}>
            <p className="section-label">Technical Skills</p>
            <h2 className="section-heading">What I Work With</h2>
            <div className="skills-groups">
              {Object.entries(skills).map(([category, items]) => (
                <section className="skills-group" key={category}>
                  <h3>{category}</h3>
                  <ul className="skills-list">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className="reveal" ref={githubRef}>
            <p className="section-label">GitHub</p>
            <h2>Activity</h2>
            <p>Find my work at <a href="https://github.com/SethCSanti" target="_blank" rel="noopener noreferrer">github.com/SethCSanti</a>.</p>
            <GitHubStats username="SethCSanti" />
            <div className="panel contribution-panel">
              <img src="https://ghchart.rshah.org/64bdb3/SethCSanti" alt="Seth Conner's GitHub contribution graph" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" ref={contactRef}>
            <p className="section-label">Contact</p>
            <h2>Get in Touch</h2>
            <p className="contact-copy">Whether it's a software opportunity, a question about my writing, or just to say hello—my inbox is open.</p>
            <div className="contact-links">
              {contactLinks.map(({ icon, label, href }) => (
                <a className="contact-link" href={href} target="_blank" rel="noopener noreferrer" key={label}>
                  {icon}{label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
