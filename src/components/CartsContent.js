import React from 'react';
import StatCard from './StatCard';
import { FaUserAlt, FaChartLine, FaShoppingCart, FaDollarSign, FaChartPie } from 'react-icons/fa';

export default function CartsContent() {
  const stats = [
    {
      value: 'ثبت سفارش جدید',
      icon: <FaUserAlt />,
      color: '#4e73df',
    },
    {
      title: 'سفارشات',
      value: '۲۳',
      icon: <FaShoppingCart />,
      color: '#1cc88a',
    },
    {
      title: 'سفارش های فعال',
      value: '۲۳',
      icon: <FaDollarSign />,
      color: '#36b9cc',
    },
    {
      title: 'تایید شده',
      value: '۲۳',
      icon: <FaChartLine />,
      color: '#f6c23e',
    },
    {
      title: 'مرجوع شده',
      value: '۲۳',
      icon: <FaChartPie />,
      color: '#e74a3b',
    },
  ];

  return (
    <div className="main-content-wrapper">
      <div className="stat-grid">
        {stats.map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
