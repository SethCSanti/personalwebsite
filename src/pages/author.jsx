function NovelCard({ title, description, genre = [], status, progress, tbd = false }) {
  const statusColors = {
    "Drafting": { bg: "rgba(217,125,38,0.12)",  border: "rgba(217,125,38,0.35)",  text: "var(--storm-orange)" },
    "Editing":  { bg: "rgba(107,184,176,0.12)", border: "rgba(107,184,176,0.35)", text: "var(--storm-teal)" },
    "Planning": { bg: "rgba(201,146,152,0.12)", border: "rgba(201,146,152,0.35)", text: "var(--storm-rose)" },
    "On Hold":  { bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)", text: "rgba(255,255,255,0.4)" },
    "TBD":      { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.1)",  text: "rgba(255,255,255,0.3)" },
  };
  const sc = statusColors[status] || statusColors["Planning"];

  return (
    <div className="glass-card" style={{
      display: "flex",
      flexDirection: "row",
      overflow: "hidden",
      minHeight: "240px",
      opacity: tbd ? 0.6 : 1,
    }}>

      {/* Cover / spine */}
      <div style={{
        width: "150px",
        minWidth: "150px",
        background: tbd
          ? "rgba(255,255,255,0.02)"
          : "linear-gradient(160deg, rgba(107,184,176,0.15) 0%, rgba(217,125,38,0.1) 100%)",
        borderRight: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "24px 16px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Spine line */}
        {!tbd && (
          <div style={{
            position: "absolute", left: "13px", top: 0, bottom: 0,
            width: "3px",
            background: "linear-gradient(180deg, var(--storm-teal), var(--storm-orange))",
            borderRadius: "2px", opacity: 0.55,
          }} />
        )}

        {tbd ? (
          <>
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.2 }}>
              <rect x="6" y="4" width="24" height="32" rx="2" stroke="white" strokeWidth="1.5"/>
              <line x1="16" y1="18" x2="24" y2="18" stroke="white" strokeWidth="1.5"/>
              <line x1="20" y1="14" x2="20" y2="22" stroke="white" strokeWidth="1.5"/>
            </svg>
            <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", textAlign: "center" }}>
              TBD
            </span>
          </>
        ) : (
          <>
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.4 }}>
              <rect x="6" y="4" width="24" height="32" rx="2" stroke="white" strokeWidth="1.5"/>
              <line x1="10" y1="12" x2="26" y2="12" stroke="white" strokeWidth="1.2"/>
              <line x1="10" y1="17" x2="26" y2="17" stroke="white" strokeWidth="1.2"/>
              <line x1="10" y1="22" x2="20" y2="22" stroke="white" strokeWidth="1.2"/>
            </svg>
            <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textAlign: "center" }}>
              Cover<br/>TBD
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "26px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>

        {/* Title + status */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
          <h3 style={{ margin: 0, fontSize: "1.2rem", color: tbd ? "rgba(255,255,255,0.45)" : "var(--storm-white)", fontStyle: tbd ? "italic" : "normal" }}>
            {title}
          </h3>
          <span style={{
            fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.08em",
            textTransform: "uppercase", padding: "3px 11px", borderRadius: "999px",
            background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text,
            whiteSpace: "nowrap", flexShrink: 0,
          }}>
            {status}
          </span>
        </div>

        {/* Genre tags */}
        {genre.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {genre.map((g) => (
              <span key={g} style={{
                fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.05em",
                textTransform: "uppercase", padding: "2px 9px", borderRadius: "999px",
                background: "rgba(201,146,152,0.1)", border: "1px solid rgba(201,146,152,0.25)",
                color: "var(--storm-rose)",
              }}>{g}</span>
            ))}
          </div>
        )}

        {/* Description */}
        <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.7, color: tbd ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.62)", flex: 1 }}>
          {description}
        </p>

        {/* Progress bar */}
        {!tbd && (
          <div style={{ marginTop: "auto", paddingTop: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
              <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.32)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Progress
              </span>
              <span style={{ fontSize: "0.76rem", color: "var(--storm-teal)", fontWeight: 500 }}>
                {progress}%
              </span>
            </div>
            <div style={{ height: "4px", borderRadius: "999px", background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <div style={{
                height: "100%", width: `${progress}%`, borderRadius: "999px",
                background: "linear-gradient(90deg, var(--storm-teal), var(--storm-orange))",
              }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function Author() {
  return (
    <div>

      {/* Hero */}
      <section style={{ padding: "80px 0 64px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <p style={{
            fontSize: "0.8rem", textTransform: "uppercase",
            letterSpacing: "0.15em", color: "var(--storm-rose)",
            marginBottom: "16px", fontWeight: 500,
          }}>
            Author & Storyteller
          </p>
          <h1 style={{ margin: "0 0 20px", maxWidth: "600px" }}>Writing & Fiction</h1>
          <p style={{ maxWidth: "520px", fontSize: "1.05rem" }}>
            Alongside software, I write long-form fiction exploring identity,
            conflict, and the stories that define us. Here's what I'm working on.
          </p>
        </div>
      </section>

      {/* Novel cards */}
      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <p style={{
            fontSize: "0.8rem", textTransform: "uppercase",
            letterSpacing: "0.15em", color: "var(--storm-rose)",
            marginBottom: "12px", fontWeight: 500,
          }}>
            Current Projects
          </p>
          <h2 style={{ margin: "0 0 48px" }}>Novels</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            <NovelCard
              title="Letters to October"
              description="Aiovi works alongside the Resistance deep within the Expanse — a vast network of cities buried miles underground. When the government sets its sights on erasing them, Aiovi must find a way to lead his people to the surface before they're swallowed by darkness forever."
              genre={["Fantasy", "Dystopian", "Underground World"]}
              status="Drafting"
              progress={62}
            />

            <NovelCard
              title="Summers in Tokyo: Cherry Blossoms & Pink Paste"
              description="Details coming soon."
              genre={[]}
              status="Planning"
              progress={0}
            />

          </div>
        </div>
      </section>

    </div>
  );
}