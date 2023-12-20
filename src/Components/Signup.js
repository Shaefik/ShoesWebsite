import React,{useState} from 'react'
import './Signup.css'

function Signup() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[cnfmPassword,setCnfmPassword] = useState('')
  return (
    <div className='outer'>
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
         <button className='create-ac-btn'>
              Create new account
         </button>
    </div>
  )
}

export default Signup