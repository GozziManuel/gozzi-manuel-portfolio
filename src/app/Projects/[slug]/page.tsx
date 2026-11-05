import Link from "next/link";
import { ProjectList } from "../../utils/project";
import "../Projectpage.css";
import { anton } from "@/app/utils/font";
//

// Creating static param
export async function generateStaticParams() {
  return ProjectList.map((project) => ({
    slug: project.slug,
  }));
}

//
export default async function ProjectsDetailed({
  // taking param
  params,
}: {
  params: { slug: string };
}) {
  //
  // Finding specific project by params
  const { slug } = await params;

  // taking all data from specific project
  const project = ProjectList.find((el) => el.slug === slug);

  // Preventing not found error
  if (!project) {
    <h1>Project Not Found</h1>;
  }

  //
  return (
    <section className="d-flex flex-column  text-light">
      {/* CONTENUTO PRINCIPALE */}
      <div className="py-5 mt-5 ContainerBody">
        <div className="py-4">
          {/*  */}

          {/* Pulsante Torna Indietro */}

          <div className="mb-4">
            <Link
              href="/Projects"
              className="text-uppercase text-secondary d-inline-flex align-items-center gap-2 "
              style={{ letterSpacing: "1.2px", fontSize: "14px" }}
            >
              <i className="bi bi-arrow-left arrowAnimationDetailed ms-2"></i>
              Torna ai progetti
            </Link>
          </div>

          {/* HERO SECTION DEL PROGETTO */}
          <section className="row align-items-center mb-5 pb-4 border-bottom border-secondary">
            <div className="col-lg-5 mb-4 mb-lg-0">
              {/*  */}

              {/* Date */}
              <span className="badge bg-dark text-light mb-2 px-3 py-2 rounded-pill fw-semibold">
                {project?.date}
              </span>
              {/*  */}

              {/* Title */}
              <h1
                className={`display-4  mb-3 ${anton.className} text-uppercase`}
                style={{ color: "var(--textcolor)" }}
              >
                {project?.slug}
              </h1>

              {/* First INFOS */}
              <p className=" text-muted mb-4">{project?.maininfo}</p>

              {/* Tech Stack Badges */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {project?.Techstack.map((tech, index) => (
                  <span
                    key={index}
                    className="badge fw-light border border-dark px-3 py-2 text-uppercase"
                    style={{
                      letterSpacing: "1.2px",
                      backgroundColor: "var(--secondaryColor)",
                      borderRadius: "0  ",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Links (Demo & GitHub) */}
              <div className="d-flex flex-wrap gap-3">
                {project?.githublinks.map((link, idx) => {
                  const [label, url] = link.split(": ");
                  return (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" px-4 py-2 buttonMain text-uppercase"
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Immagine Principale */}
            <div className="col-lg-7">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary">
                <img src={project?.gif1} alt="MainIMG" className="w-100" />
              </div>
            </div>
          </section>

          {/* SEZIONE APPROFONDITA: ARCHITETTURA E LOGICA DATI (otherInfos) */}
          <section className="row mb-5 pb-4 border-bottom border-secondary align-items-center">
            <div className="col-lg-8">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary">
                <img src={project?.gif2} alt="MainIMG" className="w-100" />
              </div>
            </div>
            <div className="col-lg-4">
              <h3
                className={`mb-3 ${anton.className} text-uppercase`}
                style={{ color: "var(--textcolor)" }}
              >
                Architettura & Logica Dati
              </h3>
              <p className="text-muted mb-4" style={{ whiteSpace: "pre-line" }}>
                {project?.otherInfos}
              </p>
            </div>
          </section>

          {/* Interfaccia & Esperienza Utente (otherInfos2) */}
          <section className="row mb-5 pb-4 border-bottom border-secondary">
            <div className="col-lg-4">
              <h3
                className={`mb-3 ${anton.className} text-uppercase`}
                style={{ color: "var(--textcolor)" }}
              >
                Interfaccia & Esperienza Utente
              </h3>
              <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
                {project?.otherInfos2}
              </p>
            </div>
            <div className="col-lg-8">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary">
                <img src={project?.gif3} alt="MainIMG" className="w-100" />
              </div>
            </div>
          </section>

          {/* (lastInfo) */}
          <section className="row mb-5 border-bottom border-secondary pb-4">
            <div className="col-lg-8">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary">
                <img src={project?.gif4} alt="MainIMG" className="w-100" />
              </div>
            </div>
            <div className="col-lg-4">
              <h3
                className={`mb-3 ${anton.className} text-uppercase`}
                style={{ color: "var(--textcolor)" }}
              >
                {project?.slug === "PocketGuide"
                  ? "Gestione & Filtrazione Contenuti"
                  : "Servizi Backend & Comunicazione"}
              </h3>
              <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
                {project?.lastInfo}
              </p>
            </div>
          </section>

          <p
            className={`mb-3  text-uppercase`}
            style={{ color: "var(--textcolor)" }}
          >
            Se vuoi vedere tutte le funzioni della webapp ecco qui il link al
            video:{" "}
            <a
              className={`mb-3  text-uppercase`}
              style={{ color: "var(--secondaryColor)" }}
              href={project?.video}
              target="_blank"
            >
              Clicca qui
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
