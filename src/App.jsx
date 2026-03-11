import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Author from "./pages/Author";

import "./styles/theme.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;