import PageHero from "../components/PageHero"

function Progress({ label, value }) {
  return (
    <div className="progress">
      <div className="progress__meta">
        <span>{label}</span>
        <span className="progress__value">{value}%</span>
      </div>
      <div className="progress__track" role="progressbar" aria-label={label} aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
        <div className="progress__bar" style={{ "--progress": `${value}%` }} />
      </div>
    </div>
  )
}

function NovelCard({ title, description, genre, status, statusClass, progress, progressLabel }) {
  return (
    <article className="novel-card">
      <div className="novel-card__marker">Cover forthcoming</div>
      <div className="novel-card__content">
        <div className="novel-card__header">
          <h3>{title}</h3>
          <span className={`status ${statusClass}`}>{status}</span>
        </div>
        {genre.length > 0 && <p className="novel-card__genres">{genre.join(" · ")}</p>}
        <p className="novel-card__description">{description}</p>
        <Progress label={progressLabel} value={progress} />
      </div>
    </article>
  )
}

export default function Author() {
  return (
    <div>
      <PageHero
        image={`${import.meta.env.BASE_URL}hero-author.jpg`}
        accent="var(--rose)"
        label="Author & Storyteller"
        title="Writing & Fiction"
        subtitle="Alongside software, I write long-form fiction exploring identity, conflict, and the stories that define us."
      />

      <section className="section">
        <div className="container">
          <p className="section-label">Current Projects</p>
          <h2 className="section-heading">Novels</h2>
          <div className="novels-list">
            <NovelCard
              title="Letters to October"
              description="Aiovi works alongside the Resistance deep within the Expanse—a vast network of cities buried miles underground. The rough draft was completed in August 2026, and the manuscript is now in editing."
              genre={["Fantasy", "Dystopian", "Underground World"]}
              status="Editing"
              statusClass="status--editing"
              progress={100}
              progressLabel="Rough draft completed August 2026"
            />
            <NovelCard
              title="Summers in Tokyo: Cherry Blossoms & Pink Paste"
              description="A new long-form fiction project currently in its early stages. More details will be shared as the draft develops."
              genre={[]}
              status="In Progress"
              statusClass="status--progress"
              progress={10}
              progressLabel="Draft progress"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
