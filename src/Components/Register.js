import React, { useContext, useState,useEffect } from 'react';
import './Signup.css';
import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const {usersData,setUsersData} = useContext(MyContext)
  const [fullName,setFullName] =useState('')
  const [email,setEmail] =useState('')
  const [userPassword,setUserPassword]= useState('')
  const [confirm,setConfirm] =useState('')
  const navigate = useNavigate();
  const [error,setError] =useState('')

  
  
  const handleCreateAccount = () => {
    if (!fullName || !email || !userPassword || !confirm) {
      setError('Please fill all input fields');
    } else if (userPassword !== confirm) {
      setError(`Password doesn't match`);
    } else {
      const userData = { email, userPassword };

      setUsersData([...usersData, userData]); 
      console.log(usersData);

   
      navigate('/registerlogin');
    }
  };
  

  return (
    <div className='outer'>
      <h2>Sign Up</h2>

      <input className='signup-input' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)}  />
      <input className='signup-input' placeholder='Enter email'value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='signup-input' type='password' placeholder='Enter Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
      <input placeholder='Confirm Password' type='password' className='password'value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      {error && <p>{error}</p>}
      <button className='create-ac-btn' onClick={handleCreateAccount}>Create an account</button>
    </div>
  );
}

export default Register;
