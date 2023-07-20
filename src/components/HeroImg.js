import IntroImg from "../assets/background.jpg";
import { Link } from "react-router-dom";

import "../styles/HeroImgStyle.css";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1>Welcome to my learning journey!</h1>
        <p>
          Thank you for joining me on this quest for knowledge and growth. Happy
          exploring! 🚀📚✨
        </p>
        <Link to="/project" className="btn">
        GitHub links
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
