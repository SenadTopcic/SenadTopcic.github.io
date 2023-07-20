import { Link } from "react-router-dom";
import React from "react";

import "../styles/PricingCardStyle.css";
import pricingData from "../datas/pricingData.json";

const PricingCard = () => {
  
  return (
    <div className="pricing">
      <div className="card-container">
        {/* Map through the pricingData and create a card for each package */}
        {pricingData.map((packageData, index) => (
          <div className="card" key={index}>
            <h3>{packageData.header3}</h3>
            <span className="bar"></span>
            <p className="btc">{packageData.price}</p>
            <p>{packageData.numDays}</p>
            <p>{packageData.pages}</p>
            <p>{packageData.featured}</p>
            <p>{packageData.design}</p>
            <Link to="/contact" className="btn">
              Purchase Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


export default PricingCard;
