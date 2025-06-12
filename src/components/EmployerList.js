import React from "react";

export default function EmployerList() {
  return (
    <div className="employer-list-container">
      <div className="employer-list-title">
        <h4>لیست کارگذاری ها</h4>
        <span> فعال ترین کارگذاری</span>
      </div>
      <div className="employer-list-profile">
        <div className="employer-list-profile-img">
            <img src="" alt="" />
        </div>
        <div className="employer-list-profile-name">
            <span>کارگذاری الی گشت</span>
            <span>امیر فضلعلی پور</span>
        </div>
      </div>
      <div className="employer-list-buyer">
        <div className="employer-list-buyer-content">
            <h4>خریداران اخیر</h4>
            <span>مشاهده بیشتر</span>
        </div>
        <div className="employer-list-buyer-circle-info">
            <div className="employer-circle-info">M<span>ماهان</span></div>
            <div className="employer-circle-info">E<span>الی گشت</span></div>
            <div className="employer-circle-info">K<span>کیش</span></div>
            <div className="employer-circle-info">A<span>اسمان</span></div>
            <div className="employer-circle-info">A<span>ارسباران</span></div>
            <div className="employer-circle-info">I<span>ایرانیان</span></div>
        </div>
      </div>
      <div className="employer-list-total-employer">
        <div className="employer-list-total-right">
          <span className="employer-list-total-right-titile">تعداد کل کارگزاریها</span>
          <span className="employer-list-total-right-number">213</span>
        </div>

        <div className="employer-list-total-left">
          <img src="" alt="" />
        </div>
      </div>
      <div className="employer-list-link">
        <a href="#">مشاهده تمامی کارگذاران</a>
      </div>
    </div>
  );
}
