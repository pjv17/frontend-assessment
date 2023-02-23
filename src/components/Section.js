import React from "react";
import ImgColumn from "./assets/images/400x300.png";
import "./styles/Section.scss";

const Section = () => {
  return (
    <div className="section-1 py-5">
      <div className="container">
        <div className="d-flex w-100 gap-sm-3 flex-sm-row flex-column">
          <div className="col-lg-4 col-md mb-5">
            <div className="col-content h-100 position-relative p-3 pb-5 text-center">
              <img src={ImgColumn} className="w-100" alt="img col 1" />
              <p className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/" className="button btn position-absolute">
                READ MORE
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md mb-5">
            <div className="col-content h-100 position-relative p-3 pb-5 text-center">
              <img src={ImgColumn} className="w-100" alt="img col 1" />
              <p className="py-3">Exercise 2</p>
              <a href="/exercise-2" className="button btn position-absolute">
                READ MORE
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md mb-5">
            <div className="col-content h-100 position-relative p-3 pb-5 text-center">
              <img src={ImgColumn} className="w-100" alt="img col 1" />
              <p className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <a href="/" className="button btn position-absolute">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
