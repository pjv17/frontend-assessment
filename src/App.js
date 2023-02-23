import React, { useEffect } from "react";
import "./App.scss";
import Banner from "./components/Banner";
import Section from "./components/Section";

function PageTitle() {
  useEffect(() => {
    document.title = "Frontend Assessment | Exercise 1";
  }, []);
}

function App() {
  PageTitle();
  return (
    <div className="main">
      <Banner />
      <Section />
    </div>
  );
}

export default App;
