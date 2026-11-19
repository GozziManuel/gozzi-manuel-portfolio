import Link from "next/link";
import { anton } from "../utils/font";
import "./Contact.css";

//
export default function ContactMePage() {
  return (
    <div className="ContainerBody ">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-xl-11 w-100">
          <div className="mb-5 ">
            <span className="contact-eyebrow Slide-in-bottom d-inline-block">
              01 / CONTATTI
            </span>

            <h1 className={`${anton.className} contact-title `}>
              <span
                className="Slide-in-Right d-inline-block"
                style={{ animationDelay: "0.1s", color: "black" }}
              >
                PARLIAMO
              </span>
              <span
                className="d-inline-block Slide-in-bottom"
                style={{ animationDelay: "1.8s" }}
              >
                .
              </span>
            </h1>

            <p
              className="fs-5 text-secondary Slide-in-bottom"
              style={{ animationDelay: "0.4s" }}
            >
              Hai un progetto in mente o vuoi semplicemente scambiare due idee?
              Sono sempre aperto a nuove collaborazioni e opportunità.
            </p>
          </div>

          <div className="row gy-5 ">
            {/* PRESENTAZIONE */}
            <div className="col-lg-6 ">
              <span
                className="contact-eyebrow d-inline-block Slide-in-Right "
                style={{ animationDelay: "0.6s", color: "var(--otherColor)" }}
              >
                METTIAMOCI IN CONTATTO
              </span>

              <h2
                className={`${anton.className} display-5 my-4 Slide-in-Right`}
                style={{ animationDelay: "0.8s" }}
              >
                OGNI GRANDE IDEA INIZIA CON UNA CONVERSAZIONE
                <span className="accent">.</span>
              </h2>

              <p
                className="fs-5 text-secondary lh-lg Slide-in-Right"
                style={{ animationDelay: "0.9s" }}
              >
                Sono sempre pronto ad affrontare nuove sfide, conoscere persone
                e trasformare idee in progetti concreti. Se pensi che possiamo
                creare qualcosa insieme, non esitare a contattarmi!
              </p>

              <div
                className="d-flex align-items-center gap-2 mt-4 Slide-in-Right"
                style={{ animationDelay: "1s", marginBottom: "30px" }}
              >
                <span className="availability-dot"></span>
                <small className="fw-bold">APERTO A NUOVE OPPORTUNITÀ</small>
              </div>
              <Link
                href="/WriteMe"
                className="buttonMain Slide-in-bottom"
                style={{ animationDelay: "1.2s", display: "inline-block" }}
              >
                <span className="me-2 ">Scrivimi direttamente qui</span>
                <i className="bi bi-arrow-right arrowAnimation"></i>
              </Link>
            </div>

            {/* CONTATTI */}
            <div
              className="col-lg-6 Slide-in-left"
              style={{ animationDelay: "1s" }}
            >
              <div className="contact-card p-4 p-md-5">
                <span
                  className="contact-eyebrow d-inline-block Slide-in-left"
                  style={{ animationDelay: "1.2s" }}
                >
                  02 / DOVE TROVARMI
                </span>

                <h2
                  className={`${anton.className} display-5 my-4 Slide-in-left`}
                  style={{ animationDelay: "1.3s" }}
                >
                  CONTATTI<span className="accent">.</span>
                </h2>

                <div className="d-flex flex-column">
                  <a className="contact-link">
                    <div>
                      <small
                        className="Slide-in-left d-inline-block"
                        style={{ animationDelay: "1.3s" }}
                      >
                        Telefono
                      </small>
                      <p
                        className="Slide-in-left"
                        style={{ animationDelay: "1.4s" }}
                      >
                        3479258782
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/manuel-gozzi-666746404/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div>
                      <small
                        className="Slide-in-left d-inline-block"
                        style={{ animationDelay: "1.5s" }}
                      >
                        LINKEDIN
                      </small>
                      <p
                        className="Slide-in-left"
                        style={{ animationDelay: "1.6s" }}
                      >
                        Connettiti con me
                      </p>
                    </div>
                    <span
                      className="d-inline-block Slide-in-left"
                      style={{ animationDelay: "2.2s" }}
                    >
                      ↗
                    </span>
                  </a>
                  <a
                    href="mailto:manuelavoro0623@gmail.com"
                    className="contact-link"
                  >
                    <div>
                      <small
                        className="Slide-in-left d-inline-block"
                        style={{ animationDelay: "1.7s" }}
                      >
                        EMAIL
                      </small>
                      <p
                        className="Slide-in-left "
                        style={{ animationDelay: "1.8s" }}
                      >
                        manuelavoro0623@gmail.com
                      </p>
                    </div>
                    <span
                      className="d-inline-block Slide-in-left"
                      style={{ animationDelay: "2.2s" }}
                    >
                      ↗
                    </span>
                  </a>
                  <a
                    href="https://github.com/GozziManuel"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div>
                      <small
                        className="Slide-in-left d-inline-block"
                        style={{ animationDelay: "1.9s" }}
                      >
                        GITHUB
                      </small>
                      <p
                        className="Slide-in-left "
                        style={{ animationDelay: "2s" }}
                      >
                        Scopri i miei progetti
                      </p>
                    </div>
                    <span
                      className="d-inline-block Slide-in-left"
                      style={{ animationDelay: "2.2s" }}
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top mt-5 pt-4 opacity-50">
            <small className="fw-bold">
              LE BELLE COLLABORAZIONI INIZIANO DA QUI.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
