import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="section-label">404</p>
      <h1>Page not found</h1>
      <p>This page doesn't exist—maybe it's somewhere underground with Aiovi.</p>
      <Link className="button" to="/">Back to home</Link>
    </section>
  )
}
