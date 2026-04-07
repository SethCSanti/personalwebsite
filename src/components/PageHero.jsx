/**
 * PageHero — the top banner section on each page.
 *
 * Props:
 *   image      — path to background image e.g. "/hero-cs.jpg"
 *   accent     — CSS color for the eyebrow label e.g. "var(--storm-teal)"
 *   label      — small uppercase text above the title
 *   title      — the h1 text
 *   subtitle   — paragraph under the title
 *   children   — optional extra content (e.g. a button) rendered below subtitle
 */
export default function PageHero({ image, accent, label, title, subtitle, children }) {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>

      {/* Background image layer */}
      {image && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          filter: "blur(2px) saturate(0.7)",
          zIndex: 0,
        }} />
      )}

      {/* Gloss gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: image
          ? "linear-gradient(180deg, rgba(var(--bg-rgb, 31,35,48),0.55) 0%, var(--bg) 100%)"
          : "none",
        zIndex: 1,
      }} />

      {/* Subtle top sheen */}
      {image && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
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
            marginBottom: "16px", fontWeight: 500,
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

      {/* Bottom divider line */}
      <div style={{
        position: "relative", zIndex: 3,
        borderBottom: "1px solid var(--border)",
      }} />
    </section>
  )
}