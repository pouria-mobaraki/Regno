import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CartsContent from './components/CartsContent';
import DashboardReports from './components/DashboardReports';


function App() {
  return (
    <div className='container'>

    <Header />

      <div className='main-layout'>

        <Sidebar/>
 
        <main className="main-content">
          <CartsContent/>
          <DashboardReports/>

        </main>
       

      </div>

    </div>
  );
}

export default App;
