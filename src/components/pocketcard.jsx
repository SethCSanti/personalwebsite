export default function ProjectCard({ title, description, link }) {
  return (
    <div style={{
      border: "1px solid #6bb8b0",
      borderRadius: "8px",
      padding: "20px",
      margin: "20px 0"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>

      <a href={link} target="_blank">
        <button>View Project</button>
      </a>
    </div>
  );
}