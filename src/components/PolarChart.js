// PolarChart.js
import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// ثبت کردن ماژول‌های مورد نیاز chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
  // state برای نگه داشتن دیتا (فرض می‌کنیم بعداً از API میاد)
  const [chartData, setChartData] = useState({
    data: [],   // بعدا از API میاد [12, 19, 3, ...]
  });

  // اینجا یه شبیه‌سازی برای گرفتن دیتا از API می‌ذاریم (موقت)
  useEffect(() => {
    // شبیه‌سازی دیتای اومده از API
    const fetchData = async () => {
      // فرض کن این دیتا از سرور میاد:
      const fakeApiData = {
        labels: ['قرمز', 'آبی', 'زرد', 'سبز', 'بنفش'],
        data: [12, 19, 3, 5, 8],
      };

      // اینجا دیتا رو میریزم تو state
      setChartData(fakeApiData);
    };

    fetchData();
  }, []); // فقط یکبار اجرا میشه (زمان لود کامپوننت)

  // تنظیمات اختیاری چارت
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // محل نمایش legend
      },
      tooltip: {
        enabled: true, // نمایش تولتیپ
      },
    },
    scales: {
      r: {
        ticks: {
          display: false, // حذف اعداد روی محور
        },
        grid: {
          circular: true, // خطوط دایره‌ای حفظ بشن
        },
      },
    },
  };

  // داده نهایی که به PolarArea داده میشه
  const data = {
    datasets: [
      {
        label: 'میزان فروش (واحد)',
        data: chartData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '250px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarChart;
