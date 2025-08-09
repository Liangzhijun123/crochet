import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="/Logo.svg" // path from /public
          alt="Logo"
          style={{ height: "76px", width: "83px" }}
        />
        <p className="logo">Crochet Cuteness</p>
      </div>

      {/* Hamburger icon for mobile only */}
      <button
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      <div className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
        {/* Nav links: add class to control visibility */}
        <div className="nav-middle">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setMobileMenuOpen(false)} // close menu on link click
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </NavLink>
          <NavLink
            to="/pattern-testing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Pattern testing
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        <div className="nav-right">
          <img
            src="/cart.svg"
            alt="cart"
            style={{ height: "40px", width: "40px" }}
            className="cart"
          />
          <button
            className={activeButton === "login" ? "button active" : "button"}
            onClick={() => setActiveButton("login")}
          >
            Login
          </button>
          <button
            className={activeButton === "register" ? "button active" : "button"}
            onClick={() => setActiveButton("register")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
