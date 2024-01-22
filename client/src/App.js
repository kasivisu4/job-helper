import "./App.css";
import Home from "./components/Home.js";
import LandingPage from "./components/LandingPage.js";
import { useState, useRef } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [pdfContent, setPdfContent] = useState("");

  return (
    <div>
      {pdfContent ? (
        <Home pdfContent={pdfContent} />
      ) : (
        <LandingPage setPdfContent={setPdfContent} />
      )}
      <SpeedInsights />
    </div>
  );
}

export default App;
