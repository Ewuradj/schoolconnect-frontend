import React, { useState } from 'react';
import './SignUp-page.css';
import Navbar from '../../components/navbar/navbar';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!firstName.trim()) {
      setError('First Name is required');
      return;
    }

    if (!lastName.trim()) {
      setError('Last Name is required');
      return;
    }

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!password.trim()) {
      setError('Password is required');
      return;
    }

    // Perform registration logic and backend integration here
    // ...

    // Reset form fields and error message
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="h1">USER REGISTRATION </h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p>
            By proceeding, you acknowledge and agree to our{' '}
            <a href="Privacy Policy">Privacy Policy</a> and{' '}
            <a href="Terms of Use">Terms of Use</a>.
          </p>
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
        {/* <div className="form-group">
          <p>Or sign up with:</p>
          <button type="button">Google</button> <br /> <br />
          <button type="button">Facebook</button>
          <br /> <br />
          <button type="button">Apple</button>
          <br /> <br />
        </div> */}
        <div className="form-group">
          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignupPage;