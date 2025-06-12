import React from "react";
import DoughnutChart from "./DoughnutChart";

export default function TotalIncomeChart() {
  return (
    <div className="total-income-container">
      <div className="total-income-title">
        <h4>کل درامد</h4>
        <span>200,000,000</span>
      </div>

      <div className="totla-income-content">
        <div className="total-content-charts"> 
          <DoughnutChart />
        </div>

        <a href="#"> مشاهده جزییات</a>
      </div>
    </div>
  );
}
