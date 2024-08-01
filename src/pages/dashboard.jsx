import React from 'react';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
        <div className='dashboard-container'>
            <div className='days-widget widget'>
                <p><strong>24</strong></p>
                <p>days out</p>
            </div>
            <div className='checkin-widget widget'>
                <h3>Sleep 7:45 hr</h3>
                <h3>Stress 2/5</h3>
                <h3>Weight -0.48 lb</h3>
            </div>
            <div className='vol-int-graph-widget widget'>
                <div className='mesocycle-title'>
                    <h5>Shoulder Focused Mesocycle</h5>
                    <h5>JUL 15 - OCT 29</h5>
                </div>
                <div className='widget-line'></div>
                    <div>Contents of graph would go here</div>
            </div>
            <div className='week-overview-widget widget'>
                <div className='week-overview-title'>
                    <h5>Overview</h5>
                    <h5>Week</h5>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
