
import React, { useContext } from 'react';
import './Signup.css';
import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const { userPassword, setUserPassword, confirm, setConfirm, error, setFullName, setEmail } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className='outer'>
      <h2>Sign Up</h2>

      <input className='signup-input' placeholder='Enter Full Name' onChange={(e) => setFullName(e.target.value)} />
      <input className='signup-input' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
      <input className='signup-input' type='password' placeholder='Enter Password' onChange={(e) => setUserPassword(e.target.value)} />
      <input placeholder='Confirm Password' type='password' className='password' onChange={(e) => setConfirm(e.target.value)} />
      {error && <p>{error}</p>}
      <button className='create-ac-btn' onClick={() => navigate('/page')}>Create an account</button>
    </div>
  );
}

export default Signup;











// import React, { useContext } from 'react';
// import './Signup.css';
// import MyContext from './MyContext';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const { userPassword, setUserPassword, confirm, setConfirm, error, setError,fullName,setFullName,email,setEmail } = useContext(MyContext);
//   const navigate = useNavigate();

//   const handleChange = () => {
//     if ( !fullName || !email ||   !userPassword || !confirm ) {
//       setError('Please fill in all the fields');
//     } else if (userPassword === confirm) {
//       navigate('/page');
//     } else {
//       setError(`Password doesn't match`);
//     }
//   };

//   return (
//     <div className='outer'>
//       <h2>Sign Up</h2>

//       <input className='signup-input' placeholder='Enter Full Name' value={fullName} onChange={(e)=>setFullName(e.target.value)} />
//       <input className='signup-input' placeholder='Enter email  ' value={email} onChange={(e)=>setEmail(e.target.value)} />
//       <input className='signup-input' type='password' placeholder='Enter Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
//       <input placeholder='Confirm Password' type='password' className='password' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
//       {error && <p>{error}</p>}
//       <button className='create-ac-btn' onClick={handleChange}>Create an account</button>
//     </div>
//   );
// }

// export default Signup;