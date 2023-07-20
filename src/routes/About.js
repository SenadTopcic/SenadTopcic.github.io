import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutData from "../datas/AboutData";

const About = () => {
  const datas = {...AboutData}

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About me" text={datas.about_me} />
      <Footer />
    </div>
  );
};

export default About;
