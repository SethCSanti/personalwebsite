import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/sethcsanti/", icon: <FaInstagram /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/seth-conner-ba580b2a9/", icon: <FaLinkedin /> },
  { label: "GitHub", href: "https://github.com/SethCSanti", icon: <FaGithub /> },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="socials">
          {socialLinks.map(({ label, href, icon }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} key={label}>
              {icon}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Seth Conner</p>
      </div>
    </footer>
  )
}
