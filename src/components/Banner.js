import React from "react";
import "./styles/Banner.scss";
import Particle from "./Particle";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-overlay"></div>
      <Particle />
      <div className="container">
        <div className="banner-content d-flex justify-content-center align-items-center text-center text-white">
          <div className="inner-content">
            <h1>Hello Developer!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
