import React,{useContext, useState,useEffect} from 'react'
import './Login.css'
import MyContext from './MyContext'
import { useNavigate,Link } from 'react-router-dom'

function Login() {
   
    const {clientData,setClientData,login,setLogin,loginData,setLoginData} = useContext(MyContext)
    const [currentLogin,setCurrentLogin] = useState({})
    useEffect(() => {
      console.log('current:', currentLogin);
    }, [currentLogin]);
  

    
    const nav = useNavigate()
    const[error,setError] =useState('')
    
    const handleLoginClicked = () => {
      const isValidUser = clientData.some(
        user =>
          user.email === loginData.email && user.password === loginData.password
      );
    
      if (isValidUser) {
        setCurrentLogin(loginData);
        nav('/home');
        setLogin(!login);
    
        // Log currentLogin after updating the state
        setTimeout(() => {
          console.log('Updated currentLogin:', currentLogin);
        }, 0);
      } else {
        setError('Invalid email or password');
      }
    };
    
  
  return (
   <>
   <div  className='login-container'>
      <h3 className='login-h2'>Login</h3>
      <input placeholder='Enter email' value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} />
      <input placeholder='Enter password' type='password' value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})} />
      <p>{error}</p>
      <button className='login-button' onClick={handleLoginClicked}>Login</button>
     <Link to ='/signup'><button className='signup-button-for-login' >Signup</button></Link> 
      
      
   </div>

    
   </>
  )
}

export default Login