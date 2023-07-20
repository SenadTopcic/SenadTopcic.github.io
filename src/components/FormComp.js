import "../styles/FormStyle.css";

import React from "react";

const FormComp = () => {
  return (
    <div className="form">
      <form>
        <h1>Contact Form </h1>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default FormComp;
