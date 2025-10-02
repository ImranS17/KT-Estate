import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src="/Images/Logo.png" alt="KT-Estate Logo" className="logo" />

      <nav className="nav">
        <ul className={menuOpen ? "show" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Projects<img src="/Images/subdown.png" alt="arrow" className="arrow-icon" /></Link></li>
          <li><Link to="/">Pushing Boundaries</Link></li>
          <li><Link to="/">About Us<img src="/Images/subdown.png" alt="arrow" className="arrow-icon" /></Link></li>
          <li id="mobcon"><Link to="/">Contact Us</Link></li>
        </ul>
      </nav>

      <button id="contact">Contact Us</button>

      <div className="search-container">
        <input type="text" className="search-box" placeholder="Search" />
        <img className="search-icon" src="/Images/ser.png" alt="Search Icon" />
      </div>

      <img
        src="/Images/humb.png"
        className="icons"
        alt="Hamburger Icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </header>
  );
}
