import Link from "next/link";
import { anton } from "../utils/font";
import { ProjectList } from "../utils/project";
import "./Projectpage.css";
import "../components/ComponentsCSS/carousel.css";

//
export default function ProjectsPage() {
  return (
    <div className="ContainerBody">
      <div className="d-flex row w-100">
        <h1 className={`col-4 ${anton.className}`}>I MIEI PROGETTI</h1>
        {ProjectList.map((el) => {
          return (
            <div
              className={` ${el.slug === "Resonus" ? "col-8 mb-5" : "col-6"}`}
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
      </div>
    </div>
  );
}
