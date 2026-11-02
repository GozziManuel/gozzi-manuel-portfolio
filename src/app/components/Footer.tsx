"use client";
//

import { anton } from "../utils/font";
import Link from "next/link";
import "./ComponentsCSS/footer.css";
import "../indexpage.css";

export default function Footer() {
  const scrollToMyRef = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  //
  return (
    <footer className="">
      <div className="ContainerBody row pt-0 ">
        <div
          className="col-lg-2 col-sm-4 text-uppercase mb-5 mb-sm-0"
          style={{
            letterSpacing: "1.4px",
            color: "var(--borderColor)",
            fontSize: "14px",
          }}
        >
          Infos
        </div>
        <div className="col-lg-5 col-sm-8 d-flex flex-column">
          <h2 className={`fs-1 text-uppercase ${anton.className}`}>
            Cerchi uno sviluppatore per il tuo team? Contattami.
          </h2>
          <Link
            className="FooterButton text-uppercase py-3 text-center"
            style={{ letterSpacing: "1.5px" }}
            href="/Contatti"
          >
            Scrivimi
            <i className="bi bi-arrow-right arrowAnimationFooter ms-2"></i>
          </Link>
        </div>
        <div className="col-lg-5 col-sm-12 d-flex flex-column mt-5 mt-lg-0">
          <h2 className={`fs-1 text-uppercase ${anton.className}`}>
            Scopri chi sono e come posso portare valore al tuo team.
          </h2>
          <Link
            className="FooterButton2 text-uppercase py-3 text-center"
            style={{ letterSpacing: "1.5px" }}
            href="/AboutMe"
          >
            Clicca qui
            <i className="bi bi-arrow-right arrowAnimationFooter2 ms-2"></i>
          </Link>
        </div>
      </div>
      <hr style={{ marginTop: "80px" }} />
      <div className="d-flex justify-content-between ContainerBody pt-2 pb-0 LastFooterInfo">
        <p>Sei arrivato in fondo</p>
        <p onClick={() => scrollToMyRef()} style={{ cursor: "pointer" }}>
          Torna su
          <i className="bi bi-arrow-up arrowAnimationFooter3 ms-2"></i>
        </p>
      </div>
    </footer>
  );
}
