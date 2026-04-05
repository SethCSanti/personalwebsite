import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px 24px",
    }}>
      <p style={{
        fontSize: "0.78rem", textTransform: "uppercase",
        letterSpacing: "0.15em", color: "var(--storm-teal)",
        marginBottom: "16px", fontWeight: 500,
      }}>
        404
      </p>
      <h1 style={{ margin: "0 0 16px", fontSize: "clamp(2.5rem, 8vw, 5rem)", opacity: 0.15 }}>
        Lost
      </h1>
      <p style={{ maxWidth: "380px", marginBottom: "36px" }}>
        This page doesn't exist — maybe it's somewhere underground with Aiovi.
      </p>
      <Link to="/">
        <button>← Back to home</button>
      </Link>
    </div>
  )
}