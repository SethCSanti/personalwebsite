export default function PageHero({ image, accent, label, title, subtitle, children }) {
  const heroStyle = {
    "--hero-image": image ? `url(${image})` : "none",
    "--hero-accent": accent || "var(--accent)",
  }

  return (
    <section className="page-hero" style={heroStyle}>
      {image && <div className="page-hero__image" aria-hidden="true" />}
      {image && <div className="page-hero__overlay" aria-hidden="true" />}

      <div className="container page-hero__content">
        {label && <p className="page-hero__label">{label}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children && <div className="page-hero__actions">{children}</div>}
      </div>
    </section>
  )
}
