import React from 'react'
import './AdminLogin.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';

const AdminLogin= () => {
    return (
        <>
        <Navbar/>
        <div className='containers'>
            <div class="login-form">
                <h2>ADMIN LOGIN</h2>
                <div id="error-message" class="error-message"></div>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="username" id="username" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" />
                </div>
                <Link to='/admindashboard'>
                <button id="login-btn">Login</button>
                </Link>
                <p> <a href="/forgot-password">Forgot Password?</a></p><p> or Don't have an account? <a href="/signup">Sign Up</a></p>
                
            </div>
        </div>
        </>
    )
}

export default AdminLogin