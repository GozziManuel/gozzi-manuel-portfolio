import Link from "next/link";
import { anton } from "./utils/font";
import "./indexpage.css";
export default function NotFound() {
  return (
    <div
      className="ContainerBody d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="col-lg-6 col-12 px-3">
        <h1
          className={`${anton.className} display-1 mb-2 Slide-in-bottom`}
          style={{ fontSize: "clamp(6rem, 15vw, 11rem)", lineHeight: 1 }}
        >
          404
        </h1>

        <h2
          className={`${anton.className} h2 mb-3 Slide-in-bottom`}
          style={{ animationDelay: "0.15s" }}
        >
          PAGINA NON TROVATA
        </h2>

        <p className="mb-4 Slide-in-bottom" style={{ animationDelay: "0.3s" }}>
          Sembra che questa rotta non esista o che il progetto sia stato
          spostato.
        </p>

        {/* Bottone di ritorno alla Home */}
        <div className="Slide-in-bottom" style={{ animationDelay: "0.45s" }}>
          <Link
            href="/"
            className="btn btn-dark px-4 py-2 rounded-pill text-uppercase fw-semibold"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}
