
import React, { useContext, useState, useEffect } from 'react';
import MyContext from './MyContext';
import { Link } from 'react-router-dom';
import './UserAccount.css';

const UserAccount = () => {
  useEffect(()=>{
   console.log('currentLogin is me')
   console.log(currentLogin)
  },[])
  const {
   
    setLoginData,
    setShowUserDetails,
    setUserEmail,
    setLogin,
   
    currentLogin,
    setCurrentLogin,
    storeEmail,setStoreEmail,
    liked,setLiked,
    cartItems,setCartItems
    
    
    
  } = useContext(MyContext);
 

  const [clickedLogout, setClickedLogout] = useState(false);


  const handleLogout = () => {
    setUserEmail('');
    setShowUserDetails(false);
    setLogin(false);
    setClickedLogout(!clickedLogout);
    setCurrentLogin('');
    setLoginData(currentLogin);
    setStoreEmail('')
    alert('Logout Successful')
    setLiked([])
    setCartItems([])
  };
  setTimeout(() => {
    setShowUserDetails(false);
  }, 3000);


  return (
    <div className='userdetail'>
      {storeEmail ? (<>
        <p>{storeEmail}</p>
        <button className='logout-btn' onClick={handleLogout}>
          Logout
        </button>
      </>
      ) : (
        <> 
          <p className='signup-txt'>
            Don't have an account?
            <Link to='/signup' className='signup-btn'>
              <p>Sign up</p>
            </Link>
           
            <Link to='/'>
              <p>Login</p>
            </Link>
          </p>
        </>
      )}
    </div>
  );
};
export default UserAccount;
