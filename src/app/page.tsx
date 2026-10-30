import "./indexpage.css";
import { anton } from "./fonts/font";

export default function Home() {
  return (
    <section id="chi-sono" className="pt-5 pb-5 w-100">
      <div className="container-fluid max-width-container pt-4 pt-lg-5">
        <div className="row align-items-center gy-5">
          {/* <!-- Left Text Column --> */}
          <div className="col-12 row">
            <div className="col-lg-3 col-12 col-md-3">
              <p
                className="font-mono text-uppercase text-secondary text-xs tracking-wider mb-4 leading-normal "
                style={{ letterSpacing: "1.2px", fontSize: "12px" }}
              >
                SVILUPPATORE WEB / APP
                <br />
                DISPONIBILE PER ASSUNZIONE
              </p>
            </div>
            {/* <!-- Main Heading --> */}
            <div className="col-lg-6 col-12 black col-md-6 mb-5 mb-md-0 ">
              <h1 className={` display-3 fw-bold mb-4  ${anton.className} `}>
                TRASFORMO IDEE
                <br />
                IN PRODOTTI
                <br />
                <span className="blue"> CHE CRESCONO.</span>
              </h1>

              {/* <!-- Description --> */}
              <p className="fs-5  mb-4 pb-2">
                Seguo il progetto dall'idea fino alla fine, codice compreso.
              </p>
              <div>
                {/* <!-- Main CTA Button --> */}
                <a href="https://wa.me/" target="_blank" className="buttonMain">
                  <span className="me-2">SCRIVIMI SU WHATSAPP</span>
                  <i className="bi bi-arrow-right-short arrowAnimation"></i>
                </a>
              </div>
            </div>
            {/* <!-- Main  Photo --> */}

            <div className=" col-lg-3 col-12 col-md-3 d-flex justify-content-md-center align-items-md-center">
              <div className="PhotoContainer">
                <img src="/photo.jpg" alt="Me" className="Photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
