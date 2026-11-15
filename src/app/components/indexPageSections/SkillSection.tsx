import { anton } from "../../utils/font";
import "../../indexpage.css";

export default function SkillSection() {
  return (
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
        <div
          className="col-12 col-lg-2 mb-4 Slide-in-bottom"
          style={{
            animationDelay: "0.9s",
          }}
        >
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
              className="  py-4 "
              style={{
                borderTop: "solid 1px var(--borderColor)",
                borderBottom: "solid 1px var(--borderColor)",
              }}
            >
              {/* AnimatioN 1st  */}
              <div
                style={{
                  animationDelay: "1s",
                }}
                className="Slide-in-bottom"
              >
                <h3 className={anton.className}>IDEA</h3>
              </div>

              {/* Animation 2nd  */}
              <div
                className="Slide-in-bottom"
                style={{ animationDelay: "1.1s" }}
              >
                <p>Capisco il problema prima di scrivere codice.</p>
              </div>
            </div>
          </div>

          {/* 2° */}
          <div className="col-12 pt-4">
            {" "}
            <div className="Slide-in-bottom" style={{ animationDelay: "1.3s" }}>
              <h3 className={anton.className}>SVILUPPO</h3>
            </div>
            <div className="Slide-in-bottom" style={{ animationDelay: "1.3s" }}>
              <p>Web e app, testati e documentati.</p>{" "}
            </div>
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
            <div className="Slide-in-bottom" style={{ animationDelay: "1.1s" }}>
              <h3 className={anton.className}>DESIGN</h3>
            </div>
            <div className="Slide-in-bottom" style={{ animationDelay: "1.1s" }}>
              <p>Interfacce e architettura decise insieme.</p>
            </div>
          </div>

          {/* 2° */}
          <div className="col-12  pt-4">
            {" "}
            <div className="Slide-in-bottom" style={{ animationDelay: "1.3s" }}>
              <h3 className={anton.className}>FINE</h3>
            </div>
            <div className="Slide-in-bottom" style={{ animationDelay: "1.3s" }}>
              <p>Rilascio, monitoraggio e passaggio di consegne.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
