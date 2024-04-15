import React from 'react'
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className='containers'>
            <div class="login-form">
                <h2>USER LOGIN</h2>
                <div id="error-message" class="error-message"></div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" />
                </div>
                <button id="login-btn">Login</button>
                <p> <a href="/forgot-password">Forgot Password?</a></p><p> or Don't have an account? <a href="/signup">Sign Up</a></p>
                
            </div>
        </div>
    )
}

export default LoginPage