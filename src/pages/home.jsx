import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>

      <h1>Software Engineering Portfolio</h1>

      <p>
        I am a computer science student focused on robotics, systems design,
        and building meaningful software.
      </p>

      <a href="/src/assets/resume.pdf" download>
        <button>Download Resume</button>
      </a>

      <h2 style={{ marginTop: "60px" }}>Projects</h2>

      <ProjectCard
        title="Custom Wordle Game"
        description="Python CLI implementation of Wordle with custom evaluation logic."
        link="https://github.com"
      />

      <ProjectCard
        title="Browser Extension"
        description="A productivity browser extension built as a CS project."
        link="https://github.com"
      />

    </div>
  );
}