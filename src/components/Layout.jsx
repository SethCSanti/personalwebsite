import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="site">

      <Navbar />

      <main className="content">
        {children}
      </main>

      <Footer />

    </div>
  )
}