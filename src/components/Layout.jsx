import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./navbar"

function AnimatedPage({ children }) {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setVisible(false)
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [location.pathname])

  return <div className={`page-transition ${visible ? "visible" : ""}`}>{children}</div>
}

export default function Layout({ children }) {
  return (
    <div className="site">
      <Navbar />
      <main className="content">
        <AnimatedPage>{children}</AnimatedPage>
      </main>
      <Footer />
    </div>
  )
}
