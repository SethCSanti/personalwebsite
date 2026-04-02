import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { FiSun, FiMoon } from "react-icons/fi"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Seth Conner</h2>
        </Link>

        <div className="nav-links">
          <Link to="/">Software</Link>
          <Link to="/author">Author</Link>
          <Link to="/about">About</Link>
          <Link to="/now">Now</Link>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>

      </div>
    </nav>
  )
}