import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"

const navItems = [
  { to: "/", label: "Software", end: true },
  { to: "/author", label: "Author" },
  { to: "/about", label: "About" },
]

const navClassName = ({ isActive }) => `nav-link${isActive ? " active" : ""}`

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container navbar-inner">
          <NavLink className="brand" to="/" onClick={closeMenu}>Seth Conner</NavLink>

          <div className="nav-links">
            {navItems.map(({ to, label, end }) => (
              <NavLink className={navClassName} to={to} end={end} key={to}>{label}</NavLink>
            ))}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ to, label, end }) => (
          <NavLink className={navClassName} to={to} end={end} onClick={closeMenu} key={to}>{label}</NavLink>
        ))}
        <button
          className="theme-toggle"
          onClick={() => { toggleTheme(); closeMenu() }}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </>
  )
}
