import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section style={{
        padding: "80px 0 64px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}>
        <div className="container">
          <p style={{
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--storm-teal)",
            marginBottom: "16px",
            fontWeight: 500,
          }}>
            Computer Science Portfolio
          </p>

          <h1 style={{ margin: "0 0 20px", maxWidth: "640px" }}>
            Seth Conner
          </h1>

          <p style={{ maxWidth: "540px", fontSize: "1.05rem", marginBottom: "36px" }}>
            CS student focused on robotics, systems design, and building
            meaningful software. Here you'll find my projects, background,
            and work.
          </p>

          <a href="personalwebsite\public\resume.pdf" download="SethConner_Resume.pdf">
            <button>
              ↓ &nbsp;Download Resume
            </button>
          </a>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: "72px 0" }}>
        <div className="container">

          <p style={{
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--storm-teal)",
            marginBottom: "12px",
            fontWeight: 500,
          }}>
            Selected Work
          </p>
          <h2 style={{ margin: "0 0 48px" }}>Projects</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            <ProjectCard
              title="Custom Wordle Game"
              description="Python CLI implementation of Wordle with custom evaluation logic and colored terminal output."
              link="https://github.com/SethCSanti"
              tech={["Python", "CLI"]}
            />

            <ProjectCard
              title="Browser Extension"
              description="A productivity browser extension built as a CS project to streamline daily workflows."
              link="https://github.com/SethCSanti"
              tech={["JavaScript", "Chrome API"]}
            />
          </div>

        </div>
      </section>

    </div>
  );
}