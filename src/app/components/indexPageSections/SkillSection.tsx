import { anton } from "../../fonts/font";
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
  );
}
