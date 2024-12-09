import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Layout() {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        data: [10, 15, 20, 25, 30, 35],
        borderColor: "#4C6EF5",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Previous Week",
        data: [20, 18, 25, 22, 28, 30],
        borderColor: "#ADB5BD",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projections",
        data: [20, 25, 22, 30, 28, 35],
        backgroundColor: "#4C6EF5",
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        data: [300, 135, 154, 48],
        backgroundColor: ["#4C6EF5", "#74C0FC", "#63E6BE", "#FFA8A8"],
        hoverBackgroundColor: ["#3B5BDB", "#4DABF7", "#3BC9DB", "#FF8787"],
      },
    ],
  };

  return (
    <div className="layout">
      <div className="metrics">
        <div className="metric">
          <h3>Customers</h3>
          <p>3,781</p>
          <span className="positive">+11.01%</span>
        </div>
        <div className="metric">
          <h3>Orders</h3>
          <p>1,219</p>
          <span className="negative">-0.03%</span>
        </div>
        <div className="metric">
          <h3>Revenue</h3>
          <p>$695</p>
          <span className="positive">+15.03%</span>
        </div>
        <div className="metric">
          <h3>Growth</h3>
          <p>30.1%</p>
          <span className="positive">+6.08%</span>
        </div>
      </div>

      <div className="charts">
        <div className="chart line-chart">
          <h4>Revenue</h4>
          <Line data={lineChartData} />
        </div>
        <div className="chart bar-chart">
          <h4>Projections vs Actuals</h4>
          <Bar data={barChartData} />
        </div>
        <div
          className="chart doughnut-chart"
          style={{ height: "344px", width: "202px" }}
        >
          <h4>Total Sales</h4>
          <Doughnut data={doughnutChartData} />
        </div>
      </div>
    </div>
  );
}
