import Link from "next/link";
import { anton } from "../utils/font";
import { ProjectList } from "../utils/project";
import "./Projectpage.css";
import "../components/ComponentsCSS/carousel.css";
import PortFolioCard from "../components/PortFolioCard";

//
export default function ProjectsPage() {
  return (
    <div className="ContainerBody flex-column">
      <div className="d-flex row w-100">
        <h1
          className={`col-5 ${anton.className} display-3 col-lg-5 col-12 mb-5 mb-lg-0`}
        >
          I MIEI PROGETTI
        </h1>

        {/* Mapping Projects for Unic project on click */}
        {ProjectList.map((el) => {
          return (
            <div
              className={` ${el.slug === "Resonus" ? "col-lg-7 col-12 mb-5" : "col-lg-6 col-12"} mb-0 mb-sm-5`}
              key={el.slug}
            >
              <Link
                className="col-lg-9 col-12 ColContainerCarousel"
                href={`/Projects/${el.slug}`}
                style={{ color: "var(--textcolor)" }}
              >
                <div style={{ cursor: "pointer" }}>
                  <div className="CarouselContainer w-100" style={{}}>
                    <img
                      src={el.image}
                      alt="Carousel preview"
                      className="w-100 CarouselPhoto"
                    />
                  </div>
                  <h2 className={anton.className}>{el.slug}</h2>
                </div>
              </Link>
            </div>
          );
        })}
        <PortFolioCard />
      </div>

      <div className="d-flex row w-100 " style={{ marginTop: "100px" }}>
        <h1
          className={`col-5 ${anton.className}  col-lg-5 col-12 mb-5 mb-lg-0`}
        >
          Primi Progetti Boolean <br />{" "}
          <span className="">Progetti più piccoli</span>
        </h1>

        {/* Mapping Projects for Unic project on click */}
        {/* {ProjectList.map((el) => {
          
        })} */}
      </div>
    </div>
  );
}
