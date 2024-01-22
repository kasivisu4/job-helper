import "./App.css";
import Home from "./components/Home.js";
import LandingPage from "./components/LandingPage.js";
import { useState, useRef } from "react";

function App() {
  const [pdfContent, setPdfContent] = useState("");

  return (
    <div>
      {pdfContent ? (
        <Home pdfContent={pdfContent} />
      ) : (
        <LandingPage setPdfContent={setPdfContent} />
      )}
    </div>
  );
}

export default App;
