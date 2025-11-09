// src/MisinformationForm.js
import React, { useState } from "react";
import axios from "axios";
import "./MisinformationForm.css";

function MisinformationForm() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      // Replace this with your actual backend URL
      const response = await axios.post("http://localhost:8000/predict", { text });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult({ prediction: "Error", confidence: 0 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="misinfo-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter social media text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Checking..." : "Check Text"}
      </button>

      {result && (
        <div className="result">
          <h3>Prediction: {result.prediction}</h3>
          <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
        </div>
      )}
    </form>
  );
}

export default MisinformationForm;
