import Link from "next/link";
import { anton } from "../fonts/font";
import "./ComponentsCSS/navbar.css";

//
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom  text-uppercase d-flex justify-content-center"
      style={{ letterSpacing: "1.2px", fontSize: "12px" }}
    >
      <div className="container-fluid navContainer" id="navContainer">
        {/* <!-- Logo / Nome --> */}
        <Link className={`navbar-brand ${anton.className}`} href="/">
          HOMEPAGE
        </Link>

        {/* <!-- Tasto Hamburger per Mobile --> */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Menu Link --> */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-ul navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link" href="/Projects">
                Progetti
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/AboutMe">
                Chi Sono
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Contatti">
                Contatti
              </Link>
            </li>
          </ul>

          {/* <!-- Tasto d'azione a destra --> */}
          <button className="d-flex">
            <Link
              className="btn btn-nav-cta d-flex align-items-center gap-2"
              href="/login"
            >
              <span>Login</span>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
