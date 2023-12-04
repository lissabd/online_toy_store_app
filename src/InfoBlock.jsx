import React from "react";
import "./styles/InfoBlock.css";

const InfoBlock = () => {
  return (
    <div className="info-container">
      <div className="block-images">
        <img src="images/pic1.jpg" alt="round-info" />
        <h3>Product Support</h3>
        <p>Up to 3 years on-site warranty available for your peace of mind</p>
      </div>
      <div className="block-images">
        <img src="images/pic2.jpg" alt="round-info" />
        <h3>Personal Account</h3>
        <p>With big discounts, free delivery and a dedicated support specialist.</p>
      </div>
      <div className="block-images">
        <img src="images/pic3.jpg" alt="round-info" />
        <h3>Amazing Savings</h3>
        <p>Up to 70% off new Products, you can be sure of the best price.</p>
      </div>
    </div>
  );
};

export default InfoBlock;
