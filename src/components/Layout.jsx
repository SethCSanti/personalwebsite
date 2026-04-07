import { useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
import Navbar from "./navbar"
import Footer from "./Footer"

function AnimatedPage({ children }) {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(12px)"
    const t = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.3s ease, transform 0.3s ease"
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
    return () => cancelAnimationFrame(t)
  }, [location.pathname])

  return <div ref={ref}>{children}</div>
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