import React from "react";

export default function SalesMounth() {
  return (
    <div className="sales-mounth-container">
      <div className="sales-mounth-right-content">
        <div className="sales-mounth-right-header">
          <h4>فروش ماهانه</h4>
          <span>فروش رفته</span>
        </div>

        <div className="sales-mounth-right-chart"> chart....</div>

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
          <div>
            <div className="sales-mount-rectangle-chart"></div>
            <div className="sales-mounth-left-content_chart-text">
              <span>فصل بهار</span>
              <span> 3,000,000 ریال</span>
            </div>
          </div>
          <div>
            <div className="sales-mount-rectangle-chart"></div>
            <div className="sales-mounth-left-content_chart-text">
              <span>فصل بهار</span>
              <span> 3,000,000 ریال</span>
            </div>
          </div>
          <div>
            <div className="sales-mount-rectangle-chart"></div>
            <div className="sales-mounth-left-content_chart-text">
              <span>فصل بهار</span>
              <span> 3,000,000 ریال</span>
            </div>
          </div>
          <div>
            <div className="sales-mount-rectangle-chart"></div>
            <div className="sales-mounth-left-content_chart-text">
              <span>فصل بهار</span>
              <span> 3,000,000 ریال</span>
            </div>
          </div>
        </div>

        <div className="sales-mounth-left-contetnt_link">
          <a href="#">جزییات فروش ماهانه</a>
        </div>
      </div>
    </div>
  );
}
