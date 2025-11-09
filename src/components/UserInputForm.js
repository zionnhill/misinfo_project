// src/components/UserInputForm.js
import React, { useState } from "react";
import "../styles/form.css";

const UserInputForm = ({ onAnalyze }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      // Placeholder — later replace this with your FastAPI call
      // Example: const response = await fetch("/api/analyze", { ... })
      const fakeResponse = {
        sentiment: "Negative",
        confidence: 0.84,
        summary: "The statement contains misinformation about vaccines.",
      };

      setTimeout(() => {
        setLoading(false);
        onAnalyze(fakeResponse);
      }, 1000); // simulate loading
    } catch (error) {
      console.error("Error analyzing text:", error);
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Misinformation Detection</h2>
      <p className="form-subtext">Enter or paste a social media post, article text, or headline.</p>

      <form onSubmit={handleSubmit}>
        <textarea
          className="text-input"
          rows="6"
          placeholder="Type or paste content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" className="analyze-btn" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Text"}
        </button>
      </form>
    </div>
  );
};

export default UserInputForm;