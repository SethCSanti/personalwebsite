import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
      <h2>Seth Conner</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Software</Link>
        <Link to="/author">Author</Link>
      </div>
    </nav>
  );
}