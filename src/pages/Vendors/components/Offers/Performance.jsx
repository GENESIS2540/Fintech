import React from "react";
import { Line, Bar } from "react-chartjs-2";

const Performance = () => {

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Volume",
        data: [30, 45, 25, 60, 50, 75],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1000, 1200, 800, 1500, 1300, 1800],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  const satisfactionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Customer Satisfaction",
        data: [4, 5, 3, 4, 5, 4],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Performance Analytics Page</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Sales Volume Over Time</h3>
        <Line data={salesData} />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Revenue Over Time</h3>
        <Bar data={revenueData} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Customer Satisfaction Over Time</h3>
        <Line data={satisfactionData} />
      </div>
    </div>
  );
};

export default Performance;
