import React from 'react';
import withAuth from '../hoc/withAuth';
import '../styles/dashboard.css';
import VolumeIntensityGraph from '../components/VolumeIntensityGraph';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
        <div className='dashboard-container'>
            <div className='days-widget widget'>
                <p><strong>24</strong></p>
                <p>days out</p>
            </div>
            <div className='checkin-widget widget'>
                <h3>Sleep</h3>
                <h3>7:45 hr</h3>
                <h3>Weight</h3>
                <h3>-0.48 lb</h3>
                <h3>Stress</h3>
                <h3>2/5</h3>
            </div>
            <div className='vol-int-graph-widget widget'>
                <div className='mesocycle-title'>
                    <h5>Shoulder Focused Mesocycle</h5>
                    <h5>JUL 15 - OCT 29</h5>
                </div>
                <div className='widget-line'></div>
                <VolumeIntensityGraph />
            </div>
            <div className='week-overview-widget widget'>
                <div className='week-overview-title'>
                    <h5>Week 1</h5>
                    <div className='week-navigation-arrows'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="left-chevron-icon"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='right-chevron-icon'><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                </div>
                <div className='week-overview-day'>
                    <h5>Day 1</h5>
                </div>
                <div className='week-overview-day'>
                    <h5>Day 2</h5>
                </div>
                <div className='week-overview-day'>
                    <h5>Day 3</h5>
                </div>
                <div className='week-overview-day'>
                    <h5>Day 4</h5>
                </div>
                <div className='week-overview-day'>
                    <h5>Day 5</h5>
                </div>
                <div className='week-overview-day'>
                    <h5>Day 6</h5>
                </div>
                <button className='week-overview-day complete-week'>
                    <h5>Complete Week</h5>
                    <h5>0/6</h5>
                </button>
            </div>
        </div>
    </div>
  );
};

export default withAuth(Dashboard);
