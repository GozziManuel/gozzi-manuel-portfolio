"use client";

import { useState } from "react";
import { anton } from "../utils/font";
import "../Projects/Projectpage.css";

//
export default function PortFolioCard() {
  const [appearInfo, setAppearInfo] = useState<boolean>(false);
  return (
    <div
      className={`col-lg-6 col-12`}
      //  setting appear function
    >
      {appearInfo ? (
        <div key="details" className=" ColContainerCarousel h-100 fade-in-card">
          <div
            style={{
              backgroundColor: "var(--secondaryColor)",
              maxHeight: "480px",
              paddingBottom: "110px",
              paddingTop: "110px",
            }}
            className="h-100 text-white d-flex justify-content-center align-items-center text-center"
          >
            <div className=" ">
              <h2 className={`text-uppercase ${anton.className}`}>
                Ci sei ora!
                <i
                  className="bi bi-arrow-return-left ms-3"
                  onClick={() => {
                    setAppearInfo((current) => !current);
                  }}
                  style={{ cursor: "pointer" }}
                ></i>
              </h2>
              <a
                href="https://github.com/GozziManuel/gozzi-manuel-portfolio"
                className="text-white"
                target="_blank"
              >
                {" "}
                Per vedere il codice qua clicca qua!
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          key="preview"
          className=" ColContainerCarousel fade-in-card"
          style={{ color: "var(--textcolor)" }}
          onClick={() => {
            setAppearInfo((current) => !current);
          }}
        >
          <div style={{ cursor: "pointer" }}>
            <div className="CarouselContainer w-100" style={{}}>
              <img
                src={"/PortFolio.png"}
                alt="Carousel preview"
                className="w-100 CarouselPhoto"
              />
            </div>
            <h2 className={anton.className}>PortFolio</h2>
          </div>
        </div>
      )}
    </div>
  );
}
