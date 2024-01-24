import "./App.css";
import DashBoard from "./pages/DashBoard.js";
import LandingPage from "./pages/LandingPage.js";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RoleIdentifier from "./pages/RoleIdentifier.js";
// import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/roleidentifier" element={<RoleIdentifier />}></Route>
      </Routes>

      {/* <SpeedInsights /> */}
    </div>
  );
}

export default App;
