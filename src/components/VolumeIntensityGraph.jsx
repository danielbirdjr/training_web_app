import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VolumeIntensityGraph = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Volume',
        data: [70, 78, 82, 86, 90, 80],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: 'y-volume',
      },
      {
        label: 'Intensity',
        data: [7, 7.5, 8, 8.5, 8.5, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y-intensity',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hides the x-axis labels if you don't want them
        },
      },
      'y-volume': {
        type: 'linear',
        position: 'left',
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: false,
          min: 20,
          max: 200,
          maxTicksLimit: 3, // Limits the number of tick labels on the y-axis for volume
        },
      },
      'y-intensity': {
        type: 'linear',
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: false,
          min: 4,
          max: 10,
          maxTicksLimit: 3, // Limits the number of tick labels on the y-axis for intensity
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the legend if you don't want it
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default VolumeIntensityGraph;
