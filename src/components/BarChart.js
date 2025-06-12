// BarChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // شبیه‌سازی فراخوانی API با setTimeout
    const fetchFakeData = () => {
      setTimeout(() => {
        // داده فیک
        const fakeData = {
          labels: [
            'اسفند', 'بهمن', 'دی', 'اذر', 'ابان', 'مهر',
            'تیر', 'تیر', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'
          ],
          values: [120, 200, 150, 300, 250, 400, 350, 420, 380, 450, 320, 390],
        };

        const formattedData = {
          labels: fakeData.labels,
          datasets: [
            {
              label: 'میزان فروش (میلیون تومان)',
              data: fakeData.values,
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderRadius: 5,
              barThickness: 12,
            },
          ],
        };

        // ست کردن داده در state
        setChartData(formattedData);
      }, 1000); // شبیه‌سازی تاخیر ۱ ثانیه‌ای
    };

    fetchFakeData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 100,
        max: 450,
        ticks: {
          stepSize: 50,
        },
        grid: {
          color: '#e0e0e0',
        },
        position: 'right',
      },
    },
  };

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', width: '100%'}}>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>در حال دریافت داده‌های فیک...</p>
      )}
    </div>
  );
};

export default BarChart;
