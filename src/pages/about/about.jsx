import React from 'react';
import './about.css';
import Navbar from '../../components/navbar/navbar';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="containee">
    <div className="card-container">
      <div className="card">
        <h1>About SchoolConnect</h1>
        <p>
          Welcome to the SchoolConnect, your go-to platform for connecting parents with schools in their local area. Our mission is to simplify the school selection process and empower parents to make informed decisions about their child's education.
        </p>
      </div>

      <div className="card">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every child has access to quality education that caters to their unique needs and aspirations. By providing a centralized platform, we strive to make the process of finding and evaluating schools efficient, transparent, and convenient for parents.
        </p>
      </div>

      <div className="card">
        <h2>What We Offer</h2>
        <ul className="columns">
          <li>Extensive School Database</li>
          <li>User-Friendly Search Functionality</li>
          <li>Detailed School Profiles</li>
          <li>Parent Reviews and Ratings</li>
          <li>Direct Communication</li>
          <li>Personalized Shortlists</li>
          <li>Timely Notifications</li>
        </ul>
      </div>

      <div className="card">
        <p>
      
          At SchoolConnect, we are committed to providing a transparent and user-friendly platform that simplifies the school search process. We understand the significance of finding the right educational institution for your child's growth and development, and we are dedicated to supporting you every step of the way.
        </p>

      
        <p>
          We invite you to explore the Schools App, discover the diverse range of educational opportunities available, and embark on a journey to find the perfect school for your child. 
        </p>
      
      </div>

      </div>
    </div>
    </>
  );
};

export default AboutPage;