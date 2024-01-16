import React, { useContext, useState } from 'react';
import './Login.css';
import MyContext from './MyContext';
import { useNavigate, Link } from 'react-router-dom';

function AdminLogin() {
  const { login, setLogin,adminData } = useContext(MyContext);
  const nav = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleAdminLogin = () => {
    try {
      if (!adminData || !Array.isArray(adminData)) {
        throw new Error('Invalid adminData');
      }
  
      const isValidUser = adminData.some((data) => data.email === email && data.password === password);
  
      if (isValidUser) {
        nav('/admin');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error in handleAdminLogin:', error.message);
      setError('An error occurred. Please try again.');
    }
  };
  
  
  return (
    <>
      <div className='login-container'>
        <h3 className='login-h2'>Admin Login</h3>
        <input
          placeholder='Enter email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          placeholder='Enter password'
          type='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
/>
        <p style={{ color: 'red' }}>{error}</p>
        <button className='login-button'  onClick={handleAdminLogin} >
          Login
        </button>
       
     

      </div>
    </>
  );
}

export default AdminLogin