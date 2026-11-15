import { anton } from "../../utils/font";
import "../../indexpage.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="MainHERO"
      className="ContainerBody"
      style={{ marginBottom: "150px" }}
    >
      <div className="container-fluid max-width-container pt-4 pt-lg-5">
        <div className="row align-items-center gy-5 justify-content-center">
          {/* <!-- Left Text Column --> */}
          <div className="col-12 row">
            <div className="col-lg-3 col-12 col-md-3">
              <p
                className="font-mono text-uppercase text-secondary text-xs tracking-wider  mb-1 leading-normal Slide-in-bottom "
                style={{ letterSpacing: "1.2px", fontSize: "12px" }}
              >
                SVILUPPATORE WEB / APP
              </p>
              <p
                style={{
                  animationDelay: "0.2s",
                  letterSpacing: "1.2px",
                  fontSize: "12px",
                }}
                className="font-mono text-uppercase text-secondary text-xs tracking-wider mb-4 leading-normal Slide-in-bottom "
              >
                DISPONIBILE PER ASSUNZIONE
              </p>
            </div>
            {/* <!-- Main Heading --> */}
            <div className="col-lg-6 col-12 black col-md-6 mb-5 mb-md-0 ">
              <h1
                className={` display-3 fw-bold mb-0  ${anton.className} Slide-in-bottom `}
              >
                TRASFORMO IDEE
              </h1>

              <h1
                className={` display-3 fw-bold mb-0  ${anton.className} Slide-in-bottom `}
                style={{
                  animationDelay: "0.2s",
                }}
              >
                IN PRODOTTI
              </h1>
              <h1
                className={` display-3 fw-bold mb-4 blue  ${anton.className} Slide-in-bottom `}
                style={{
                  animationDelay: "0.4s",
                }}
              >
                {" "}
                CHE CRESCONO.
              </h1>
              {/* <!-- Description --> */}
              <p
                className="fs-5  mb-4 pb-2 Slide-in-bottom"
                style={{
                  animationDelay: "0.6s",
                }}
              >
                Seguo il progetto dall'idea fino alla fine, codice compreso.
              </p>
              <div
                className="Slide-in-bottom"
                style={{
                  animationDelay: "0.6s",
                }}
              >
                {/* <!-- Main CTA Button --> */}
                <Link href="/Contatti" className="buttonMain">
                  <span className="me-2">SCRIVIMI SU WHATSAPP</span>
                  <i className="bi bi-arrow-right arrowAnimation"></i>
                </Link>
              </div>
            </div>
            {/* <!-- Main  Photo --> */}

            <div
              className="Slide-in-bottom col-lg-3 col-12 col-md-3 d-flex justify-content-md-center align-items-md-center "
              style={{
                animationDelay: "0.8s",
              }}
            >
              <div className="PhotoContainer ">
                <img
                  src="/photo.jpg"
                  alt="Me"
                  className="Photo rotating-border "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
