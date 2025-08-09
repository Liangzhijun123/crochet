import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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

      <div className="nav-middle ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/pattern-testing"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Pattern testing
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="nav-right">
        <img
          src="/cart.svg"
          alt="cart"
          style={{ height: "40px", width: "40px" }}
        />
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
}
