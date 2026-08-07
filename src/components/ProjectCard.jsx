export default function ProjectCard({ title, description, link, tech, icon }) {
  return (
    <article className="project-card">
      <div className="project-card__icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p className="project-card__description">{description}</p>

      <ul className="tag-list" aria-label={`${title} technologies`}>
        {tech.map((item) => (
          <li className="tag" key={item}>{item}</li>
        ))}
      </ul>

      <a className="project-card__link" href={link} target="_blank" rel="noopener noreferrer">
        View repository →
      </a>
    </article>
  )
}
