import React from 'react';
import ReportChart from './ReportChart';
import TotalIncomeChart from './TotalIncomeChart';
import SalesMounth from './SalesMounth';
import EmployerList from './EmployerList';


function DashboardReports() {
  return (
    <>
      <div className="first-line-dashboard">
        <ReportChart />
        <TotalIncomeChart />
      </div>

      <div className="second-line-dashboard">
        <SalesMounth />
        <EmployerList />
      </div>

      
    </>
  );
}

export default DashboardReports;
