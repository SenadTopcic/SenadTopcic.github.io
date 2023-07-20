import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
import ProjectIntro from "../datas/project_intro.txt";

const Project = () => {
  const [fileContent, setFileContent] = useState([]);
  const title =
    "Cosmic Chronicles: My Journey through the Programming Universe";
  useEffect(() => {
    // Fetch the file content when the component mounts
    fetchFileContent();
  }, []);

  const fetchFileContent = async () => {
    try {
      const response = await fetch(ProjectIntro);
      if (!response.ok) {
        throw new Error("Error fetching the file");
      }
      const content = await response.text();

      // Split content into sentences and store it in an array
      const sentencesArray = content.split(/[\n]/).map((sentence) => sentence);

      setFileContent(sentencesArray);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar />
      <HeroImg2 heading={title} text={fileContent} />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
