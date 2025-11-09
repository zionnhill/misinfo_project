// src/components/SentimentChart.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const SentimentChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SentimentChart;