import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo.jpg" alt="Logo" width={120} />

          <span className="secondaryText">
            Our vision is to help you by providing you the best properties
          </span>
        </div>

        {/* Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Bangalore, Karnataka</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

      </div>

      {/* New division for your personal info */}
      <div className="paddings innerWidth flexCenter personal-info">
        <div className="flexColCenter">
          <div className="secondaryText">
            Developed by : <strong> <h2>Govind Chaudhary</h2></strong>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Footer;
