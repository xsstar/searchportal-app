import React from "react";
import LandingPage from "./components/Landing/LandingPage";
import ResultPage from "./components/Result/ResultPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>

        <Route exact path="/result" element={<ResultPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
