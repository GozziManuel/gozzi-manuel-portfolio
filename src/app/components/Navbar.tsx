"use client";
import Link from "next/link";
import { anton } from "../utils/font";
import "./ComponentsCSS/navbar.css";
import { usePathname } from "next/navigation";

//
interface Navlinks {
  path: string;
  name: string;
}
//
export default function Navbar() {
  // Finding pathname For navlinks
  const pathname = usePathname();

  // Navlinks array
  const navLinksArray: Navlinks[] = [
    { path: "/Projects", name: "Progetti" },
    { path: "/AboutMe", name: "Chi Sono" },
    { path: "/Contatti", name: "Contatti" },
  ];
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom  text-uppercase d-flex justify-content-center"
      style={{ letterSpacing: "1.2px", fontSize: "12px" }}
    >
      <div className="container-fluid navContainer" id="navContainer">
        {/* <!-- Logo / Nome --> */}
        <Link
          className={`navbar-brand ${anton.className} ${pathname === "/" ? "activatedIndexRoute" : ""}`}
          href="/"
        >
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
            {navLinksArray.map((el, id) => {
              return (
                <li className="nav-item" key={id}>
                  <Link
                    className={`nav-link ${pathname === el.path ? "activeNavlink" : ""}`}
                    href={el.path}
                  >
                    {el.name}
                  </Link>
                </li>
              );
            })}
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
