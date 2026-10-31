//
"use client";

import { useEffect, useState } from "react";
import { anton } from "../fonts/font";
import Link from "next/link";

const images = ["/Resonus.png", "/PocketGuide.png", "/Press-Start.png"];

export default function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="row w-100">
      <div className={`col-lg-3 col-12 ${anton.className}`}>
        {" "}
        <h1 className="mb-5" style={{ fontSize: "60px" }}>
          {" "}
          PROGETTI
        </h1>
      </div>
      <Link className="col-lg-9 col-12 ColContainerCarousel" href="/Projects">
        <div style={{ cursor: "pointer" }}>
          <div className="CarouselContainer w-100" style={{}}>
            <img
              src={images[imageIndex]}
              alt="Carousel preview"
              style={{
                opacity: fade ? 1 : 0,
              }}
              className="w-100 CarouselPhoto"
            />
            <div className="ProjectNameBadge">
              {images[imageIndex].replaceAll("/", "").replaceAll(".png", "")}
            </div>
          </div>
          <div className="mt-3">
            <h2 className={anton.className}>
              VEDI TUTTI I PROGETTI NEL DETTAGLIO
              <i className="bi bi-arrow-right arrowAnimationCarousel fs-3 ms-3"></i>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
