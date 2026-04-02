export default function ProjectCard({ title, description, link, tech = [] }) {
  return (
    <div className="glass-card" style={{ padding: "28px 28px 24px" }}>

      <h3 style={{ margin: "0 0 10px", color: "var(--storm-white)" }}>
        {title}
      </h3>

      <p style={{ margin: "0 0 20px", fontSize: "0.92rem" }}>
        {description}
      </p>

      {tech.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
          {tech.map((t) => (
            <span key={t} style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: "999px",
              background: "rgba(107,184,176,0.1)",
              border: "1px solid rgba(107,184,176,0.3)",
              color: "var(--storm-teal)",
            }}>
              {t}
            </span>
          ))}
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.85rem",
          fontWeight: 500,
          color: "var(--storm-teal)",
          borderBottom: "1px solid rgba(107,184,176,0.3)",
          paddingBottom: "2px",
          transition: "all 0.2s",
        }}
      >
        View on GitHub →
      </a>

    </div>
  );
}