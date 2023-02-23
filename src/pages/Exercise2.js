import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Exercise2Section from "../components/Exercise2Section";

function PageTitle() {
  useEffect(() => {
    document.title = "Frontend Assessment | Exercise 2";
  }, []);
}

function Exercise2() {
  PageTitle();
  return (
    <div className="main">
      <Banner />
      <Exercise2Section />
    </div>
  );
}

export default Exercise2;
