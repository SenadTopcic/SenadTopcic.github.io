import React from "react";
import { Link } from "react-router-dom";

import "../styles/AboutContentStyle.css";
import AboutData from "../datas/AboutData";

const AboutContent = () => {
  const datas = {...AboutData}
  
  return (
    <div className="about">
      <div className="left">
        <h1>{datas.header}</h1>
        <p>{datas.paragraph_text}</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={datas.Slika1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={datas.Slika2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
