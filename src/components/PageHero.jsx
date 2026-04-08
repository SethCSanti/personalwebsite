import { useTheme } from "../context/ThemeContext"

export default function PageHero({ image, accent, label, title, subtitle, children }) {
  const { theme } = useTheme()

  // Overlay adjusts per theme:
  // dark  → dark-to-transparent so image shows through the top, fades into bg at bottom
  // light → light-to-transparent, no black-to-white look
  const overlayGradient = theme === "dark"
    ? "linear-gradient(180deg, rgba(31,35,48,0.45) 0%, rgba(31,35,48,0.85) 100%)"
    : "linear-gradient(180deg, rgba(240,237,232,0.45) 0%, rgba(240,237,232,0.88) 100%)"

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "280px" }}>

      {/* Background image */}
      {image && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: theme === "dark" ? 0.35 : 0.3,
          filter: "blur(1px) saturate(0.6)",
          zIndex: 0,
        }} />
      )}

      {/* Theme-aware gradient overlay */}
      {image && (
        <div style={{
          position: "absolute", inset: 0,
          background: overlayGradient,
          zIndex: 1,
        }} />
      )}

      {/* Top sheen line */}
      {image && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          zIndex: 2,
        }} />
      )}

      {/* Content */}
      <div className="container" style={{
        position: "relative", zIndex: 3,
        padding: "80px 0 64px",
      }}>
        {label && (
          <p style={{
            fontSize: "0.78rem", textTransform: "uppercase",
            letterSpacing: "0.15em", color: accent || "var(--storm-teal)",
            marginBottom: "16px", fontWeight: 500, margin: "0 0 16px",
          }}>
            {label}
          </p>
        )}
        <h1 style={{ margin: "0 0 20px", maxWidth: "640px" }}>{title}</h1>
        {subtitle && (
          <p style={{ maxWidth: "520px", fontSize: "1.05rem", marginBottom: children ? "36px" : 0 }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Bottom divider */}
      <div style={{ position: "relative", zIndex: 3, borderBottom: "1px solid var(--border)" }} />
    </section>
  )
}