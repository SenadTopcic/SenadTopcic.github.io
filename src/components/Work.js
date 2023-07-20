import React from "react";
import WorkCard from "./WorkCard";

import WorkCardData from "../datas/WorkCardData";
import "../styles/WorkCardStyle.css";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Github</h1>
      <div className="project-container">
        {WorkCardData.map((value) => {
          return (
            <WorkCard
              key={value.id}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
