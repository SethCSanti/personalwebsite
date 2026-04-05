import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

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

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">

          <NavLink to="/" style={{ textDecoration: "none" }} onClick={closeMenu}>
            <h2>Seth Conner</h2>
          </NavLink>

          {/* Desktop links */}
          <div className="nav-links">
            <NavLink to="/" end style={linkStyle}>Software</NavLink>
            <NavLink to="/author" style={linkStyle}>Author</NavLink>
            <NavLink to="/about" style={linkStyle}>About</NavLink>
            <NavLink to="/now" style={linkStyle}>Now</NavLink>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* Mobile right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme"
              style={{ display: "none" }}
              ref={el => {
                if (el) {
                  el.style.display = window.innerWidth <= 768 ? "flex" : "none"
                }
              }}
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end style={linkStyle} onClick={closeMenu}>Software</NavLink>
        <NavLink to="/author" style={linkStyle} onClick={closeMenu}>Author</NavLink>
        <NavLink to="/about" style={linkStyle} onClick={closeMenu}>About</NavLink>
        <NavLink to="/now" style={linkStyle} onClick={closeMenu}>Now</NavLink>
        <div style={{ paddingTop: "8px" }}>
          <button className="theme-toggle" onClick={() => { toggleTheme(); closeMenu() }} aria-label="Toggle theme">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </>
  )
}