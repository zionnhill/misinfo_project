// src/App.js
import React from "react";
import "./App.css";
import MisinformationForm from "./MisinformationForm";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Misinformation Detector</h1>
        <p>Check posts and view analytics below</p>
      </header>

      <div className="card">
        <MisinformationForm />
      </div>

      <Dashboard />
    </div>
  );
}

export default App;