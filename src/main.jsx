import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"

export default function App() {
  return (
    <BrowserRouter basename="/personalwebsite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}