import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import Layout from "./components/Layout"
import Home from "./pages/home"
import Author from "./pages/author"
import About from "./pages/about"
import Now from "./pages/now"

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/"       element={<Home />} />
            <Route path="/author" element={<Author />} />
            <Route path="/about"  element={<About />} />
            <Route path="/now"    element={<Now />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}