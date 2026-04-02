import { useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Navbar from "./navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="site">
      <Navbar />

      <main className="content">
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="page-transition"
            timeout={300}
          >
            <div>{children}</div>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <Footer />
    </div>
  )
}