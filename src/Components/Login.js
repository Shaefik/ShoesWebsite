import React,{useContext, useState} from 'react'
import './Login.css'
import MyContext from './MyContext'

function Login() {
   
    const {clientData,setClientData} = useContext(MyContext)
    const[error,setError] =useState('')
    const [loginData,setLoginData] = useState({
      email:'',
      password:''
    })
    const handleLoginClicked=()=>{
      if(loginData.email === clientData.email&&
        loginData.password === clientData.password){
          setError('success')
          console.log(loginData.email && loginData.password)
        }
        else{
          setError('Invalid email or password ')
        }
       
    }
  
  return (
   <>
   <div  className='login-container'>
      <h3 className='login-h2'>Login</h3>
      <input placeholder='Enter email' value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} />
      <input placeholder='Enter password' type='password' value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})} />
      <p>{error}</p>
      <button className='login-button' onClick={handleLoginClicked}>Login</button>
      
      
   </div>

    
   </>
  )
}

export default Login