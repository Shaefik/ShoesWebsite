import React, { useContext, useState } from 'react';
import './Login.css';
import MyContext from './MyContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const { clientData, login, setLogin, setCartItems, setCurrentLogin, setStoreEmail } = useContext(MyContext);
  const nav = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleLoginClicked = () => {
    const isValidUser = clientData.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      setCurrentLogin(loginData);
      nav('/all');
      setLogin(!login);
      setStoreEmail(email);
    
      setCartItems([]); 
      setError('');
      alert('Login Successful!!!')
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className='login-container'>
        <h3 className='login-h2'>Login</h3>
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
        <button className='login-button' onClick={handleLoginClicked}>
          Login
        </button>
        <Link to='/signup'>
          <button className='signup-button-for-login'>Signup</button>
        </Link>
        <Link to='/all'>
  <p className='skip'>Skip for now <span style={{ fontSize: '20px' ,color:'#007bff', fontWeight:'20px' }}>&#8594;</span></p>
</Link>

      </div>
    </>
  );
}

export default Login;


// import React, { useContext, useState } from 'react';
// import './Login.css';
// import { useNavigate, Link } from 'react-router-dom';
// import MyContext from './MyContext';

// function Login() {
//   const nav = useNavigate();
//   const {clientData,currentLogin,setCartItems,loginData} = useContext(MyContext)
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')
//   const [error,setError]  =useState('')

//   const handleLoginClicked = () => {
//     const isValidUser = clientData.some((user)=>user.email === loginData.email &&
//     user.password == loginData.password)
//     if(isValidUser){
//       setTimeout(() => {
//           console.log('Updated currentLogin:', currentLogin);
//         }, 0);
//         alert('Login Successful');
//         setCartItems([]);
//         nav('/all'); 
//         alert('Login Successful');

//     }else{
//       setError('Invalid email or password')
//     }
   

   
//   };

//   return (
//     <>
//       <div className='login-container'>
//         <h3 className='login-h2'>Login</h3>
//         <input
//           placeholder='Enter email'
//           type='text'
//           value={email}
//           onChange={(e)=>setEmail(e.target.value)}
          
//         />
//         <input
//           placeholder='Enter password'
//           type='password'
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//         />
//         <p>{error}</p>
//         <button className='login-button' onClick={handleLoginClicked}>
//           Login
//         </button>
//         <Link to='/signup'>
//           <button className='signup-button-for-login'>Signup</button>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Login;

