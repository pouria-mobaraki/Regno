import React from "react";
import BarChart from "./BarChart";
import BarList from "./BarList";

export default function SalesMounth() {
  const fakeData = [
    { label: "فصل بهار", value: 3000000, percent: 60 },
    { label: "فصل تابستان", value: 2500000, percent: 50 },
    { label: "فصل پاییز", value: 4000000, percent: 80 },
    { label: "فصل زمستان", value: 1500000, percent: 30 },
  ];

  return (
    <div className="sales-mounth-container">
      <div className="sales-mounth-right-content">
        <div className="sales-mounth-right-header">
          <h4>فروش ماهانه</h4>
          <span>فروش رفته</span>
        </div>

        <div className="sales-mounth-right-chart">
          <BarChart />
        </div>

        <div className="sales-mounth-right-link">
          <div className="sales-mounth-right-link-img">
            <img src="" alt="" />
          </div>
          <a href="#" class="monthly-sales-link">
            جزئیات فروش ماهانه
          </a>
        </div>
      </div>

      <div className="sales-mounth-left-content">
        <div className="sales-mounth-left-contetnt_title">
          <h4>درامد فصل جاری</h4>
          <span>فروش رفته</span>
        </div>

        <div className="sales-mounth-left-content_chart">
          <BarList/>
          {/* {fakeData.map((item, index) => (
            <div key={index}>
              <div
                className="sales-mount-rectangle-chart"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: "green",
                  height: "20px",
                  borderRadius: "5px",
                  transition: "width 0.5s ease",
                }}
              ></div>
              <div className="sales-mounth-left-content_chart-text">
                <span>{item.label}</span>
                <span>{item.value.toLocaleString()} ریال</span>
              </div>
            </div>
          ))} */}
        </div>
        

        <div className="sales-mounth-left-contetnt_link">
          <a href="#">جزییات فروش ماهانه</a>
        </div>
      </div>
    </div>
  );
}
