import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from './MyContext';
import './Login.css';

function Login() {
  const { userLogin, userEmail, setUserEmail, userPassword, setUserPassword, error, setError,buttonClicked, setButtonClicked } = useContext(MyContext);
  const navigate = useNavigate();
  console.log(userLogin)


  useEffect(() => {
    if (buttonClicked) {
      const matchingUser = userLogin.find(
        (user) => user.email === userEmail && user.password === userPassword
      );

      if (matchingUser) {
        navigate('/page');
      } else {
        setError('Invalid email or password');
      }
    }
  }, [userEmail, userPassword, navigate, setError, buttonClicked]);

  const handleLogin = () => {
   
    setButtonClicked(true);
  };

  return (
    <div className="outer-box">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter email or phone"
        className="email-text"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      {buttonClicked && error && <p>{error}</p>}

      <button className="btn-login" onClick={handleLogin}>
        Login
      </button>

      <p>
        Don't have an account? <Link to="/signup">Sign-up</Link>
      </p>
    </div>
  );
}

export default Login;
