import "./indexpage.css";
import { anton } from "./fonts/font";
import TechMarquee from "./components/TechMarquee";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    // MAIN HERO SECTION
    <main className="pt-5 pb-5 w-100">
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
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    className="buttonMain"
                  >
                    <span className="me-2">SCRIVIMI SU WHATSAPP</span>
                    <i className="bi bi-arrow-right arrowAnimation"></i>
                  </a>
                </div>
              </div>
              {/* <!-- Main  Photo --> */}

              <div className=" col-lg-3 col-12 col-md-3 d-flex justify-content-md-center align-items-md-center ">
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

      {/* // Black SECTION FOR MORE INFO */}
      <section
        id=""
        className=" w-100 mySkill mx-0 "
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          color: "var(--buttonColorText)",
        }}
      >
        <div className="ContainerBody p-0 row  ">
          {/* LEFT TEXT */}
          <div className="col-12 col-lg-2 mb-4">
            <p
              className="text-uppercase"
              style={{
                letterSpacing: "1.3px",
                fontSize: "12px",
              }}
            >
              Il metodo
            </p>
          </div>

          {/* MIDDLE */}
          <div className="col-lg-5 col-md-6 col-12  row me-3">
            <div className="col-12 ">
              {/* 1° */}
              <div
                className="  py-4"
                style={{
                  borderTop: "solid 1px var(--borderColor)",
                  borderBottom: "solid 1px var(--borderColor)",
                }}
              >
                <h3 className={anton.className}>IDEA</h3>
                <p>Capisco il problema prima di scrivere codice.</p>
              </div>
            </div>

            {/* 2° */}
            <div className="col-12 pt-4">
              {" "}
              <h3 className={anton.className}>SVILUPPO</h3>
              <p>Web e app, testati e documentati.</p>
            </div>
          </div>

          {/* RIGHT  */}
          <div className="col-lg-5 col-md-6 col-12 row">
            {/* 1° */}
            <div
              className="col-12 py-4 "
              // Styling border
              style={{
                borderTop: "solid 1px var(--borderColor)",
                borderBottom: "solid 1px var(--borderColor)",
              }}
            >
              <h3 className={anton.className}>DESIGN</h3>
              <p>Interfacce e architettura decise insieme.</p>
            </div>

            {/* 2° */}
            <div className="col-12  pt-4">
              {" "}
              <h3 className={anton.className}>FINE</h3>
              <p>Rilascio, monitoraggio e passaggio di consegne.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Marquee">
        <TechMarquee />
      </section>

      {/* SEction For initial Project */}
      <section className="ProjectSection ContainerBody">
        <Carousel />
      </section>
    </main>
  );
}
