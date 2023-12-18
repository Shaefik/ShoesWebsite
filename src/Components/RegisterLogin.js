
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from './MyContext';


function RegisterLogin() {
  const{usersData,setUsersData} =useContext(MyContext)
  const [email,setEmail] = useState('')
  const [userPassword,setUserPassword] = useState('')
  const [error,setError] = useState('')
  const nav = useNavigate()
  const handleLogin=()=>{
    const loggedUser = usersData.find((data)=>data.email === email && data.userPassword === userPassword)
    if(loggedUser){
       nav('/page')
    }else{
       setError('Incorrect email or password')
    }
  }

  return (
    <div className="outer-box">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter email or phone"
        className="email-text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button className="btn-login"  onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default RegisterLogin;










// import { useContext, useState } from "react";

// import { useNavigate } from "react-router-dom";
// import MyContext from './MyContext';
// export default function RegisterLogin() {
//   const { logUser,setLogUser } = useContext(MyContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const nav = useNavigate();
//   console.log(logUser)

//   function loginBtn() {
//     const loggedUser=logUser.find(
//         (userData) => userData.email === email && userData.password === password
//       )
//     if(loggedUser){
//       setLogUser(loggedUser)
//       alert("Login successful !!!");
//       nav("/home");
//     } else {
//       alert("invalid email or password");
//     }
//   }

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br></br>
//         <button onClick={loginBtn}>Login</button>
//       </div>
//     </div>
//   );
// }
