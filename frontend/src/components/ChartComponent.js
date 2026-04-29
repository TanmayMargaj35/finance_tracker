import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // <-- 1. IMPORT

// <-- 2. REGISTER THE ELEMENTS
ChartJS.register(ArcElement, Tooltip, Legend); 

const ChartComponent = ({ expenses }) => {
  const categories = [...new Set(expenses.map((e) => e.category))];
  const amounts = categories.map(
    (cat) => expenses.filter((e) => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      },
    ],
  };

  return (
    <div>
      <h2>📊 Spending Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default ChartComponent;