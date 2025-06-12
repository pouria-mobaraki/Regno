import React from "react";

export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="stat-card" style={{ backgroundColor: color }}>
      <div className="stat-info">
        <h3 className="stat-value">{value}</h3>
        <p className="stat-title">{title}</p>
      </div>

      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
    </div>
  );
}
