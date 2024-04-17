import React from 'react'
import './landingPage.css';
import SchoolRegion from '../../components/schoolsRegion/schoolsRegion';
import Navbar from '../../components/navbar/navbar';
import SchoolList from '../school-List/school-List';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div class="banner-container">
        <div class="banner-overlay">
          <div class="banner-content">
            <h1 class="banner-title">Welcome to SchoolConnect</h1><br /><br />
            <SchoolRegion />

          </div>
        </div>
      </div>
        <SchoolList/>
      {/* <a href="#" class="banner-button">Learn More</a> */}
    </div>
  )
}

export default LandingPage