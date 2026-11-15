import { anton } from "../utils/font";
import "./Contact.css";

//
export default function ContactMePage() {
  return (
    <div className="ContainerBody ">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-xl-11 w-100">
          <div className="mb-5 Slide-in-bottom">
            <span className="contact-eyebrow">01 / CONTATTI</span>

            <h1 className={`${anton.className} contact-title`}>
              PARLIAMO<span>.</span>
            </h1>

            <p className="fs-5 opacity-75">
              Hai un progetto in mente o vuoi semplicemente scambiare due idee?
              Sono sempre aperto a nuove collaborazioni e opportunità.
            </p>
          </div>

          <div className="row g-5 align-items-center">
            {/* PRESENTAZIONE */}
            <div className="col-lg-6 Slide-in-bottom">
              <span className="contact-eyebrow">METTIAMOCI IN CONTATTO</span>

              <h2 className={`${anton.className} display-5 my-4`}>
                OGNI GRANDE IDEA INIZIA CON UNA CONVERSAZIONE
                <span className="accent">.</span>
              </h2>

              <p className="fs-5 opacity-75 lh-lg">
                Sono sempre pronto ad affrontare nuove sfide, conoscere persone
                e trasformare idee in progetti concreti. Se pensi che possiamo
                creare qualcosa insieme, non esitare a contattarmi!
              </p>

              <div className="d-flex align-items-center gap-2 mt-4">
                <span className="availability-dot"></span>
                <small className="fw-bold">APERTO A NUOVE OPPORTUNITÀ</small>
              </div>
            </div>

            {/* CONTATTI */}
            <div
              className="col-lg-6 Slide-in-bottom"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="contact-card p-4 p-md-5">
                <span className="contact-eyebrow">02 / DOVE TROVARMI</span>

                <h2 className={`${anton.className} display-5 my-4`}>
                  CONTATTI<span className="accent">.</span>
                </h2>

                <div className="d-flex flex-column">
                  <a className="contact-link">
                    <div>
                      <small>Telefono</small>
                      <p>3479258782</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/manuel-gozzi-666746404/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div>
                      <small>LINKEDIN</small>
                      <p>Connettiti con me</p>
                    </div>
                    <span>↗</span>
                  </a>
                  <a
                    href="mailto:manuelavoro0623@gmail.com"
                    className="contact-link"
                  >
                    <div>
                      <small>EMAIL</small>
                      <p>manuelavoro0623@gmail.com</p>
                    </div>
                    <span>↗</span>
                  </a>
                  <a
                    href="https://github.com/GozziManuel"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div>
                      <small>GITHUB</small>
                      <p>Scopri i miei progetti</p>
                    </div>
                    <span>↗</span>
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
