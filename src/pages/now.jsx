import PageHero from "../components/PageHero"

export default function Now() {
  return (
    <div>

      <PageHero
        image={`${import.meta.env.BASE_URL}hero-now.jpg`}
        label="Last updated April 2026"
        title="What I'm Doing Now"
        subtitle="A snapshot of what's currently taking up my time and energy."
      />

      <section style={{ padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "720px" }}>

          {/* Writing */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "1.5rem" }}>✍️</span>
              <h2 style={{ margin: 0, fontSize: "1.3rem" }}>Writing</h2>
            </div>
            <div className="glass-card" style={{ padding: "28px 32px" }}>
              <h3 style={{ margin: "0 0 10px", color: "var(--storm-rose)" }}>
                Letters to October — finishing the rough draft
              </h3>
              <p style={{ margin: "0 0 16px" }}>
                I'm in the final stretch of the first rough draft. Aiovi and the Resistance
                are nearing the surface — the stakes are as high as they've ever been and
                I'm pushing to get the ending on the page.
              </p>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Rough draft progress
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "var(--storm-teal)", fontWeight: 500 }}>62%</span>
                </div>
                <div style={{ height: "4px", borderRadius: "999px", background: "var(--border)", overflow: "hidden" }}>
                  <div style={{
                    height: "100%", width: "62%", borderRadius: "999px",
                    background: "linear-gradient(90deg, var(--storm-teal), var(--storm-orange))",
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Building */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "1.5rem" }}>🛠️</span>
              <h2 style={{ margin: 0, fontSize: "1.3rem" }}>Building</h2>
            </div>
            <div className="glass-card" style={{ padding: "28px 32px" }}>
              <h3 style={{ margin: "0 0 10px", color: "var(--storm-teal)" }}>
                Browser Extension — in development
              </h3>
              <p style={{ margin: 0 }}>
                Working on a browser extension that does something genuinely useful.
                Still in early development — details coming when it's ready.
              </p>
            </div>
          </div>

          <p style={{ fontSize: "0.82rem", color: "var(--text-faint)", fontStyle: "italic" }}>
            Inspired by{" "}
            <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
              nownownow.com
            </a>
            {" "}— a directory of people with Now pages.
          </p>

        </div>
      </section>
    </div>
  )
}