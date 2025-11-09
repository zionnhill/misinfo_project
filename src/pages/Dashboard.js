import React from "react";
import SentimentChart from "../components/SentimentChart";
import "../styles/dashboard.css";

const Dashboard = () => {
  const sentimentData = [
    { name: "Positive", value: 120 },
    { name: "Neutral", value: 80 },
    { name: "Negative", value: 60 },
  ];

  

  return (
    <div className="dashboard-container">
      <h2>Misinformation Insights Dashboard</h2>
      <div className="chart-grid">
        <div className="chart-card">
          <SentimentChart data={sentimentData} />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;