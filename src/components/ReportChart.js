import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import PolarChart from "./PolarChart";

function ReportChart() {
  return (
    <div className="report-chart-container">
      <div className="report-chart-header"> 
        <h4>
          گزارشات
        </h4>

        <div>
          <a href="#">سفارش های فعال </a>
           <a href="#">موجودی انبار </a>
            <a href="#">مرجوع شده </a>
        </div>
        
         </div>

      <div className="report-chart-content">
        <div className="report-chart-right-content">
          <img src="https://atmiran.com/wp-content/uploads/2020/12/card.jpg"  alt="" />
        </div>

        <div className="report-chart-contetnt_info">fffff</div>

        <div className="report-chart-left-content">
          
              <PolarChart/>
            
        </div>
      </div>
    </div>
  );
}

export default ReportChart;
