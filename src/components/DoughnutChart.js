import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ثبت ماژول‌های لازم
ChartJS.register(ArcElement, Tooltip, Legend);

// پلاگین برای دایره وسط و متن وسط
const centerCircleWithTextPlugin = {
  id: 'centerCircleWithText',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { left, right, top, bottom } } = chart;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    // دایره وسط
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, options.radius || 70, 0, 2 * Math.PI);
    ctx.fillStyle = options.color || '#ccc';
    ctx.fill();
    ctx.restore();

    // متن وسط
    ctx.save();
    ctx.fillStyle = options.textColor || '#333';
    ctx.font = options.font || 'bold 16px Vazir, Tahoma, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(options.text || '', centerX, centerY);
    ctx.restore();
  }
};

const DoughnutChart = () => {
  // state برای دیتا و متن وسط
  const [chartData, setChartData] = useState({
    datasets: [{
      label: 'میزان فروش (واحد)',
      data: [],
      backgroundColor: [],
      borderColor: '#fff',
      borderWidth: 5,
      borderRadius: 10,
    }],
  });

  const [centerText, setCenterText] = useState('');

  useEffect(() => {
    // شبیه‌سازی دریافت دیتا از API
    setTimeout(() => {
      // داده‌های فرضی که از API اومده
      const apiData = {
        // labels: ['قرمز', 'آبی', 'زرد'],
        values: [12, 19, 8],
        colors: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        totalSales: '200,000,000 ریال',
      };

      setChartData({
        labels: apiData.labels,
        datasets: [{
          label: 'میزان فروش (واحد)',
          data: apiData.values,
          backgroundColor: apiData.colors,
          borderColor: '#fff',
          borderWidth: 5,
          borderRadius: 10,
        }],
      });

      setCenterText(apiData.totalSales);
    }, 1000);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      centerCircleWithText: {
        // گزینه‌های پلاگین دایره وسط
        radius: 70, // شعاع دایره وسط
        color: '#ccc', // رنگ دایره وسط
        text: centerText,
        textColor: '#333',
        font: 'bold 16px Vazir, Tahoma, sans-serif',
      },
    },
    cutout: '80%',
  };

  return (
    <div style={{ width: '220px', margin: '0 auto', position: 'relative' }}>
      <Doughnut
        data={chartData}
        options={options}
        plugins={[centerCircleWithTextPlugin]}
      />
    </div>
  );
};

export default DoughnutChart;
