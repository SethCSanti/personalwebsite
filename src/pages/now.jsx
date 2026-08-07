import PageHero from "../components/PageHero"

export default function Now() {
  return (
    <div>
      <PageHero
        image={`${import.meta.env.BASE_URL}hero-now.jpg`}
        label="Last updated August 2026"
        title="What I'm Doing Now"
        subtitle="A snapshot of what's currently taking up my time and energy."
      />

      <section className="section">
        <div className="container container--narrow">
          <section className="now-section">
            <h2 className="now-section__heading">Writing</h2>
            <div className="now-card">
              <h3>Letters to October—editing</h3>
              <p>The rough draft was completed in August 2026. I'm now working through the manuscript in editing, strengthening the story, refining the prose, and preparing the next draft.</p>
              <div className="progress">
                <div className="progress__meta">
                  <span>Rough draft completed August 2026</span>
                  <span className="progress__value">100%</span>
                </div>
                <div className="progress__track" role="progressbar" aria-label="Letters to October rough draft" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
                  <div className="progress__bar" style={{ "--progress": "100%" }} />
                </div>
              </div>
            </div>
          </section>

          <section className="now-section">
            <h2 className="now-section__heading">Building</h2>
            <div className="now-card">
              <h3>Browser Extension—in development</h3>
              <p>Working on a browser extension that does something genuinely useful. Still in early development—details coming when it's ready.</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
