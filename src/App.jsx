import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Author from "./pages/Author"

import "./styles/theme.css"

function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
        </Routes>

      </Layout>

    </BrowserRouter>
  )
}

export default App