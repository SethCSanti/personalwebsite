import { NavLink } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { FiSun, FiMoon } from "react-icons/fi"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "var(--storm-teal)" : "var(--text-muted)",
    fontSize: "0.85rem",
    fontWeight: isActive ? 500 : 400,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    padding: "4px 0",
    borderBottom: isActive ? "2px solid var(--storm-teal)" : "2px solid transparent",
    transition: "all 0.2s",
    textDecoration: "none",
  })

  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h2>Seth Conner</h2>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end style={linkStyle}>Software</NavLink>
          <NavLink to="/author" style={linkStyle}>Author</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/now" style={linkStyle}>Now</NavLink>

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