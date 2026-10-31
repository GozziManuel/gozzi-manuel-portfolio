"use client";

//
import "../indexpage.css";
import "./ComponentsCSS/marquee.css";

import Marquee from "react-fast-marquee";
import { anton } from "../fonts/font";

const technologies = [
  "MYSQL",
  "REACT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "HTML5",
  "BOOTSTRAP",
  "JAVASCRIPT",
  "GIT",
  "EXPRESS",
];

export default function TechMarquee() {
  return (
    <div className=" py-3 text-white overflow-hidden Marque">
      <Marquee speed={20} gradient={false}>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`mx-5 text-2xl font-black tracking-wider uppercase ${anton.className} fs-1`}
          >
            {tech}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
