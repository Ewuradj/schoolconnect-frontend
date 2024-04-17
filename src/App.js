import React from 'react';
import AboutPage from '../src/pages/about/about.jsx';
import LandingPage from '../src/pages/landingPage/landingPage.jsx';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLogin from './pages/AdminLogin/AdminLogin.jsx';
import SignupPage from './pages/signUp/SignUp-page.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard/adminDashboard.jsx';
import SchooldetailPage from './pages/schooldetailPage/schooldetailPage.jsx';
import ReviewForm from './components/ReviewForm/ReviewForm.jsx';
// import Navbar from './components/navbar/navbar';
// import LandingPage from './pages/landingPage/landingPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutPage from '../src/pages/about/about.jsx';
// import SignupPage from '../src/pages/signUp/SignUp-page.jsx';
// import LoginPage from '../src/pages/login/LoginPage.jsx';
// import LandingPage from '../src/pages/landingPage/landingPage.jsx';
// import HomePage from './pages/HomePage.jsx';

function App() {
  const router = createBrowserRouter ([
    {path: "/", element: <LandingPage/>},
    
    {path:"/about", element:<AboutPage/>},
    {path:"/adminlogin", element:<AdminLogin/>},
    {path:"/signup", element:<SignupPage/>},
    {path:"/login", element:<LoginPage/>},
    {path:"/admindashboard", element:<AdminDashboard/>},
    {path:"/schooldetailpage", element:<SchooldetailPage/>},
    {path:"/reviewform", element:<ReviewForm/>},


    

  ])
  
  return (
    <>
    <RouterProvider router={router}/>

   </>
  );
}

export default App;