import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="socials">

          <a
            href="https://www.instagram.com/sethcsanti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/seth-conner-ba580b2a9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/SethCSanti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

        </div>

        <p>© {new Date().getFullYear()} Seth Conner</p>

      </div>
    </footer>
  )
}