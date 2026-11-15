import { anton } from "../utils/font";
import "./AboutMe.css";

//
export default function AboutMe() {
  return (
    <div className="ContainerBody  ">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-xl-11 w-100">
          {/* HEADER */}
          <div className="about-header Slide-in-bottom">
            <span
              className="mb-3 d-inline-block"
              style={{
                letterSpacing: "5px",
                opacity: "0.65",
                fontSize: "13px",
              }}
            >
              IL MIO PERCORSO
            </span>
            <h1 className={`${anton.className} about-title `}>
              CHI SONO<span>.</span>
            </h1>
            <p className="about-subtitle ">
              Dall'ospitalità allo sviluppo web. Una storia di passione,
              crescita e nuove sfide.
            </p>
          </div>

          <div className="row g-5 align-items-start">
            {/* STORIA */}
            <div className="col-lg-7">
              <div className="about-story">
                <div
                  className="story-item Slide-in-bottom"
                  style={{ animationDelay: "0.15s" }}
                >
                  <span className="story-number">01</span>
                  <div>
                    <h3>LE MIE RADICI</h3>
                    <p>
                      Dopo gli studi all’Alberghiero di Cervia e anni
                      nell’ospitalità, ho portato nel mondo tech ciò che quel
                      settore mi ha insegnato meglio: gestione dello stress,
                      lavoro di squadra e attenzione totale all'esperienza
                      dell'utente.
                    </p>
                  </div>
                </div>

                <div
                  className="story-item Slide-in-bottom"
                  style={{ animationDelay: "0.3s" }}
                >
                  <span className="story-number">02</span>
                  <div>
                    <h3>LA SVOLTA DIGITALE</h3>
                    <p>
                      Con un percorso intensivo di 600 ore su React e
                      JavaScript, ho trasformato la mia curiosità per la
                      tecnologia in una vera professione. Oggi sviluppo
                      interfacce Frontend dinamiche, scalabili e curate in ogni
                      dettaglio.
                    </p>
                  </div>
                </div>

                <div
                  className="story-item Slide-in-bottom"
                  style={{ animationDelay: "0.45s" }}
                >
                  <span className="story-number">03</span>
                  <div>
                    <h3>IL MIO APPROCCIO</h3>
                    <p>
                      Porto in squadra problem solving concreto, determinazione
                      e voglia di crescere. Mi piace affrontare nuove sfide,
                      imparare continuamente e trasformare le idee in esperienze
                      digitali.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLONNA DESTRA */}
            <div className="col-lg-5">
              <div
                className="about-side Slide-in-bottom"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="side-heading">
                  <span>01 / COMPETENZE</span>
                  <h2 className={anton.className}>TECH STACK</h2>
                </div>

                <div className="tech-grid">
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Bootstrap",
                    "CSS / SCSS",
                    "Git",
                  ].map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      <span className="tech-dot"></span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
