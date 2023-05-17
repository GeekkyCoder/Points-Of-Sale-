import { Space } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { getSalesStats } from "../../api/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarGraph = () => {
  const [dataSource, setDataSource] = useState({
    labels: [],
    datasets: [],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "POS Stats",
      },
    },
  };

  useEffect(() => {
    const fetchGraphData = async () => {
      const sales = await getSalesStats();

      const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];

      const data = {
        labels,
        datasets: [
          {
            label: "Online Sales",
            data: sales?.onlineSales,
            backgroundColor: "rgb(29 78 216)",
          },
          {
            label: "Offline Sales",
            data: sales?.offlineSales,
            backgroundColor: "rgb(192 132 252)",
          },
        ],
      };

      setDataSource(data);
    };
    fetchGraphData();
  }, []);

  return (
      <Bar data={dataSource} options={options} />
  );
};
