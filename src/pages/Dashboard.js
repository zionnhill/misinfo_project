import React from "react";
import SentimentChart from "../components/SentimentChart";
import WordCloudChart from "../components/WordCloudChart";
import "../styles/dashboard.css";

const Dashboard = () => {
  const sentimentData = [
    { name: "Positive", value: 120 },
    { name: "Neutral", value: 80 },
    { name: "Negative", value: 60 },
  ];

  const wordData = [
    { text: "vaccine", value: 50 },
    { text: "fake", value: 35 },
    { text: "news", value: 30 },
    { text: "health", value: 25 },
    { text: "covid", value: 20 },
  ];

  return (
    <div className="dashboard-container">
      <h2>Misinformation Insights Dashboard</h2>
      <div className="chart-grid">
        <div className="chart-card">
          <SentimentChart data={sentimentData} />
        </div>
        <div className="chart-card">
          <WordCloudChart words={wordData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;