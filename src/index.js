import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Exercise2 from "./pages/Exercise2";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.querySelector("#fa-assessment-e1"));
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/exercise-2" element={<Exercise2></Exercise2>}></Route>
    </Routes>
  </HashRouter>
);
