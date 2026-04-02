import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer style={{
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      background: "var(--storm-darkest)",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "36px 0",
      position: "relative",
    }}>

      {/* top gradient line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(107,184,176,0.4), rgba(217,125,38,0.4), transparent)",
      }} />

      <div className="container footer-inner">

        <div className="socials">
          <a href="https://www.instagram.com/sethcsanti/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/seth-conner-ba580b2a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SethCSanti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <p style={{ margin: 0, fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} Seth Conner
        </p>

      </div>
    </footer>
  )
}