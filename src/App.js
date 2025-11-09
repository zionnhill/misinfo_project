// src/App.js
import React from "react";
import "./App.css";
import MisinformationForm from "./MisinformationForm";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Misinformation Detector</h1>
        <p>Check if a post contains misinformation!</p>
      </header>

      <div className="card">
        <MisinformationForm />
      </div>
    </div>
  );
}

export default App;
