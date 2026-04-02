import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <nav className="navbar">

      <div className="container navbar-inner">

        <h2>Seth Conner</h2>

        <div className="nav-links">
          <Link to="/">Software</Link>
          <Link to="/author">Author</Link>
        </div>

      </div>

    </nav>
  )
}