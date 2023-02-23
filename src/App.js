import React, { useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";

function PageTitle() {
  useEffect(() => {
    document.title = "Frontend Assessment | Exercise 1";
  }, []);
}

function App() {
  PageTitle();
  return (
    <div className="main">
      <Routes>
        <Route path="/" exact element={<Exercise1 />}></Route>
        <Route path="exercise-2" exact element={<Exercise2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
