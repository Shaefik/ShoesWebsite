import React,{useState,useContext, useEffect} from 'react'
import './Signup.css'
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MyContext from './MyContext'

function Signup() {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[cnfmPassword,setCnfmPassword] = useState('')
    const[error,setError] = useState('')
    const {clientData,setClientData,loginData,setLoginData,setStoreEmail,storeEmail} = useContext(MyContext)

    
    const nav = useNavigate()
    const existUser = clientData.filter((user) => user.email === email).length > 0;
    function handleSubmit() {
      if (!name || !email || !password || !cnfmPassword) {
        setError('All fields are required');
      } else if (password !== cnfmPassword) {
        setError("Passwords don't match");
      }
      else if(existUser){
        setError('Email already exist!! ')

      } else {
        const nextId = clientData.length +1
        const newUser = { id:nextId, user: name, email, password };
    
        setClientData((prevClientData) => [...prevClientData, newUser]);
    
        setLoginData({ email });
        setStoreEmail(email)
      
    
        nav('/all');
        alert(`You're All Set!!!`)
      }
    }
    
    
    

  return (
    <div className='outer'>
      <h2>Signup</h2>
        <input 
           className='signup-input'
          type='txt'
          placeholder='Enter User Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}

        />
        <input 
        className='signup-input'
        type='txt'
        placeholder='Enter email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        className='signup-input'
         type='password'
         placeholder='Enter Password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
         <input

         className='signup-input'
         type='password'
         placeholder='Confirm Password'
         value={cnfmPassword}
         onChange={(e)=>setCnfmPassword(e.target.value)}
         />
         <p>{error}</p>
         <button className='create-ac-btn' onClick={handleSubmit}>
              Create new account
         </button>
         <Link to='/'><button className='login-for-signup'>Login</button></Link>
    </div>
  )
}

export default Signup